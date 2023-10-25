package com.kltn.server.module.user.repository;


import com.kltn.server.common.entity.SocialAccount;
import com.kltn.server.common.vo.SocialProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserSocialRepository extends JpaRepository<SocialAccount, Integer> {

    @Query("SELECT u FROM SocialAccount u WHERE u.socialAccountUserId = :socialAccountUserId")
    Optional<SocialAccount> getSocialAccountUserId(String socialAccountUserId);

    @Query("SELECT u FROM SocialAccount u " +
            "WHERE u.socialAccountUserId = :socialAccountUserId " +
            "and u.provider = :provider")
    Optional<SocialAccount> getSocialAccountUserIdAndProvider(String socialAccountUserId,
            SocialProvider provider);
}
