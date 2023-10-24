package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import com.kltn.server.common.vo.ProductVisualType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "product_visual")
public class ProductVisual extends BaseAuditEntity {

    @Column(name = "type")
    private ProductVisualType type;

    @Column(name = "url")
    private String url;

    @Column(name = "slug")
    private String slug;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "product_option_detail_id")
    private ProductOptionDetail productOptionDetail;

}
