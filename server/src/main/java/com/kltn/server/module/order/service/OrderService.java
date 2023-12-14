package com.kltn.server.module.order.service;

import com.kltn.server.common.entity.Order;
import com.kltn.server.common.vo.OrderStatusE;
import com.kltn.server.module.order.dto.CreateOrderRequestDto;
import com.kltn.server.module.order.dto.OrderDto;
import com.kltn.server.module.order.dto.OrderProductDto;

import java.util.HashMap;
import java.util.List;

public interface OrderService {

    OrderDto getOrderById(Long id);

    List<OrderProductDto> getAllOrderByUserId(Long id);

    List<OrderProductDto> getOrderByStatus(OrderStatusE status);

    void updateStatusOrder(Long id, OrderStatusE orderStatus);

    HashMap<String,String> saveOrder(CreateOrderRequestDto createOrderRequestDto);

    public OrderDto mapperOrderEntityToDto(Order order);

    List<OrderProductDto> getOrderProductInfoWithVisualUrl(Long orderId);
}
