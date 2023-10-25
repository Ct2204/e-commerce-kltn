package com.kltn.server.module.user.service.impl;

import com.kltn.server.common.entity.User;
import com.kltn.server.common.entity.UserAddress;
import com.kltn.server.common.exception.ResourceNotFoundException;
import com.kltn.server.common.vo.AddressStatus;
import com.kltn.server.module.user.dto.SavingUserAddressDto;
import com.kltn.server.module.user.dto.UpdatingUserAddressDto;
import com.kltn.server.module.user.dto.UserAddressDto;
import com.kltn.server.module.user.repository.UserAddressRepository;
import com.kltn.server.module.user.repository.UserRepository;
import com.kltn.server.module.user.service.UserAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserAddressServiceImpl implements UserAddressService {

    @Autowired
    private UserAddressRepository userAddressRepository;

    @Autowired
    private UserRepository userRepository;

    /**
     * Get all users addresses.
     *
     * @return A list of users addresses.
     */
    @Override
    public List<UserAddressDto> getAllUsersAddresses() {

        return this.userAddressRepository
                .findAll()
                .stream()
                .map(userAddress -> new UserAddressDto(
                        userAddress.getId(),
                        userAddress.getFullName(),
                        userAddress.getCompany(),
                        userAddress.getPhone(),
                        userAddress.getRegion(),
                        userAddress.getDistrict(),
                        userAddress.getWard(),
                        userAddress.getStreet(),
                        userAddress.getStatus()))
                .collect(Collectors.toList());
    }

    /**
     * Get all user addresses by user ID.
     *
     * @param id This is an ID of the user.
     * @return All addresses of the user.
     * @throws ResourceNotFoundException if the ID of the user not found.
     */
    @Override
    public List<UserAddressDto> getAllUserAddressesByUserId(Long id) {

        if (this.userRepository.findById(id).isEmpty()) {
            throw new ResourceNotFoundException("User with id " + id + " not found!");
        }

        return this.userAddressRepository.getAllUserAddressesByUserId(id);
    }

    /**
     * Get a user address by ID.
     *
     * @param id This is an ID of the address.
     * @return The address of the user.
     * @throws ResourceNotFoundException if the ID of the address not found.
     */
    @Override
    public UserAddressDto getAllUserAddressById(Long id) {

        return this.userAddressRepository
                .findById(id)
                .map(userAddress -> new UserAddressDto(
                        userAddress.getId(),
                        userAddress.getFullName(),
                        userAddress.getCompany(),
                        userAddress.getPhone(),
                        userAddress.getRegion(),
                        userAddress.getDistrict(),
                        userAddress.getWard(),
                        userAddress.getStreet(),
                        userAddress.getStatus()))
                .orElseThrow(() -> new ResourceNotFoundException("Address with id " + id + " not found!"));
    }

    /**
     * Save a user address.
     *
     * @param id                 This is an ID of the user
     * @param userAddressRequest This is all information to save a user address
     * @throws ResourceNotFoundException if the ID of the user not found
     */
    @Transactional
    @Override
    public void saveUserAddress(Long id, SavingUserAddressDto userAddressRequest) {

        // Checking if the user exists or not
        User user = this.userRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with id " + id + " not found!"));

        UserAddress address = new UserAddress();
        address.setFullName(userAddressRequest.getFullName());
        address.setCompany(userAddressRequest.getCompany());
        address.setPhone(userAddressRequest.getPhone());
        address.setRegion(userAddressRequest.getRegion());
        address.setDistrict(userAddressRequest.getDistrict());
        address.setWard(userAddressRequest.getWard());
        address.setStreet(userAddressRequest.getStreet());
        address.setUser(user);
        // Checking if the status is equal to 2 (default address)
        // then update status of the status of current address into 1
        if (userAddressRequest.getStatus() == AddressStatus.DEFAULT) {
            this.userAddressRepository.updateUserAddressesByStatus(id);
        }

        address.setStatus(userAddressRequest.getStatus());
        address.setCreatedAt(Instant.now());

        this.userAddressRepository.save(address);
    }

    /**
     * Update a user address.
     *
     * @param id                 This is an ID of the user address
     * @param userAddressRequest This is all information to update a user address
     * @throws ResourceNotFoundException if the ID of the address not found
     * @throws IllegalArgumentException  if the user ID of the address are not equal
     *                                   to user ID from the request
     */
    @Transactional
    @Override
    public void updateUserAddress(Long id, UpdatingUserAddressDto userAddressRequest) {

        // Checking if the user address exists or not
        UserAddress address = this.userAddressRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Address with id " + id + " not found!"));

        // Checking if the user ID of the address are not equal to user ID from the
        // request
        if (address.getUser().getId().longValue() != userAddressRequest.getUserId().longValue()) {
            throw new ResourceNotFoundException("Wrong user ID!");
        }

        address.setFullName(userAddressRequest.getFullName());
        address.setCompany(userAddressRequest.getCompany());
        address.setPhone(userAddressRequest.getPhone());
        address.setRegion(userAddressRequest.getRegion());
        address.setDistrict(userAddressRequest.getDistrict());
        address.setWard(userAddressRequest.getWard());
        address.setStreet(userAddressRequest.getStreet());

        // Checking if the status is equal to 2 (default address)
        // then update status of the status of current address into 1
        if (userAddressRequest.getStatus() == AddressStatus.DEFAULT) {
            this.userAddressRepository.updateUserAddressesByStatus(userAddressRequest.getUserId());
        }

        address.setStatus(userAddressRequest.getStatus());
        address.setUpdatedAt(Instant.now());

        this.userAddressRepository.save(address);
    }

    /**
     * Delete a user address by ID.
     *
     * @param id This is an ID of the address.
     * @throws ResourceNotFoundException if the ID of the address not found.
     */
    @Transactional
    @Override
    public void deleteUserAddress(Long id) {

        // Checking if the user address exists or not
        UserAddress address = this.userAddressRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Address with id " + id + " not found!"));

        this.userAddressRepository.deleteById(id);
    }
}
