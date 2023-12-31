package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import com.kltn.server.common.vo.CartItemStatusEnum;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "cart_items")
public class CartItem extends BaseAuditEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "seller_id")
    private Seller seller;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_item_id")
    ProductItem productItem;

    @Column(name = "quantity")
    private Short quantity;

    @Column(name = "status")
    private CartItemStatusEnum status;
}
