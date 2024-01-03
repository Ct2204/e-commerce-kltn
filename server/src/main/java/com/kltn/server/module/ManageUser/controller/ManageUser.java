package com.kltn.server.module.ManageUser.controller;

import com.kltn.server.common.dto.ResponseDto;
import com.kltn.server.common.vo.OrderStatusE;
import com.kltn.server.common.vo.UserStatusEnum;
import com.kltn.server.module.ManageUser.dto.ManageUserDto;
import com.kltn.server.module.ManageUser.repository.ManageUserRepository;
import com.kltn.server.module.ManageUser.service.ManageUserService;
import com.kltn.server.module.orderManagement.dto.OrderManagementDto;
import com.kltn.server.module.product.dto.ResponseDataDto;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/seller")
@Tag(name = "ManageUser")
public class ManageUser {

    @Autowired
    private ManageUserService manageUserService;

    @GetMapping({"/get-alluser"})
    public ResponseEntity<ResponseDataDto> getOrderByUserId() {
        List<ManageUserDto> items = this.manageUserService.getAllUser();
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(items == null ? "Not exist any Order of user " : "Get order Successfully!");
        responseDataDto.setData(items);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    @PatchMapping({"/update-user/{id}"})
    public ResponseEntity<ResponseDto> updateStatusUser(@PathVariable Long id) {
        this.manageUserService.updateStatusUser(id);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(201);
        responseDto.setMessage("Change Status user successfully!");
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }
}
