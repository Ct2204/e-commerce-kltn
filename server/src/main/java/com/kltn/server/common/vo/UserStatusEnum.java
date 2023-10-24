package com.kltn.server.common.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public enum UserStatusEnum {
    NOT_ACTIVATED(0),
    ACTIVATED(1),
    BANNED(2);

    private int value;
}
