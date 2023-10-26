package com.kltn.server.module.product.service.impl;

import com.kltn.server.common.entity.ProductOption;
import com.kltn.server.common.vo.ProductStatusType;
import com.kltn.server.module.product.converter.ProductOptionConverter;
import com.kltn.server.module.product.dto.ProductOptionDto;
import com.kltn.server.module.product.repository.ProductOptionRepository;
import com.kltn.server.module.product.service.ProductOptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductOptionServiceImpl implements ProductOptionService {

    @Autowired
    private ProductOptionRepository productOptionRepository;

    @Autowired
    private ProductOptionConverter productOptionConverter;

    /**
     * *
     * Find Product Options ByProduct id
     *
     * @param productId This is id of product.
     * @return List of Product Options with a List of Image and Video in each
     *         Product Option Detail on each Option
     */
    public List<ProductOptionDto> findProductOptionByProductId(Long productId) {
        List<ProductStatusType> status = List.of(ProductStatusType.RECYCLE,
                ProductStatusType.DRAFT,
                ProductStatusType.DELETED);
        List<ProductOption> pageListEntity = this.productOptionRepository.findProductOptionByProductId(productId,
                status);

        if (pageListEntity.isEmpty()) {
            return null;
        }

        return pageListEntity.stream()
                .map(item -> this.productOptionConverter.toDto(item))
                .collect(Collectors.toList());
    }
}
