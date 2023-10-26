package com.kltn.server.module.product.converter;

import com.kltn.server.common.entity.ProductRatingVisual;
import com.kltn.server.module.product.dto.ProductRatingVisualDto;
import org.springframework.stereotype.Component;

@Component
public class ProductRatingVisualConverter {

    /**
     * Convert Product entity to ProductRatingVisualDto
     *
     * @param entity ProductRatingVisualEntity
     * @return ProductRatingVisualDto
     */
    public ProductRatingVisualDto toDto(ProductRatingVisual entity) {
        ProductRatingVisualDto dto = new ProductRatingVisualDto();
        dto.setId(entity.getId());
        dto.setType(entity.getType());
        dto.setUrl(entity.getUrl());
        dto.setProductRatingId(entity.getRating().getId());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());
        return dto;
    }
}
