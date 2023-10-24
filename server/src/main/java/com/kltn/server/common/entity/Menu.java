package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "menu")
public class Menu extends BaseAuditEntity {

    @Column(name = "parent_id")
    private Short parentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "privilege_id")
    private Privilege privilege;

    @Column(name = "name", length = 50)
    private String name;

    @Column(name = "slug", length = 100)
    private String slug;

    @Column(name = "icon", length = 100)
    private String icon;

    @Column(name = "description")
    private String description;
}
