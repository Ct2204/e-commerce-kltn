package com.kltn.server.module.user.dto;


import com.kltn.server.common.dto.ResponseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDataDto extends ResponseDto {
    private Object data;
}
