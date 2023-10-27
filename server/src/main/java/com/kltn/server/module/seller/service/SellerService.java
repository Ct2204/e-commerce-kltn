
package com.kltn.server.module.seller.service;

import com.kltn.server.module.seller.dto.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;

public interface SellerService {

    HashMap<String, String> login(LoginDto loginDto);

    Long saveProduct(ProductDto productDto);

    void updateProduct(ProductDto productDto);

    void saveProductDetail(ProductDetailsDto productDetailsDto);

    void saveProductDescription(ProductDescriptionDto productDescriptionDto);

    void saveProductOptionWithItem(ProductOptionWithItemDto productOptionWithItemDto);

    List<ProductDescriptionVisualDto> uploadProductFile(MultipartFile[] file);

    ProductOptionWithItemDto getProductOptionWithItem(Long id);

    ProductDescriptionDto getProductDescription(Long id);

    ProductDto getProduct(Long id);

    ProductDetailsDto getProductDetails(Long id);

    List<ProductCategoryDto> getAllProductCategory();

    PageProductResDto getAllProductForSeller(Long sellerId,int perPage, int currentPage);
}
