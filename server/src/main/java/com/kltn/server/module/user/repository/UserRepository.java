package com.kltn.server.module.user.repository;


import com.kltn.server.common.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.email = ?1")
    Optional<User> findByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.verificationCode = ?1")
    Optional<User> findByVerificationCode(String verificationCode);

    Optional<User> findOneById(Long id);
}
