package com.kltn.server.module.seller.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {

        private Long productId;
        @NotNull(message = "Seller id shouldn't be null")
        private Long sellerId;
        private String title;
        private String sku;
        private Long categoryId;
        private BigDecimal price;
        private BigDecimal priceSales;
        private BigDecimal percentDiscount;
}
