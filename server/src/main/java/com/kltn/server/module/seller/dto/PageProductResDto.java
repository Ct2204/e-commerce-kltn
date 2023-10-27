
package com.kltn.server.module.seller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class PageProductResDto extends PageableDto {
    private List<ProductListDto> listProduct;

    public PageProductResDto(int totalPages, long totalElements,
                             int perPage, int numberOfElements,
                             int currentPage, boolean first, boolean last,
                             List<ProductListDto> listProduct) {
        super(totalPages, totalElements, perPage, numberOfElements, currentPage, first, last);
        this.listProduct = listProduct;
    }


}
