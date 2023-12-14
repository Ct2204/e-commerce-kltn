package com.kltn.server.module.order.repository;

import com.kltn.server.common.entity.Order;
import com.kltn.server.common.vo.OrderStatusE;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {


    @Query("SELECT od.productItem.id as productItemId, od.quantity as quantity, pi.title as title, pv.url as url,o.status as status,pi.price as price " +
            "FROM Order o " +
            "JOIN o.orderDetails od " +
            "JOIN od.productItem pi " +
            "LEFT JOIN pi.productItemDetails pid " +
            "LEFT JOIN pid.productOptionDetail pod " +
            "LEFT JOIN pod.productVisuals pv " +
            "WHERE o.user.id = :id AND pv.url IS NOT NULL")
    List<Object[]> getAllOrderByUserId(Long id);

//    @Query("SELECT od FROM Order od WHERE od.status = :status")
//    List<Order> getAllOrderByStatus(OrderStatusE status);

    @Query("SELECT od.productItem.id as productItemId, od.quantity as quantity, pi.title as title, pv.url as url,o.status as status,pi.price as price " +
            "FROM Order o " +
            "JOIN o.orderDetails od " +
            "JOIN od.productItem pi " +
            "LEFT JOIN pi.productItemDetails pid " +
            "LEFT JOIN pid.productOptionDetail pod " +
            "LEFT JOIN pod.productVisuals pv " +
            "WHERE o.status = :status AND pv.url IS NOT NULL")
    List<Object[]> getAllOrderByStatus(@Param("status") OrderStatusE status);

    @Query("SELECT od.productItem.id as productItemId, od.quantity as quantity, pi.title as title, pv.url as url,o.status as status,pi.price as price " +
            "FROM Order o " +
            "JOIN o.orderDetails od " +
            "JOIN od.productItem pi " +
            "LEFT JOIN pi.productItemDetails pid " +
            "LEFT JOIN pid.productOptionDetail pod " +
            "LEFT JOIN pod.productVisuals pv " +
            "WHERE o.id = :orderId AND pv.url IS NOT NULL")
    List<Object[]> getOrderProductInfoWithVisualUrl(@Param("orderId") Long orderId);
}
