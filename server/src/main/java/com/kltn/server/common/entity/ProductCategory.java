package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "product_categories")
public class ProductCategory extends BaseAuditEntity {

    @Column(name = "title", length = 100)
    private String title;

    @Column(name = "slug")
    private String slug;

    @Column(name = "descriptions")
    private String descriptions;

    @Column(name = "parent_id")
    private Short parentId;

    @Column(name = "status")
    private Short status;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Product> products = new LinkedHashSet<>();
}
