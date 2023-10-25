package com.kltn.server.module.user.repository;


import com.kltn.server.common.entity.UserProfile;
import com.kltn.server.module.user.dto.UserProfileDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {

    @Query("SELECT new com.kltn.server.module.user.dto.UserProfileDto(" +
            "uf.id," +
            "uf.profilePicture," +
            "uf.fullName," +
            "uf.gender," +
            "uf.birthday," +
            "u.email," +
            "u.phone)" +
            "FROM User u " +
            "INNER JOIN UserProfile uf " +
            "ON u.id = uf.id")
    List<UserProfileDto> getAllUsersProfile();

    @Query("SELECT new com.kltn.server.module.user.dto.UserProfileDto(" +
            "uf.id," +
            "uf.profilePicture," +
            "uf.fullName," +
            "uf.gender," +
            "uf.birthday," +
            "u.email," +
            "u.phone)" +
            "FROM User u " +
            "INNER JOIN UserProfile uf " +
            "ON u.id = uf.id " +
            "WHERE uf.id = :id")
    UserProfileDto getAllUserProfileById(Long id);

    @Query("SELECT new com.kltn.server.module.user.dto.UserProfileDto(" +
            "uf.id," +
            "uf.profilePicture," +
            "uf.fullName," +
            "uf.gender," +
            "uf.birthday," +
            "u.email," +
            "u.phone)" +
            "FROM User u " +
            "INNER JOIN UserProfile uf " +
            "ON u.id = uf.id " +
            "WHERE uf.fullName LIKE %:fullName%")
    List<UserProfileDto> getAllUsersByName(String fullName);
}
