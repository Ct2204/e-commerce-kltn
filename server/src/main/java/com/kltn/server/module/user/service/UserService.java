package com.kltn.server.module.user.service;



import com.kltn.server.common.vo.SocialProvider;
import com.kltn.server.module.user.dto.*;

import java.util.HashMap;

public interface UserService {

    void saveUser(RegisterDto registerDto);

    HashMap<String, String> loginByEmailAndPassword(LoginDto loginDto);

    void sendVerificationCode(EmailDto emailDto);

    void confirmVerificationCodeAndActiveUser(VerificationCodeDto verificationCodeDto);

    void socialAccountHandler(String email, SocialProvider provider);

    void updatePassword(ChangePasswordDto changePasswordDto);

    String confirmChangePasswordByVerificationCode(VerificationCodeDto verificationCodeDto);

    void deleteUserById(Long id);

    void saveUserBySocial(SocialLoginDto socialLoginDto);

    HashMap<String, Object> refreshToken(String refresh_token);
}
