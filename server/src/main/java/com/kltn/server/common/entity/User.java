package com.kltn.server.common.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.kltn.server.base.entity.BaseAuditEntity;
import com.kltn.server.common.vo.UserStatusEnum;
import jakarta.persistence.*;
import lombok.*;

import java.util.Collection;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "users")
public class User extends BaseAuditEntity {

    @OneToOne(mappedBy = "user")
    private Seller seller;

    @Column(name = "email", length = 30, unique = true)
    private String email;

    @Column(name = "phone")
    private Long phone;

    @Column(name = "password")
    private String password;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id")
    private Role role;

    @Column(name = "status")
    private UserStatusEnum status;

    @Column(name = "verification_code")
    private String verificationCode;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<SocialAccount> socialAccounts;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<CartItem> cartItems;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<ProductRating> productRatings;

    @OneToOne(mappedBy = "users")
    private UserProfile userProfile;

    @OneToMany(mappedBy = "user")
    private Set<UserRefreshToken> userRefreshToken;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<Order> orders;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<Notification> notifications;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<UserAddress> userAddresses;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<UserPaymentMethod> userPaymentMethods;
    // @ManyToMany(fetch = FetchType.LAZY)
    // @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"),
    // inverseJoinColumns = @JoinColumn(name = "role_id"))
    // private Set<Role> roles = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private Collection<Role> roles;
}
