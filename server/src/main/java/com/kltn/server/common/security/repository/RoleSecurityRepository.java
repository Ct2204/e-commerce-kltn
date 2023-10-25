package com.kltn.server.common.security.repository;


import com.kltn.server.common.entity.Role;
import com.kltn.server.common.security.model.ERole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleSecurityRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(ERole name);
}
