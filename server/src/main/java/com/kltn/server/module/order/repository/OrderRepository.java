package com.kltn.server.module.order.repository;

import com.kltn.server.common.entity.Order;
import com.kltn.server.common.vo.OrderStatusE;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT od FROM Order od WHERE od.user.id = :id")
    List<Order> getAllOrderByUserId(Long id);

    @Query("SELECT od FROM Order od WHERE od.status = :status")
    List<Order> getAllOrderByStatus(OrderStatusE status);
}
