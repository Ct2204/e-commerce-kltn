package com.kltn.server.module.product.dto;

import com.kltn.server.common.vo.ProductDescriptionVisualType;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
public class ProductDescriptionVisualDto {
    private Long id;

    private ProductDescriptionVisualType type;

    private String url;

    private Instant createdAt;

    private Instant updatedAt;

}
