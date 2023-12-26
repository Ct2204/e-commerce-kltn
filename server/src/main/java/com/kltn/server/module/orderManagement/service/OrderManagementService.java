
package com.kltn.server.module.orderManagement.service;

import com.kltn.server.common.entity.Order;
import com.kltn.server.common.vo.OrderStatusE;
import com.kltn.server.module.orderManagement.dto.CreateOrderRequestManagementDto;
import com.kltn.server.module.orderManagement.dto.OrderManagementDto;

import java.util.List;

public interface OrderManagementService {

    OrderManagementDto getOrderById(Long id);

    List<OrderManagementDto> getAllOrderByUserId(Long id);

    List<OrderManagementDto> getOrderByStatus(OrderStatusE status);

    void updateStatusOrder(Long id, OrderStatusE orderStatus);

    void saveOrder(CreateOrderRequestManagementDto createOrderRequestDto);

    public OrderManagementDto mapperOrderEntityToDto(Order order);
}
