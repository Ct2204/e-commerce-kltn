package com.kltn.server.module.orderManagement.repository;

import com.kltn.server.common.entity.Order;
import com.kltn.server.common.vo.OrderStatusE;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderManagementRepository extends JpaRepository<Order, Long> {

    @Query("SELECT od FROM Order od WHERE od.seller.id = :id ORDER BY od.updatedAt DESC")
    List<Order> getAllOrderByUserId(Long id);

    @Query("SELECT od FROM Order od WHERE od.status = :status")
    List<Order> getAllOrderByStatus(OrderStatusE status);
}
