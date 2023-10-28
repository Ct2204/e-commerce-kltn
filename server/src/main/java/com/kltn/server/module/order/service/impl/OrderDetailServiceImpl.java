package com.kltn.server.module.order.service.impl;

import com.kltn.server.module.order.dto.OrderDetailDto;
import com.kltn.server.module.order.repository.OrderDetailRepository;
import com.kltn.server.module.order.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailServiceImpl implements OrderDetailService {

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    public OrderDetailServiceImpl() {
    }

    public List<OrderDetailDto> getOrderDetailByOrderId(Long id) {
        return this.orderDetailRepository.getOrderDetailByOrderId(id);
    }
}
