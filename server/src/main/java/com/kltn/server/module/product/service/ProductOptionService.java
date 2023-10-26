package com.kltn.server.module.product.service;


import com.kltn.server.module.product.dto.ProductOptionDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductOptionService {
    public List<ProductOptionDto> findProductOptionByProductId(Long productId);
}
