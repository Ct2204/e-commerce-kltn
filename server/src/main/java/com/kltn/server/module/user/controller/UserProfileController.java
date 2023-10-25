
package com.kltn.server.module.user.controller;


import com.kltn.server.common.dto.ResponseDto;
import com.kltn.server.module.user.dto.ResponseDataDto;
import com.kltn.server.module.user.dto.UpdatingUserProfileDto;
import com.kltn.server.module.user.service.impl.UserProfileServiceImpl;
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
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;

@RestController
@CrossOrigin("*")
@Tag(name = "user-profile")
@RequestMapping("/api/v1/users/profile")
public class UserProfileController {

    @Autowired
    UserProfileServiceImpl userProfileService;

        /**
         * *
         * This method handles get all users profile request.
         *
         * @return A list of users profile.
         */
        @GetMapping("")
        public ResponseEntity<ResponseDataDto> getAllUsersProfile() {
            ResponseDataDto responseDataDto = new ResponseDataDto();
            responseDataDto.setStatus(HttpStatus.OK.series().name());
            responseDataDto.setCode(HttpStatus.OK.value());
            responseDataDto.setMessage("Successfully retrieved all user profiles!");
            responseDataDto.setData(this.userProfileService.getAllUsersProfile());
            return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
        }

    /**
     * *
     * This method handles get a user profile by ID request.
     *
     * @param id This is an ID of the user is also be an ID of the user profile.
     * @return The profile of the user.
     */
    @Operation(
            description = "Returns user profile",
            summary = "Get user profile by user id",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Successfully retrieved",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example",
                                                    value = "{\n" +
                                                            "  \"data\": {\n" +
                                                            "    \"userId\": 1,\n" +
                                                            "    \"profilePicture\": \"user123.jpg\",\n" +
                                                            "    \"fullName\": \"Tran Quoc Toan\",\n" +
                                                            "    \"gender\": \"Male\",\n" +
                                                            "    \"birthday\": \"1999-09-09\",\n" +
                                                            "    \"email\": \"user123@gmail.com\",\n" +
                                                            "    \"phone\": 9123123123\n" +
                                                            "  },\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"message\": \"Get user profile Successfully!\"\n" +
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
            parameters = @Parameter(name = "id", description = "User ID", example = "1")
    )
    @GetMapping("/{id}")
    public ResponseEntity<ResponseDataDto> getUserProfileById(@PathVariable("id") Long id) {
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage("Successfully retrieved user profiles by user ID!");
        responseDataDto.setData(this.userProfileService.getUserProfileById(id));
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

        /**
         * *
         * This method handles get a user profile by name request.
         *
         * @param fullName This is the name of those users profile.
         *
         * @return The list users profile.
         */
        @GetMapping("/by-name")
        public ResponseEntity<ResponseDataDto> getAllUsersProfileByName(@RequestParam("name") String fullName) {
            ResponseDataDto responseDataDto = new ResponseDataDto();
            responseDataDto.setStatus(HttpStatus.OK.series().name());
            responseDataDto.setCode(HttpStatus.OK.value());
            responseDataDto.setMessage("Successfully retrieved all user profiles by user name!");
            responseDataDto.setData(this.userProfileService.getUsersProfileByName(fullName));
            return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
        }

        /**
         * *
         * This method handles get a user picture profile by user ID request.
         *
         * @param id This is an ID of the user is also be an ID of the user profile.
         *
         * @return The picture of the user.
         */
        @GetMapping("/get-picture/{id}")
        public ResponseEntity<ResponseDataDto> getProfilePictureByUserId(@PathVariable("id") Long id) {
            HashMap<String, String> picturePath = new HashMap<>();
            picturePath.put("path", this.userProfileService.getProfilePictureByUserId(id));
            ResponseDataDto responseDataDto = new ResponseDataDto();
            responseDataDto.setStatus(HttpStatus.OK.series().name());
            responseDataDto.setCode(HttpStatus.OK.value());
            responseDataDto.setMessage("Successfully retrieved all profile picture by user ID!");
            responseDataDto.setData(picturePath);
            return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
        }

    /**
     * *
     * This method handles update a user profile request.
     *
     * @param id                 This is an ID of the user is also be an ID of the user profile (pathvariable).
     * @param userProfileRequest This is all information to update a user profile (requestbody).
     * @return A message 'Updated successfully!'.
     */
    @Operation(
            description = "Update a user profile",
            summary = "Update a user profile with the given data",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = UpdatingUserProfileDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    "  \"fullName\": \"Trinh Van Trung\",\n" +
                                                    "  \"gender\": \"Male\",\n" +
                                                    "  \"birthday\": \"1999-09-09\"\n" +
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
                                                            "  \"message\": \"Update User profile Successfully!\"\n" +
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
                                                            "  \"message\": \"The gender field must not be left blank!\"\n" +
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
                    @Parameter(name = "UpdatingUserProfileDto",
                            description = "UpdatingUserProfileDto",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = UpdatingUserProfileDto.class)))
            }
    )
    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseDto> updateUserProfile(@PathVariable("id") Long id,
                                                         @RequestBody @Valid UpdatingUserProfileDto userProfileRequest) {
        this.userProfileService.updateUserProfile(id, userProfileRequest);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(HttpStatus.OK.value());
        responseDto.setMessage("update user profile successful!");
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    /**
     * *
     * This method handles upload a picture profile of the user.
     *
     * @param id   This is an ID of the user is also be an ID of the user profile.
     * @param file This is the picture from the user request.
     * @return A message 'Updated successfully!'.
     */
    @PostMapping("/upload-picture/{id}")
    public ResponseEntity<ResponseDto> uploadProfilePicture(@PathVariable("id") Long id,
                                                            @RequestBody MultipartFile file) {
        this.userProfileService.uploadProfilePicture(id, file);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(HttpStatus.OK.value());
        responseDto.setMessage("upload profile picture successful!");
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }
}
