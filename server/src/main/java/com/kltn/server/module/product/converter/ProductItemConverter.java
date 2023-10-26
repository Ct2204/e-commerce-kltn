package com.kltn.server.module.product.converter;

import com.kltn.server.common.entity.ProductItem;
import com.kltn.server.module.product.dto.ProductItemDetailDto;
import com.kltn.server.module.product.dto.ProductItemDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProductItemConverter {

    @Autowired
    private ProductItemDetailConverter productItemDetailConverter;

    public ProductItemDto toDto(ProductItem entity) {
        ProductItemDto dto = new ProductItemDto();
        dto.setId(entity.getId());
        dto.setProductId(entity.getProduct().getId());
        dto.setPrice(entity.getPrice());
        dto.setQuantity(entity.getQuantity());
        List<ProductItemDetailDto> productItemDetails = entity.getProductItemDetails()
                .stream()
                .map(e -> productItemDetailConverter.toDto(e))
                .collect(Collectors.toList());
        dto.setProductItemDetails(productItemDetails);
        return dto;
    }
}
