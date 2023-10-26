package com.kltn.server.module.product.dto;

import com.kltn.server.common.dto.ResponseDto;

@lombok.Getter
@lombok.Setter

public class ResponseDataDto extends ResponseDto {
    private Object data;
}
