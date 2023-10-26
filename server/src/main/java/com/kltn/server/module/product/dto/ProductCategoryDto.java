package com.kltn.server.module.product.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ProductCategoryDto {

    private Long id;

    private String title;

    private String slug;

    private String description;

    private short parent_id;

    private short status;

    private Instant createAt;

    private Instant updateAt;
}
