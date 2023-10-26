package com.kltn.server.module.product.converter;

import com.kltn.server.common.entity.ProductDetail;
import com.kltn.server.module.product.dto.ProductDetailDto;
import org.springframework.stereotype.Component;

@Component
public class ProductDetailConverter {

    public ProductDetailDto toDto(ProductDetail entity) {
        ProductDetailDto dto = new ProductDetailDto();
        dto.setId(entity.getId());
        dto.setProductId(entity.getProduct().getId());
        dto.setKey(entity.getKey());
        dto.setValue(entity.getValue());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());
        return dto;
    }
}
