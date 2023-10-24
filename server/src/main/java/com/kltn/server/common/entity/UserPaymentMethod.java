package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "user_payment_method")
public class UserPaymentMethod extends BaseAuditEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "method")
    private Short method;

    @Column(name = "is_default")
    private Boolean isDefault;

    @Column(name = "card_token")
    private String cardToken;

    @Column(name = "card_exp")
    private Instant cardExp;

    @OneToMany(mappedBy = "paymentMethod")
    private Set<Order> orders = new LinkedHashSet<>();
}
