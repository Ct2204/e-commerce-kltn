package com.kltn.server.module.order.service.impl;

import com.kltn.server.common.entity.*;
import com.kltn.server.common.exception.DuplicateResourceException;
import com.kltn.server.common.exception.ResourceNotFoundException;
import com.kltn.server.common.vo.CartItemStatusEnum;
import com.kltn.server.common.vo.OrderStatusE;
import com.kltn.server.common.vo.ProductStatusType;
import com.kltn.server.module.cart.repository.CartItemRepository;
import com.kltn.server.module.order.dto.CreateOrderRequestDto;
import com.kltn.server.module.order.dto.OrderDto;
import com.kltn.server.module.order.repository.OrderDetailRepository;
import com.kltn.server.module.order.repository.OrderRepository;
import com.kltn.server.module.order.service.OrderService;
import com.kltn.server.module.product.repository.ProductItemRepository;
import com.kltn.server.module.product.repository.ProductRepository;
import com.kltn.server.module.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ProductItemRepository productItemRepository;

    @Autowired
    private ProductRepository productRepository;

    /**
     * Get an order by id.
     *
     * @param id This is the ID of the order.
     * @return A order.
     */

    public OrderDto getOrderById(Long id) {
        Order order = this.orderRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("order with id " + id + " not found!"));
        return this.mapperOrderEntityToDto(order);
    }

    /**
     * Get all order by userID .
     *
     * @param id This is the ID of user.
     * @return The list order.
     */

    public List<OrderDto> getAllOrderByUserId(Long id) {
        if (this.userRepository.findById(id).isEmpty()) {
            throw new ResourceNotFoundException("user with id " + id + " not found!");
        }
        List<Order> list = this.orderRepository.getAllOrderByUserId(id);
        return list.stream().map(this::mapperOrderEntityToDto).collect(Collectors.toList());
    }

    /**
     * Get all order by userID .
     *
     * @param status This is the status of order.
     * @return The list order.
     */

    public List<OrderDto> getOrderByStatus(OrderStatusE status) {
        List<Order> list = this.orderRepository.getAllOrderByStatus(status);
        return list.stream().map(this::mapperOrderEntityToDto).collect(Collectors.toList());
    }

    /**
     * Update Status Order .
     *
     * @param id          This is the ID of order.
     * @param orderStatus this a status of order
     */

    public void updateStatusOrder(Long id, OrderStatusE orderStatus) {

        Order order = (Order) this.orderRepository.findById(id).orElseThrow(() -> {
            return new ResourceNotFoundException("order with id " + id + "not found");
        });
        if (order.getStatus() == OrderStatusE.PENDING) {
            order.setStatus(OrderStatusE.CANCELED);
            List<OrderDetail> listOrderDetail = order.getOrderDetails();
            for (OrderDetail orderDetail : listOrderDetail) {
                int backQuantity = orderDetail.getProductItem().getQuantity() + orderDetail.getQuantity();
                ProductItem productItem = orderDetail.getProductItem();
                productItem.setQuantity(backQuantity);
                this.productItemRepository.save(productItem);
            }
        } else {
            order.setStatus(orderStatus);
        }

        this.orderRepository.save(order);
    }

    /**
     * Get all order by userID .
     *
     * @param orderInput This is all information need to create order
     * @throws DuplicateResourceException if the cartitem and user not map.
     */

    @Transactional
    public HashMap<String,String> saveOrder(CreateOrderRequestDto orderInput) {
        List<CartItem> listCartItem = this.cartItemRepository.GetCartItemSelected(orderInput.getUserId(),
                orderInput.getCartItemId());
        System.out.println(listCartItem);
        if (listCartItem.isEmpty()) {
            throw new DuplicateResourceException("CartItem And User not map");
        } else {
            Order order = new Order();
            order.setStatus(OrderStatusE.PENDING);
            order.setUser((listCartItem.get(0).getUser()));
            order.setCreatedAt(Instant.now());
            order = this.orderRepository.save(order);
            for (CartItem item : listCartItem) {
                if (item.getQuantity() <= item.getProductItem().getQuantity()
                        && item.getStatus() == CartItemStatusEnum.SELECTED) {
                    OrderDetail orderDetail = new OrderDetail();
                    orderDetail.setOrder(order);
                    orderDetail.setQuantity(item.getQuantity().intValue());
                    orderDetail.setProductItem(item.getProductItem());
                    orderDetail = this.orderDetailRepository.save(orderDetail);
                    ProductItem productItem = item.getProductItem();
                    int newQuantity = productItem.getQuantity() - orderDetail.getQuantity();
                    productItem.setQuantity(newQuantity);
                    this.productItemRepository.save(productItem);
                    Long productQuantity = this.productItemRepository
                            .getQuantityProduct(productItem.getProduct().getId());
                    if (productQuantity == 0) {
                        Product product = productItem.getProduct();
                        product.setStatus(ProductStatusType.UNAVAILABLE);
                        this.productRepository.save(product);
                    }
                } else {

                    throw new ResourceNotFoundException("CartItem with " + item.getId() + " invalid please check !");
                }
            }
            HashMap<String, String> dataHashmap = new HashMap<>();

            dataHashmap.put("order_id", String.valueOf(order.getId()));

            return dataHashmap;
        }
    }

    public OrderDto mapperOrderEntityToDto(Order order) {
        BigDecimal totalPrice = BigDecimal.valueOf(0);
        OrderDto orderDto = new OrderDto();
        orderDto.setId(order.getId());
        order.setPaymentMethod(order.getPaymentMethod());
        for (OrderDetail orderDetail : order.getOrderDetails()) {
            BigDecimal total1 = new BigDecimal(orderDetail.getQuantity())
                    .multiply(orderDetail.getProductItem().getPrice());
            totalPrice = totalPrice.add(total1);
        }
        orderDto.setTotalPrice(totalPrice);
        orderDto.setStatus(order.getStatus());
        return orderDto;
    }
}
