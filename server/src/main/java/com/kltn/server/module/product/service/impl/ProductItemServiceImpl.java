package com.kltn.server.module.product.service.impl;

import com.kltn.server.common.entity.ProductItem;
import com.kltn.server.common.vo.ProductStatusType;
import com.kltn.server.module.product.converter.ProductItemConverter;
import com.kltn.server.module.product.dto.ProductItemDto;
import com.kltn.server.module.product.repository.ProductItemRepository;
import com.kltn.server.module.product.service.ProductItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductItemServiceImpl implements ProductItemService {

    @Autowired
    private ProductItemRepository productItemRepository;

    @Autowired
    private ProductItemConverter productItemConverter;

    /**
     * *
     * This method handles get all Product Items by product id
     *
     * @param productId This is an ID of exist product.
     * @return List of Product Item with a List of Product Item Detail for each Item
     */
    public List<ProductItemDto> findProductItemsByProductId(Long productId) {
        List<ProductStatusType> status = List.of(ProductStatusType.RECYCLE,
                ProductStatusType.DRAFT,
                ProductStatusType.DELETED);
        List<ProductItem> pageListEntity = this.productItemRepository.findAllItemsByProductId(productId, status);

        if (pageListEntity.isEmpty()) {
            return null;
        }

        return pageListEntity.stream()
                .map(item -> this.productItemConverter.toDto(item))
                .collect(Collectors.toList());
    }
}
