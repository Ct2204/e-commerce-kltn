package com.kltn.server.module.product.converter;

import com.kltn.server.common.entity.ProductOption;
import com.kltn.server.module.product.dto.ProductOptionDetailDto;
import com.kltn.server.module.product.dto.ProductOptionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProductOptionConverter {

    @Autowired
    private ProductOptionDetailConverter productOptionDetailConverter;

    /**
     * Convert ProductOption to ProductOptionDto
     *
     * @param entity ProductOption
     * @return ProductOptionDto with List ProductOptionDetailDto
     */
    public ProductOptionDto toDto(ProductOption entity) {
        ProductOptionDto dto = new ProductOptionDto();
        dto.setId(entity.getId());
        dto.setProductId(entity.getProduct().getId());
        dto.setOption(entity.getOption());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());
        List<ProductOptionDetailDto> listProductOptionDetail = entity.getProductOptionDetails()
                .stream()
                .map(e -> productOptionDetailConverter.toDto(e))
                .collect(Collectors.toList());
        dto.setListProductOptionDetail(listProductOptionDetail);
        return dto;
    }
}
