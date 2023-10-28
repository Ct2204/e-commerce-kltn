package com.kltn.server.module.order.service;

import com.kltn.server.module.order.dto.OrderDetailDto;

import java.util.List;

public interface OrderDetailService {

    List<OrderDetailDto> getOrderDetailByOrderId(Long Id);
}
