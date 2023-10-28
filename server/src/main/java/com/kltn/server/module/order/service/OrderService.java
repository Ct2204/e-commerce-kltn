package com.kltn.server.module.order.service;

import com.kltn.server.common.entity.Order;
import com.kltn.server.common.vo.OrderStatusE;
import com.kltn.server.module.order.dto.CreateOrderRequestDto;
import com.kltn.server.module.order.dto.OrderDto;

import java.util.List;

public interface OrderService {

    OrderDto getOrderById(Long id);

    List<OrderDto> getAllOrderByUserId(Long id);

    List<OrderDto> getOrderByStatus(OrderStatusE status);

    void updateStatusOrder(Long id, OrderStatusE orderStatus);

    void saveOrder(CreateOrderRequestDto createOrderRequestDto);

    public OrderDto mapperOrderEntityToDto(Order order);
}
