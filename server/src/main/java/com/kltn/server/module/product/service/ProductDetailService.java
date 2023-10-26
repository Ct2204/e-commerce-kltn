package com.kltn.server.module.product.service;

import com.kltn.server.module.product.dto.ProductDetailDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductDetailService {

    public List<ProductDetailDto> getProductDetailByIdProduct(Long productId);
}
