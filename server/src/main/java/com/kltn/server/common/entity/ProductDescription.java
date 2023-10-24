package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "product_description")
public class ProductDescription extends BaseAuditEntity {

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "descriptions", length = Integer.MAX_VALUE)
    private String descriptions;

    @OneToMany(mappedBy = "productDescription", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ProductDescriptionVisual> productDescriptionVisuals = new LinkedHashSet<>();

    public ProductDescription(Product product, String descriptions) {
        this.product = product;
        this.descriptions = descriptions;
    }
}
