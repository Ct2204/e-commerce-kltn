package com.kltn.server.module.product.service.impl;

import com.kltn.server.common.entity.ProductDescription;
import com.kltn.server.common.vo.ProductStatusType;
import com.kltn.server.module.product.converter.ProductDescriptionConverter;
import com.kltn.server.module.product.dto.ProductDescriptionDto;
import com.kltn.server.module.product.repository.ProductDescriptionRepository;
import com.kltn.server.module.product.service.ProductDescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductDescriptionServiceImpl implements ProductDescriptionService {

    @Autowired
    private ProductDescriptionRepository productDescriptionRepository;

    @Autowired
    private ProductDescriptionConverter productDescriptionConverter;

    /**
     * *
     * Find Product Description ByProduct ID
     *
     * @param productId This is id of product.
     * @return List of Product Description with a List of Image and Video (Visual
     *         Description) on each Description
     */
    public List<ProductDescriptionDto> findProductDescriptionByProductId(Long productId) {
        List<ProductStatusType> status = List.of(ProductStatusType.RECYCLE,
                ProductStatusType.DRAFT,
                ProductStatusType.DELETED);
        List<ProductDescription> pageListEntity = this.productDescriptionRepository.findByProduct(productId, status);
        if (pageListEntity.isEmpty()) {
            return null;
        }

        return pageListEntity.stream()
                .map(item -> this.productDescriptionConverter.toDto(item))
                .collect(Collectors.toList());
    }
}
