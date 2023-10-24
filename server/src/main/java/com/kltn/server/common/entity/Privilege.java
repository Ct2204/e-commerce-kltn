package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
@Builder
@Table(name = "privileges")
public class Privilege extends BaseAuditEntity {

    @Column(name = "name", length = 50)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "object", length = 50)
    private String object;

    @Column(name = "is_active")
    private Boolean isActive;

    @OneToMany(mappedBy = "privilege")
    private Set<RolesPrivilege> rolePrivileges;

    @OneToMany(mappedBy = "privilege")
    private Set<Menu> menus;
}
