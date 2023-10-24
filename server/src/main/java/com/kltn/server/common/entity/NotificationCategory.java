package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "notification_categories")
public class NotificationCategory extends BaseAuditEntity {

    @Column(name = "title", length = 50)
    private String title;

    @OneToMany(mappedBy = "category")
    private Set<Notification> notifications = new LinkedHashSet<>();
}
