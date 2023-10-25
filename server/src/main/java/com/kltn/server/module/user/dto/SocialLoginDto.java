package com.kltn.server.module.user.dto;

import com.kltn.server.common.vo.SocialProvider;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SocialLoginDto {

    @Email(message = "Invalid email address!")
    @Size(max = 30, message = "The maximum length for an email is 30 characters")
    private String email;

    private SocialProvider provider;
}
