package com.kltn.server.module.user.dto;


import com.kltn.server.common.dto.ResponseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseTokenDto extends ResponseDto {
    private String token;
}
