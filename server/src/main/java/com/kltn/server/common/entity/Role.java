package com.kltn.server.common.entity;

import com.kltn.server.base.entity.BaseAuditEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Table(name = "roles")
public class Role extends BaseAuditEntity {

    @Column(name = "name", length = 100)
    private String name;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "role")
    private Set<RolesPrivilege> rolePermissions;

    @OneToMany(mappedBy = "role")
    private Set<StaffRole> staffRoles;

    @OneToMany(mappedBy = "role")
    private Set<User> users;

    // @ManyToMany(mappedBy = "roles")
    // private Collection<User> users;

    // @ManyToMany
    // @JoinTable(name = "roles_permissions", joinColumns = @JoinColumn(name =
    // "role_id", referencedColumnName = "id"), inverseJoinColumns =
    // @JoinColumn(name = "permission_id", referencedColumnName = "id"))
    // private Collection<Permission> permissions;
}
