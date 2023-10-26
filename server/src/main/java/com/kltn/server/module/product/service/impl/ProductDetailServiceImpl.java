package com.kltn.server.module.product.service.impl;

import com.kltn.server.common.entity.ProductDetail;
import com.kltn.server.common.exception.ResourceNotFoundException;
import com.kltn.server.common.vo.ProductStatusType;
import com.kltn.server.module.product.converter.ProductDetailConverter;
import com.kltn.server.module.product.dto.ProductDetailDto;
import com.kltn.server.module.product.repository.ProductDetailRepository;
import com.kltn.server.module.product.service.ProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductDetailServiceImpl implements ProductDetailService {

    @Autowired
    private ProductDetailRepository productDetailRepository;

    @Autowired
    private ProductDetailConverter productDetailConverter;

    /**
     * *
     * Find Product Detail ByProduct id
     *
     * @param productId This is id of product.
     * @return List of Product Detail for a product
     * @throws ResourceNotFoundException
     */
    public List<ProductDetailDto> getProductDetailByIdProduct(Long productId) {
        List<ProductStatusType> status = List.of(ProductStatusType.RECYCLE,
                ProductStatusType.DRAFT,
                ProductStatusType.DELETED);
        List<ProductDetail> pageListEntity = this.productDetailRepository.findProductDetailByProduct(productId, status);

        if (pageListEntity.isEmpty()) {
            return null;
        }

        return pageListEntity.stream()
                .map(item -> this.productDetailConverter.toDto(item))
                .collect(Collectors.toList());
    }
}
