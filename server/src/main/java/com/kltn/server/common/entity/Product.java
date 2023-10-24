package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import com.kltn.server.common.vo.ProductStatusType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "products")
public class Product extends BaseAuditEntity {

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "seller_id")
    private Seller seller;

    @Column(name = "title")
    private String title;

    @Column(name = "slug")
    private String slug;

    @Column(name = "sku", length = 100)
    private String sku;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id")
    private ProductCategory category;

    @Column(name = "quantity_in_stock")
    private Integer quantityInStock;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "percent_discount")
    private BigDecimal percentDiscount;

    @Column(name = "price_sales")
    private BigDecimal priceSales;

    @Column(name = "status")
    private ProductStatusType status;

    @OneToMany(mappedBy = "product")
    private List<ProductDescription> productDescriptions = new ArrayList<>();

    @OneToMany(mappedBy = "product")
    private List<ProductDescriptionVisual> productDescriptionVisuals = new ArrayList<>();

    @OneToMany(mappedBy = "product")
    private Set<ProductDetail> details = new LinkedHashSet<>();

    @OneToMany(mappedBy = "product")
    private Set<ProductDescriptionVisual> descriptionVisuals = new LinkedHashSet<>();

    @OneToMany(mappedBy = "product")
    private Set<ProductVisual> productVisuals = new LinkedHashSet<>();

    @OneToMany(mappedBy = "product")
    private Set<ProductRating> productRatings = new LinkedHashSet<>();

    @OneToMany(mappedBy = "product")
    private Set<ProductRatingVisual> productRatingVisuals = new LinkedHashSet<>();

    @OneToMany(mappedBy = "product")
    private List<ProductOption> productOptions = new ArrayList<>();

    @OneToMany(mappedBy = "product")
    private List<ProductOptionDetail> productOptionDetails = new ArrayList<>();

    @OneToMany(mappedBy = "product")
    private List<ProductItem> productItems = new ArrayList<>();
}
