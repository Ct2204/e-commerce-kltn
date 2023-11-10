package com.kltn.server.module.product.service;

import com.kltn.server.module.product.dto.ProductDto;
import com.kltn.server.module.product.dto.ProductItemsResDto;
import com.kltn.server.module.product.dto.ProductListDto;
import com.kltn.server.module.seller.dto.PageProductResDto;

public interface ProductService {
    public ProductDto findProductByProductId(Long productId);

    ProductListDto findPageProduct(
            int perPage, int currentPage);


    ProductItemsResDto getProduct(Long id);


    PageProductResDto getAllProductByCategory(Short categoryId, int perPage, int currentPage);




}
