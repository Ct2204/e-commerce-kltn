
package com.kltn.server.module.seller.dto;

import com.kltn.server.common.vo.ProductStatusType;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Builder

public class ProductListDto {
    private Long id;

    private String title;

    private Integer quantityInStock;

    private BigDecimal price;

    private ProductStatusType status;

    private String categoryTitle;

    private String url;
}