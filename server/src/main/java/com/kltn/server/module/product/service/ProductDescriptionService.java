package com.kltn.server.module.product.service;

import com.kltn.server.module.product.dto.ProductDescriptionDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductDescriptionService {
    public List<ProductDescriptionDto> findProductDescriptionByProductId(Long productId);
}
