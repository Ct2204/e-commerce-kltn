package com.kltn.server.module.product.service;


import com.kltn.server.module.product.dto.ProductItemDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductItemService {
    public List<ProductItemDto> findProductItemsByProductId(Long productId);
}
