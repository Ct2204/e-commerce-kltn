package com.kltn.server.module.ManageUser.repository;

import com.kltn.server.common.entity.Order;
import com.kltn.server.common.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ManageUserRepository extends JpaRepository<User, Long> {


    @Query("SELECT u from User  u order by u.updatedAt DESC ")
    List<User> findAllUser();
}
