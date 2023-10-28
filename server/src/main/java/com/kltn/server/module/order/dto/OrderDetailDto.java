package com.kltn.server.module.order.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailDto {

    private Long id;

    private Long orderId;

    private Long productItemId;

    private Short quantity;

    private Short status;
}
