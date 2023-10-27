package com.kltn.server.module.cart.service.impl;

import java.time.Instant;
import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kltn.server.common.entity.CartItem;
import com.kltn.server.common.entity.ProductItem;
import com.kltn.server.common.entity.User;
import com.kltn.server.common.exception.AuthorizeException;
import com.kltn.server.common.exception.InternalServerErrorException;
import com.kltn.server.common.exception.NotActivatedExceptionHandler;
import com.kltn.server.common.exception.ResourceNotFoundException;
import com.kltn.server.common.vo.CartItemStatusEnum;
import com.kltn.server.common.vo.UserStatusEnum;
import com.kltn.server.module.cart.dto.CartItemQuantityDto;
import com.kltn.server.module.cart.dto.CartItemQuantityRequestDto;
import com.kltn.server.module.cart.dto.CartItemReqDto;
import com.kltn.server.module.cart.dto.CartItemsPerUserResDto;
import com.kltn.server.module.cart.repository.CartItemRepository;
import com.kltn.server.module.cart.service.CartItemService;
import com.kltn.server.module.product.repository.ProductItemRepository;
import com.kltn.server.module.user.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class CartItemServiceImpl implements CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductItemRepository productItemRepository;

    /**
     * CREATE NEW CART ITEM SERVICE
     * Handle the incoming DTO containing userId, productItemId, and the quantity to
     * be added then validate the data.
     * Next, check whether the newly created productItem exists in the database.
     * If the user already has that productItem in their shopping cart, update the
     * quantity in the shopping cart.
     * If it does not exist, add it to the shopping cart and set the default status
     * as "SELECT"
     *
     * @param cartItemReqDto The DTO containing the necessary information to create
     *                       the cart item.
     * @throws ResourceNotFoundException    If the user or product item is not found
     *                                      in the database.
     * @throws AuthorizeException           If the user is not active or the
     *                                      quantity exceeds the inventory.
     * @throws InternalServerErrorException When exceeded inventory quantity.
     */
    @Override
    @Transactional
    public void createNewCartItem(CartItemReqDto cartItemReqDto) {

        Long userId = cartItemReqDto.getUserId();
        Long productItemId = cartItemReqDto.getProductItemId();
        CartItemStatusEnum status = CartItemStatusEnum.SELECTED; // status default when user add new product into cart.
        Short quantity = cartItemReqDto.getQuantity();

        // Find the user in the database based on the userId.
        User userEntity = this.userRepository
                .findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("userId not found!"));

        // Check if the user is active; the user must be active to add a new product.
        if (userEntity.getStatus() == UserStatusEnum.NOT_ACTIVATED) {
            throw new NotActivatedExceptionHandler("User hasn't been activated!");
        }

        // Check if the user has been banned.
        if (userEntity.getStatus() == UserStatusEnum.BANNED) {
            throw new AuthorizeException("User has been banned!");
        }

        // Find the product item in the database based on the productItemId.
        ProductItem productItem = this.productItemRepository.findById(productItemId)
                .orElseThrow(() -> new ResourceNotFoundException("Product item not found!"));

        Integer currentProductItemQuantity = productItem.getQuantity();

        // Check if the cartItem already exists in the database
        CartItem cartItem = this.cartItemRepository
                .findCartItemEntityByUserAndProductItemAndStatus(userEntity, productItem, status);

        if (cartItem != null) {

            int sum = quantity + cartItem.getQuantity();

            // Check if the updated quantity exceeds the current quantity in stock.
            if (sum > currentProductItemQuantity) {
                throw new InternalServerErrorException("Exceeded inventory quantity!");
            }

            cartItem.setQuantity(Short.valueOf(String.valueOf(sum)));

            cartItem.setUpdatedAt(Instant.now());
        } else {
            cartItem = new CartItem();

            // Check if the input quantity exceeds the current quantity in stock
            if (quantity > currentProductItemQuantity) {
                throw new InternalServerErrorException("Exceeded inventory quantity!");
            }

            cartItem.setProductItem(productItem);
            cartItem.setCreatedAt(Instant.now());
            cartItem.setQuantity(quantity);
            cartItem.setUser(userEntity);
            cartItem.setStatus(status);
        }

        this.cartItemRepository.save(cartItem);
    }

    /**
     * RETRIEVE ALL CART ITEMS FOR THE USER WITH THE GIVEN ID
     *
     * @param id The ID of the user.
     * @return A list of CartItemsPerUserResDTO representing the cart items.
     * @throws ResourceNotFoundException if the user with the given ID is not found.
     */
    @Override
    public List<CartItemsPerUserResDto> getAllCartItemsByUserId(Long id) {

        if (this.userRepository.findById(id).isEmpty()) {
            throw new ResourceNotFoundException("User not found!");
        }

        return this.cartItemRepository
                .findCartItemByUserId(id, CartItemStatusEnum.SELECTED.getValue())
                .stream()
                .map(this::mapper).collect(Collectors.toList());
    }

    public CartItemsPerUserResDto mapper(Object[] ob) {
        return new CartItemsPerUserResDto(
                Long.valueOf(String.valueOf(ob[0])),
                Long.valueOf(String.valueOf(ob[1])),
                ob[2] == null ? null : String.valueOf(ob[2]),
                String.valueOf(ob[3]),
                String.valueOf(ob[4]),
                Short.valueOf(String.valueOf(ob[5])),
                Short.valueOf(String.valueOf(ob[6])));
    }

    /**
     * Update all cart items in the user's shopping cart by the user's ID.
     * Updates occur when the user performs the following actions:
     * + Exiting the shopping cart.
     * + Adding a new product to the shopping cart.
     *
     * @param userId                         The user ID.
     * @param cartItemQuantityRequestDtoList A list containing the cart item IDs and
     *                                       the corresponding quantities to be
     *                                       updated.
     * @throws ResourceNotFoundException    If the provided cart item list or ID is
     *                                      invalid.
     * @throws InternalServerErrorException When the inventory quantity is exceeded.
     */
    @Override
    @Transactional
    public void updateCartItems(Long userId, CartItemQuantityRequestDto cartItemQuantityRequestDtoList) {

        List<CartItemQuantityDto> listDTO = cartItemQuantityRequestDtoList.getCartItemList();
        List<Long> list = listDTO.stream().map(CartItemQuantityDto::getCartItemId).collect(Collectors.toList());

        // Retrieve the cart items for the given user ID and specified item IDs that are
        // currently selected.
        List<CartItem> cartItems = this.cartItemRepository
                .findCartItemByIds(userId, list, CartItemStatusEnum.SELECTED);

        // Check if the cart item list is empty.
        if (cartItems.isEmpty()) {
            throw new ResourceNotFoundException("CartItemId in request body not found!!");
        }

        // Check if the number of cart items retrieved does not match the provided item
        // IDs.
        if (cartItems.size() != list.size()) {
            throw new ResourceNotFoundException("Some cartItemId in request body not found!");
        }

        // Create a map for quick access to cart items by their IDs.
        Map<Long, CartItem> cartItemMap = cartItems
                .stream()
                .collect(Collectors.toMap(CartItem::getId, Function.identity()));

        for (CartItemQuantityDto dto : listDTO) {

            Long cartItemId = dto.getCartItemId();

            int quantity = dto.getQuantity();

            CartItem cartItem = cartItemMap.get(cartItemId);

            ProductItem productItem = this.productItemRepository
                    .findById(cartItem.getProductItem().getId())
                    .orElseThrow(
                            () -> new InternalServerErrorException("Product item of this cart item not existing!"));

            // Check if the requested quantity is invalid (exceeds the current quantity or
            // results in negative quantity).
            if (quantity > productItem.getQuantity() || quantity < 0) {
                throw new InternalServerErrorException("Exceeded inventory quantity!");
            }

            // If the new quantity is zero, set the cart item status to "NOT_SELECTED".
            else if (quantity == 0) {
                cartItem.setStatus(CartItemStatusEnum.NOT_SELECTED);
            }

            cartItem.setQuantity((short) quantity);
        }

        // Save the updated cart items.
        this.cartItemRepository.saveAll(cartItems);
    }

    /**
     * DELETE CART ITEM
     * Used when the user clicks on the delete button for a cart item and confirms
     * the action
     *
     * @param userId     The user ID.
     * @param cartItemId The cart item ID.
     * @throws ResourceNotFoundException If the user ID or cart item ID is invalid.
     */
    @Override
    public void deleteCartItem(Long userId, Long cartItemId) {

        // Find the cart item entity for the given user ID and cart item ID.
        CartItem cartItem = this.cartItemRepository
                .findCartItemEntityByUserIdAndId(userId, cartItemId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart item not found!"));

        // Check if the cart item status is "NOT_SELECTED" (indicating it does not exist
        // in the user's shopping cart).
        if (cartItem.getStatus() == CartItemStatusEnum.NOT_SELECTED) {
            throw new ResourceNotFoundException("This product does not exist in the shopping cart of this user!");
        }

        // Set the cart item status to "NOT_SELECTED" and save the changes.
        cartItem.setStatus(CartItemStatusEnum.NOT_SELECTED);

        this.cartItemRepository.save(cartItem);
    }
}
