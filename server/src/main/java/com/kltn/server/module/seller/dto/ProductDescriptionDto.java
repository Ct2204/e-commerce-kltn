package com.kltn.server.module.seller.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDescriptionDto {

    @NotNull(message = "Product id shouldn't be null")
    private Long productId;
    @NotNull(message = "Seller id shouldn't be null")
    private Long sellerId;
    private String description;
    private List<ProductDescriptionVisualDto> images;
}
