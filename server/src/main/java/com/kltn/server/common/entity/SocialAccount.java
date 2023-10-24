package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import com.kltn.server.common.vo.SocialProvider;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "social_account")
public class SocialAccount extends BaseAuditEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "social_account_user_id", length = 100)
    private String socialAccountUserId;

    @Column(name = "access_token")
    private String accessToken;

    @Column(name = "provider")
    @Enumerated(EnumType.STRING)
    private SocialProvider provider;
}
