package com.kltn.server.module.product.converter;

import com.kltn.server.common.entity.ProductVisual;
import com.kltn.server.module.product.dto.ProductVisualDto;
import org.springframework.stereotype.Component;

@Component
public class ProductVisualConverter {

    public ProductVisualDto toDto(ProductVisual entity) {
        ProductVisualDto dto = new ProductVisualDto();
        dto.setId(entity.getId());
        dto.setSlug(entity.getSlug());
        dto.setType(entity.getType());
        dto.setUrl(entity.getUrl());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());
        return dto;
    }
}
