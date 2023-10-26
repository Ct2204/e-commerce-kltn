package com.kltn.server.module.product.converter;

import com.kltn.server.common.entity.ProductDescription;
import com.kltn.server.module.product.dto.ProductDescriptionDto;
import com.kltn.server.module.product.dto.ProductDescriptionVisualDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProductDescriptionConverter {

    @Autowired
    private ProductDescriptionVisualConverter productDescriptionVisualConverter;

    /**
     * Convert ProductDescription to ProductDescriptionDto
     *
     * @param entity ProductDescription
     * @return ProductDescriptionDto with List ProductDescriptionVisualDto
     */
    public ProductDescriptionDto toDto(ProductDescription entity) {
        ProductDescriptionDto dto = new ProductDescriptionDto();
        dto.setProductId(entity.getProduct().getId());
        dto.setDescription(entity.getDescriptions());
        List<ProductDescriptionVisualDto> listMedia = entity.getProductDescriptionVisuals()
                .stream()
                .map(e -> productDescriptionVisualConverter.toDto(e))
                .collect(Collectors.toList());
        dto.setListMedia(listMedia);
        return dto;
    }
}
