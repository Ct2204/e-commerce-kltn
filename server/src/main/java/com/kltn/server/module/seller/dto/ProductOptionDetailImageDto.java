
package com.kltn.server.module.seller.dto;


import com.kltn.server.common.vo.ProductVisualType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductOptionDetailImageDto {

    private String url;
    private ProductVisualType type;

}
