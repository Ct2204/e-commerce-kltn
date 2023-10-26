package com.kltn.server.module.product.converter;

import com.kltn.server.common.entity.ProductItemDetail;
import com.kltn.server.module.product.dto.ProductItemDetailDto;
import org.springframework.stereotype.Component;

@Component
public class ProductItemDetailConverter {

    public ProductItemDetailDto toDto(ProductItemDetail entity) {
        ProductItemDetailDto dto = new ProductItemDetailDto();
        dto.setId(entity.getId());
        dto.setProductItemId(entity.getProductItem().getId());
        dto.setProductOptionDetailId(entity.getProductOptionDetail().getId());
        return dto;
    }
}
