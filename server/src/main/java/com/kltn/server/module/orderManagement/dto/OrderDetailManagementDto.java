
package com.kltn.server.module.orderManagement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailManagementDto {

    private Long id;

    private Long orderId;

    private Long productItemId;

    private Short quantity;

    private Short status;
}
