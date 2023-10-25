package com.kltn.server.module.user.service;



import com.kltn.server.module.user.dto.SavingUserAddressDto;
import com.kltn.server.module.user.dto.UpdatingUserAddressDto;
import com.kltn.server.module.user.dto.UserAddressDto;

import java.util.List;

public interface UserAddressService {

    List<UserAddressDto> getAllUsersAddresses();

    List<UserAddressDto> getAllUserAddressesByUserId(Long id);

    UserAddressDto getAllUserAddressById(Long id);

    void saveUserAddress(Long id, SavingUserAddressDto userAddressRequest);

    void updateUserAddress(Long id, UpdatingUserAddressDto userAddressRequest);

    void deleteUserAddress(Long id);
}
