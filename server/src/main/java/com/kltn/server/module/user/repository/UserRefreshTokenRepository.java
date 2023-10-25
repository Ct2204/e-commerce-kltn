package com.kltn.server.module.user.repository;


import com.kltn.server.common.entity.User;
import com.kltn.server.common.entity.UserRefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRefreshTokenRepository extends JpaRepository<UserRefreshToken, Long> {

    int deleteByUser(User user);

    Optional<UserRefreshToken> findUserRefreshTokenByToken(String token);
}
