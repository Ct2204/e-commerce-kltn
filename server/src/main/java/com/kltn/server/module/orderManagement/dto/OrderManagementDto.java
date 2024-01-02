
package com.kltn.server.module.orderManagement.dto;

import com.kltn.server.common.vo.OrderStatusE;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderManagementDto {

    private Long id;

    private Short deliveryMethod;

    private OrderStatusE status;

    private Long paymentMethodId;

    private BigDecimal totalPrice;

    private String fullName;

    private Instant updatedAt;
}
