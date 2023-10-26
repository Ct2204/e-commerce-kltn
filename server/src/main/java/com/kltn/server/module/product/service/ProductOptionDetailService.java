package com.kltn.server.module.product.service;


import com.kltn.server.module.product.dto.ProductOptionDetailDto;

public interface ProductOptionDetailService {
    public ProductOptionDetailDto findProductOptionDetailByIdAndByProductId(Long productId, Long productOptionDetailId);
}
