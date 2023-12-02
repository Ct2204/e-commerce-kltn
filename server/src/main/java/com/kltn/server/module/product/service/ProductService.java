package com.kltn.server.module.product.service;

import com.kltn.server.module.product.dto.ProductDto;
import com.kltn.server.module.product.dto.ProductItemsResDto;
import com.kltn.server.module.product.dto.ProductListDto;
import com.kltn.server.module.seller.dto.PageProductResDto;
import com.kltn.server.module.seller.dto.ProductCategoryDto;

import java.util.List;

public interface ProductService {
    public ProductDto findProductByProductId(Long productId);

    ProductListDto findPageProduct(
            int perPage, int currentPage);


    ProductItemsResDto getProduct(Long id);


    ProductListDto getAllProductByCategory(Short categoryId, int perPage, int currentPage);

    List<ProductCategoryDto> getAllProductCategory();


}
