package com.kltn.server.module.product.service.impl;

import com.kltn.server.common.entity.ProductOptionDetail;
import com.kltn.server.common.vo.ProductStatusType;
import com.kltn.server.module.product.converter.ProductOptionDetailConverter;
import com.kltn.server.module.product.dto.ProductOptionDetailDto;
import com.kltn.server.module.product.repository.ProductOptionDetailRepository;
import com.kltn.server.module.product.service.ProductOptionDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductOptionDetailServiceImpl implements ProductOptionDetailService {

    @Autowired
    private ProductOptionDetailConverter productOptionDetailConverter;

    @Autowired
    private ProductOptionDetailRepository productOptionDetailRepository;

    /**
     * *
     * Find exactly Product Option Detail By productId and productOptionDetailId
     *
     * @param productId             This is id of product.
     * @param productOptionDetailId This is id of product option detail.
     * @return Product Option Detail with a List of Image and Video in each Product
     *         Option Detail
     */
    public ProductOptionDetailDto findProductOptionDetailByIdAndByProductId(Long productId,
            Long productOptionDetailId) {
        List<ProductStatusType> status = List.of(ProductStatusType.RECYCLE,
                ProductStatusType.DRAFT,
                ProductStatusType.DELETED);
        ProductOptionDetail productOptionDetail = this.productOptionDetailRepository
                .findProductOptionDetailByProductId(productId, productOptionDetailId, status);

        if (productOptionDetail == null) {
            return null;
        }

        return this.productOptionDetailConverter.toDto(productOptionDetail);
    }
}
