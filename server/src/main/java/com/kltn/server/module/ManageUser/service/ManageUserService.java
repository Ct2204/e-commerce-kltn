package com.kltn.server.module.ManageUser.service;

import com.kltn.server.common.vo.UserStatusEnum;
import com.kltn.server.module.ManageUser.dto.ManageUserDto;
import com.kltn.server.module.orderManagement.dto.OrderManagementDto;

import java.util.List;

public interface ManageUserService {
    List<ManageUserDto> getAllUser();

    void updateStatusUser(Long id);
}
