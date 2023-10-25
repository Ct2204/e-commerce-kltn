package com.kltn.server.module.user.controller;


import com.kltn.server.common.dto.ResponseDto;
import com.kltn.server.module.user.dto.ResponseDataDto;
import com.kltn.server.module.user.dto.SavingUserAddressDto;
import com.kltn.server.module.user.dto.UpdatingUserAddressDto;
import com.kltn.server.module.user.service.UserAddressService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@Tag(name = "user-address")
@RequestMapping("/api/v1/users/address")
public class UserAddressController {

    @Autowired
    UserAddressService userAddressService;

        /**
         * *
         * This method handles get all users addresses request.
         *
         * @return A list of users addresses.
         */
        @GetMapping("")
        public ResponseEntity<ResponseDataDto> getAllUsersAddresses() {
            ResponseDataDto responseDataDto = new ResponseDataDto();
            responseDataDto.setStatus(HttpStatus.OK.series().name());
            responseDataDto.setCode(HttpStatus.OK.value());
            responseDataDto.setMessage("Successfully retrieved all user addresses!");
            responseDataDto.setData(this.userAddressService.getAllUsersAddresses());
            return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
        }

    /**
     * *
     * This method handles get all user addresses by user ID request.
     *
     * @param id This is an ID of the user.
     * @return All addresses of the user.
     */
    @Operation(
            description = "Returns user addresses",
            summary = "Get user addresses by user id",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Successfully retrieved",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example",
                                                    value = "{\n" +
                                                            "  \"data\": [\n" +
                                                            "    {\n" +
                                                            "      \"id\": 1,\n" +
                                                            "      \"fullName\": \"Le Long\",\n" +
                                                            "      \"company\": \"HCMUTE\",\n" +
                                                            "      \"phone\": 971134611,\n" +
                                                            "      \"region\": \"1\",\n" +
                                                            "      \"district\": \"1\",\n" +
                                                            "      \"ward\": \"1\",\n" +
                                                            "      \"street\": \"1\",\n" +
                                                            "      \"status\": \"NOT_DEFAULT\"\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 4,\n" +
                                                            "      \"fullName\": \"Tran Hoang\",\n" +
                                                            "      \"company\": \"HCMUTE\",\n" +
                                                            "      \"phone\": 971134611,\n" +
                                                            "      \"region\": \"1\",\n" +
                                                            "      \"district\": \"1\",\n" +
                                                            "      \"ward\": \"1\",\n" +
                                                            "      \"street\": \"1\",\n" +
                                                            "      \"status\": \"NOT_DEFAULT\"\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 5,\n" +
                                                            "      \"fullName\": \"Tran Quoc Cuong\",\n" +
                                                            "      \"company\": \"HCMUTE\",\n" +
                                                            "      \"phone\": 971134611,\n" +
                                                            "      \"region\": \"1\",\n" +
                                                            "      \"district\": \"1\",\n" +
                                                            "      \"ward\": \"1\",\n" +
                                                            "      \"street\": \"1\",\n" +
                                                            "      \"status\": \"DEFAULT\"\n" +
                                                            "    }\n" +
                                                            "  ],\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"message\": \"Successfully retrieved all user addresses by user ID!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "403", description = "Forbidden",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 403,\n" +
                                                            "  \"Status\": \"FORBIDDEN\",\n" +
                                                            "  \"message\": \"Unauthorized\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Resource not found",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 404,\n" +
                                                            "  \"Status\": \"CLIENT_ERROR\",\n" +
                                                            "  \"message\": \"User with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = @Parameter(name = "id", description = "User id", example = "1")
    )
    @GetMapping("/by-user/{id}")
    public ResponseEntity<ResponseDataDto> getAllUserAddressesByUserId(@PathVariable("id") Long id) {
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage("Successfully retrieved all user addresses by user ID!");
        responseDataDto.setData(this.userAddressService.getAllUserAddressesByUserId(id));
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles get a user address by ID request.
     *
     * @param id This is an ID of the address.
     * @return The address of the user.
     */
    @Operation(
            description = "Returns address address",
            summary = "Get address by id",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Successfully retrieved",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example",
                                                    value = "{\n" +
                                                            "  \"data\": {\n" +
                                                            "    \"id\": 1,\n" +
                                                            "    \"fullName\": \"Phan Văn Hoàng Anh\",\n" +
                                                            "    \"company\": \"HCMUTE\",\n" +
                                                            "    \"phone\": 971134611,\n" +
                                                            "    \"region\": \"1\",\n" +
                                                            "    \"district\": \"1\",\n" +
                                                            "    \"ward\": \"1\",\n" +
                                                            "    \"street\": \"1\",\n" +
                                                            "    \"status\": \"NOT_DEFAULT\"\n" +
                                                            "  },\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"message\": \"Successfully retrieved all user addresses by address ID!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "403", description = "Forbidden",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 403,\n" +
                                                            "  \"Status\": \"FORBIDDEN\",\n" +
                                                            "  \"message\": \"Unauthorized\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Resource not found",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 404,\n" +
                                                            "  \"Status\": \"CLIENT_ERROR\",\n" +
                                                            "  \"message\": \"Address with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = @Parameter(name = "id", description = "ID of  the address", example = "1")
    )
    @GetMapping("/{id}")
    public ResponseEntity<ResponseDataDto> getAllUserAddressById(@PathVariable("id") Long id) {
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage("Successfully retrieved all user addresses by address ID!");
        responseDataDto.setData(this.userAddressService.getAllUserAddressById(id));
        return ResponseEntity.ok(responseDataDto);
    }

    /**
     * *
     * This method handles save a user address.
     *
     * @param id                 This is an ID of the user.
     * @param userAddressRequest This is all information to save a user address.
     * @return A message 'Save successfully!'.
     */
    @Operation(
            description = "Save a new user address",
            summary = "Save a new user address with the given data",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = UpdatingUserAddressDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    "  \"fullName\": \"Trinh Van Trung\",\n" +
                                                    "  \"company\": \"HCMUTE\",\n" +
                                                    "  \"phone\": 98797898217,\n" +
                                                    "  \"region\": \"TP.HCM\",\n" +
                                                    "  \"district\": \"Quan 12\",\n" +
                                                    "  \"ward\": \"Trung Lap\",\n" +
                                                    "  \"street\": \"Truung My\",\n" +
                                                    "  \"status\": \"NOT_DEFAULT\"\n" +
                                                    "}"
                                    )
                            }
                    )
            ),
            responses = {
                    @ApiResponse(responseCode = "201", description = "Created",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"code\": 201,\n" +
                                                            "  \"message\": \"Save User address Successfully!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "400", description = "BAD_REQUEST",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 400,\n" +
                                                            "  \"Status\": \"BAD_REQUEST\",\n" +
                                                            "  \"message\": \"The fullName field must not be left blank!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "403", description = "Forbidden",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 403,\n" +
                                                            "  \"Status\": \"FORBIDDEN\",\n" +
                                                            "  \"message\": \"Unauthorized\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Resource not found",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 404,\n" +
                                                            "  \"Status\": \"CLIENT_ERROR\",\n" +
                                                            "  \"message\": \"User with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = {
                    @Parameter(name = "id", description = "User ID", example = "1"),
                    @Parameter(name = "SavingUserAddressDto",
                            description = "SavingUserAddressDto",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = SavingUserAddressDto.class)))
            }
    )
    @PostMapping("/add/{id}")
    public ResponseEntity<ResponseDto> saveUserAddress(@PathVariable("id") Long id,
                                                         @RequestBody @Valid SavingUserAddressDto userAddressRequest) {
        this.userAddressService.saveUserAddress(id, userAddressRequest);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.CREATED.series().name());
        responseDto.setCode(HttpStatus.CREATED.value());
        responseDto.setMessage("Save address successfully!");
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDto);
    }

    /**
     * *
     * This method handles update a user address.
     *
     * @param id                 This is an ID of the address.
     * @param userAddressRequest This is all information to update a user address.
     * @return A message 'Update successfully!'.
     */
    @Operation(
            description = "Update a user address",
            summary = "Update a user address with the given data",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = UpdatingUserAddressDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    "  \"userId\": 1,\n" +
                                                    "  \"fullName\": \"Trinh Van Trung\",\n" +
                                                    "  \"company\": \"HCMUTE\",\n" +
                                                    "  \"phone\": 98797898217,\n" +
                                                    "  \"region\": \"TP.HCM\",\n" +
                                                    "  \"district\": \"Quan 12\",\n" +
                                                    "  \"ward\": \"Trung Lap\",\n" +
                                                    "  \"street\": \"Truung My\",\n" +
                                                    "  \"status\": \"NOT_DEFAULT\"\n" +
                                                    "}"
                                    )
                            }
                    )
            ),
            responses = {
                    @ApiResponse(responseCode = "200", description = "Ok",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"message\": \"Update User address Successfully!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "400", description = "BAD_REQUEST",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 400,\n" +
                                                            "  \"Status\": \"BAD_REQUEST\",\n" +
                                                            "  \"message\": \"The User ID field must not be left blank!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "403", description = "Forbidden",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 403,\n" +
                                                            "  \"Status\": \"FORBIDDEN\",\n" +
                                                            "  \"message\": \"Unauthorized\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Resource not found",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 404,\n" +
                                                            "  \"Status\": \"CLIENT_ERROR\",\n" +
                                                            "  \"message\": \"User with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = {
                    @Parameter(name = "id", description = "Address ID", example = "1"),
                    @Parameter(name = "UpdatingUserAddressDto",
                            description = "UpdatingUserAddressDto",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = UpdatingUserAddressDto.class)))
            }
    )
    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseDto> updateUserAddress(@PathVariable("id") Long id,
                                                         @RequestBody @Valid UpdatingUserAddressDto userAddressRequest) {
        this.userAddressService.updateUserAddress(id, userAddressRequest);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(HttpStatus.OK.value());
        responseDto.setMessage("Update address successfully!");
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    /**
     * *
     * This method handles delete a user address by ID request.
     *
     * @param id This is an ID of the address.
     * @return A message 'Delete successfully!'.
     */
    @Operation(
            description = "Delete address address",
            summary = "Delete address by id",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Ok",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"message\": \"Delete User address Successfully!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "403", description = "Forbidden",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 403,\n" +
                                                            "  \"Status\": \"FORBIDDEN\",\n" +
                                                            "  \"message\": \"Unauthorized\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Resource not found",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 404,\n" +
                                                            "  \"Status\": \"CLIENT_ERROR\",\n" +
                                                            "  \"message\": \"Address with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = @Parameter(name = "id", description = "ID of  the address", example = "1")
    )
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseDto> deleteUserAddressById(@PathVariable("id") Long id) {
        this.userAddressService.deleteUserAddress(id);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(HttpStatus.OK.value());
        responseDto.setMessage("Delete address successfully!");
        return ResponseEntity.ok(responseDto);
    }
}
