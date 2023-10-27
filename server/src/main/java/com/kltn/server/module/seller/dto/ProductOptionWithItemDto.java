
package com.kltn.server.module.seller.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductOptionWithItemDto {

    @NotNull(message = "Product id shouldn't be null")
    private Long productId;
    @NotNull(message = "Seller id shouldn't be null")
    private Long sellerId;
    private List<ProductOptionDto> options = new ArrayList<>();
    private List<ProductItemDto> productItems;

}
