package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "product_option_detail")
public class ProductOptionDetail extends BaseAuditEntity {

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "product_option_id")
    private ProductOption productOption;

    @Column(name = "value", length = 50)
    private String value;

    @OneToMany(mappedBy = "productOptionDetail")
    private List<ProductVisual> productVisuals = new ArrayList<>();
}
