package com.kltn.server.module.seller.dto;

import com.kltn.server.common.vo.ProductDescriptionVisualType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDescriptionVisualDto {

    private String url;
    private ProductDescriptionVisualType type;
}
