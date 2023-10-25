package com.kltn.server.module.user.service;


import com.kltn.server.module.user.dto.UpdatingUserProfileDto;
import com.kltn.server.module.user.dto.UserProfileDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UserProfileService {

    UserProfileDto getUserProfileById(Long id);

    List<UserProfileDto> getAllUsersProfile();

    List<UserProfileDto> getUsersProfileByName(String text);

    void updateUserProfile(Long id, UpdatingUserProfileDto userProfileRequest);

    void uploadProfilePicture(Long id, MultipartFile file);

    String getProfilePictureByUserId(Long id);
}
