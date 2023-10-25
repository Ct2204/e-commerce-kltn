package com.kltn.server.module.user.repository;


import com.kltn.server.common.entity.UserAddress;
import com.kltn.server.module.user.dto.UserAddressDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface UserAddressRepository extends JpaRepository<UserAddress, Long> {

    @Query("SELECT new com.kltn.server.module.user.dto.UserAddressDto(" +
            "u.id, u.fullName, u.company, u.phone," +
            "u.region, u.district, u.ward," +
            "u.street, u.status)" +
            "FROM UserAddress u " +
            "WHERE u.user.id = :id ORDER BY u.id")
    List<UserAddressDto> getAllUserAddressesByUserId(Long id);

    @Transactional
    @Modifying
    @Query(value = "update user_address set status = 0 where user_id = :id and status = 1", nativeQuery = true)
    void updateUserAddressesByStatus(Long id);
}
