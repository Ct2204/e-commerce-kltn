package com.kltn.server.module.order.dto;

import com.kltn.server.common.vo.OrderStatusE;
import com.kltn.server.module.product.dto.ProductDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {

    private Long id;

    private Short deliveryMethod;

    private OrderStatusE status;

    private Long paymentMethodId;

    private BigDecimal totalPrice;

    private Long productItemId;

    private String url;

    private String title;

    private String price;

    private Short quantity;


}
