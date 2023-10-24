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
@Table(name = "staffs")
public class Staff extends BaseAuditEntity {

    @Column(name = "staffname", length = 50)
    private String staffname;

    @Column(name = "password", length = 30)
    private String password;

    @OneToMany(mappedBy = "staff")
    private Set<StaffRole> staffRoles;
}
