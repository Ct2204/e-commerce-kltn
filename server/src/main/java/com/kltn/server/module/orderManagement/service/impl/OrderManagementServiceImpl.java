
package com.kltn.server.module.orderManagement.service.impl;

import com.kltn.server.common.entity.*;
import com.kltn.server.common.exception.ResourceNotFoundException;
import com.kltn.server.common.vo.OrderStatusE;
import com.kltn.server.module.cart.repository.CartItemRepository;
import com.kltn.server.module.orderManagement.dto.OrderManagementDto;
import com.kltn.server.module.orderManagement.repository.OrderDetailManagementRepository;
import com.kltn.server.module.orderManagement.repository.OrderManagementRepository;
import com.kltn.server.module.orderManagement.service.OrderManagementService;
import com.kltn.server.module.product.repository.ProductItemRepository;
import com.kltn.server.module.product.repository.ProductRepository;
import com.kltn.server.module.seller.repository.SellerRepository;
import com.kltn.server.module.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderManagementServiceImpl implements OrderManagementService {

    @Autowired
    private OrderManagementRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Autowired
    private OrderDetailManagementRepository orderDetailRepository;

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

    public OrderManagementDto getOrderById(Long id) {
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

    public List<OrderManagementDto> getAllOrderByUserId(Long id) {

        if (this.sellerRepository.findById(id).isEmpty()) {
            throw new ResourceNotFoundException("seller with id" + id +" not found");
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

    public List<OrderManagementDto> getOrderByStatus(OrderStatusE status) {
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


    public OrderManagementDto mapperOrderEntityToDto(Order order) {
        BigDecimal totalPrice = BigDecimal.valueOf(0);
        OrderManagementDto orderDto = new OrderManagementDto();
        orderDto.setId(order.getId());
        orderDto.setFullName(order.getUser().getUserProfile().getFullName());
        //orderDto.setFullName(order.getSeller().getSellerName());
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

    @Override
    public Long countUser() {

        return  userRepository.count();
    }


}
