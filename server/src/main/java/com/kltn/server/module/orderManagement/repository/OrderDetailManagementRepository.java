package com.kltn.server.module.orderManagement.repository;

import com.kltn.server.common.entity.OrderDetail;
import com.kltn.server.module.orderManagement.dto.OrderDetailManagementDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailManagementRepository extends JpaRepository<OrderDetail, Long> {

    @Query("SELECT new com.kltn.server.module.orderManagement.dto.OrderDetailManagementDto(odd.id,odd.order.id,odd.productItem.id,odd.quantity,odd.status)FROM OrderDetail odd  WHERE odd.order.id = :id")
    List<OrderDetailManagementDto> getOrderDetailByOrderId(Long id);
}
