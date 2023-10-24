package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import com.kltn.server.common.vo.ProductDescriptionVisualType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "product_description_visual")
public class ProductDescriptionVisual extends BaseAuditEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_description_id")
    private ProductDescription productDescription;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "type")
    private ProductDescriptionVisualType type;

    @Column(name = "url")
    private String url;
}
