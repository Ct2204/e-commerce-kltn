package com.kltn.server.module.order.repository;

import com.kltn.server.common.entity.OrderDetail;
import com.kltn.server.module.order.dto.OrderDetailDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {

    @Query("SELECT new com.kltn.server.module.order.dto.OrderDetailDto(odd.id,odd.order.id,odd.productItem.id,odd.quantity,odd.status)FROM OrderDetail odd  WHERE odd.order.id = :id")
    List<OrderDetailDto> getOrderDetailByOrderId(Long id);



}
