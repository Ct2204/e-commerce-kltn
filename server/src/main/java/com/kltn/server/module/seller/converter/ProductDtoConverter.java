
package com.kltn.server.module.seller.converter;


import com.kltn.server.common.entity.Product;
import com.kltn.server.common.entity.ProductVisual;
import com.kltn.server.module.seller.dto.ProductListDto;
import org.springframework.stereotype.Component;

@Component
public class ProductDtoConverter {


    /**
     * *
     * This method to map ProductEntity to ProductDto
     *
     * @param product This is  entity to map to ProductDto.
     * @return productDto.
     */
    public ProductListDto mapToProduct(Product product) {
        ProductListDto productListDto = ProductListDto.builder()
                .id(product.getId())
                .title(product.getTitle())
                .quantityInStock(product.getQuantityInStock())
                .price(product.getPrice())
                .status(product.getStatus())
                .categoryTitle(product.getCategory() == null ? null : product.getCategory().getTitle())
                .url(product.getProductVisuals().stream()
                        .map(ProductVisual::getUrl) // Giả sử trường URL có tên là "url", thay thế nếu cần.
                        .findFirst() // Lấy đối tượng đầu tiên trong Stream (hoặc Optional nếu không tìm thấy).
                        .orElse(null))
                .build();
        return productListDto;
    }
}

