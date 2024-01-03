package com.kltn.server.module.ManageUser.dto;

import com.kltn.server.common.vo.UserStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ManageUserDto {
    private Long id;
    private String fullName;
    private String email;
    private UserStatusEnum userStatusEnum;
    private Instant updatedAt;

}
