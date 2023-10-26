package com.kltn.server.module.product.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductItemDetailDto {

    private Long id;

    private Long productItemId;

    private Long productOptionDetailId;
}
