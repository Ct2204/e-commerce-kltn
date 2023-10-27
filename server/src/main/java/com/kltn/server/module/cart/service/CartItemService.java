package com.kltn.server.module.cart.service;

import com.kltn.server.module.cart.dto.CartItemQuantityRequestDto;
import com.kltn.server.module.cart.dto.CartItemReqDto;
import com.kltn.server.module.cart.dto.CartItemsPerUserResDto;

import java.util.List;

public interface CartItemService {

    void createNewCartItem(CartItemReqDto cartItemReqDto);

    List<CartItemsPerUserResDto> getAllCartItemsByUserId(Long id);

    void updateCartItems(Long userId, CartItemQuantityRequestDto cartItemQuantityRequestDtoList);

    void deleteCartItem(Long userId, Long cartItemId);
}
