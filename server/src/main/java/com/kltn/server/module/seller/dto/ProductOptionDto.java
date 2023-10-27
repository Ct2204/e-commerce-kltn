
package com.kltn.server.module.seller.dto;


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
public class ProductOptionDto {

    private String name;
    private List<List<ProductOptionDetailImageDto>> images = new ArrayList<>();
    private List<String> values = new ArrayList<>();
}
