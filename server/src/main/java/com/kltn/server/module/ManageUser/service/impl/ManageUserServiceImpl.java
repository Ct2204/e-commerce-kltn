package com.kltn.server.module.ManageUser.service.impl;

import com.kltn.server.common.entity.Order;
import com.kltn.server.common.entity.OrderDetail;
import com.kltn.server.common.entity.User;
import com.kltn.server.common.exception.ResourceNotFoundException;
import com.kltn.server.common.vo.UserStatusEnum;
import com.kltn.server.module.ManageUser.dto.ManageUserDto;
import com.kltn.server.module.ManageUser.repository.ManageUserRepository;
import com.kltn.server.module.ManageUser.service.ManageUserService;
import com.kltn.server.module.orderManagement.dto.OrderManagementDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ManageUserServiceImpl implements ManageUserService {

    @Autowired
    private ManageUserRepository manageUserRepository;
    @Override
    public List<ManageUserDto> getAllUser() {

        List<User> list = this.manageUserRepository.findAllUser();
        return list.stream().map(this::mapperUserEntityToDto).collect(Collectors.toList());

    }

    @Override
    public void updateStatusUser(Long id) {
        User user = manageUserRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with id:" + id + " not found"));

        if (user.getStatus() == UserStatusEnum.ACTIVATED) {
            user.setStatus(UserStatusEnum.BANNED);
        } else if (user.getStatus() == UserStatusEnum.BANNED) {
            user.setStatus(UserStatusEnum.ACTIVATED);
        } else {
            user.setStatus(UserStatusEnum.ACTIVATED);
        }

        manageUserRepository.save(user);
    }



    public ManageUserDto mapperUserEntityToDto(User user) {
        ManageUserDto manageUserDto = new ManageUserDto();
        manageUserDto.setId(user.getId());
        manageUserDto.setFullName(user.getUserProfile() != null
                && user.getUserProfile().getFullName() != null
        ? user.getUserProfile().getFullName()   : "Lê Công Thương"
);
        manageUserDto.setEmail(user.getEmail());
        manageUserDto.setUserStatusEnum(user.getStatus());
        manageUserDto.setUpdatedAt(user.getUpdatedAt());
        return manageUserDto;
    }

}
