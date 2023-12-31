package com.kltn.server.common.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.kltn.server.base.entity.BaseAuditEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "sellers")
public class Seller extends BaseAuditEntity {

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "seller_name")
    private String sellerName;

    @Column(name = "region")
    private String region;

    @Column(name = "district")
    private String district;

    @Column(name = "ward")
    private String ward;

    @Column(name = "street")
    private String street;

    @Column(name = "status")
    private Short status;

    @Column(name = "url")
    private String url;

    @OneToMany(mappedBy = "seller")
    private List<Product> products = new ArrayList<>();

    @OneToMany(mappedBy = "seller")
    private List<Order> orders = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "seller")
    private Set<CartItem> cartItems;

}
