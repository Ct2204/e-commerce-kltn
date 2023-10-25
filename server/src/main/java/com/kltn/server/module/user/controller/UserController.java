package com.kltn.server.module.user.controller;


import com.kltn.server.common.dto.ResponseDto;
import com.kltn.server.module.user.dto.*;
import com.kltn.server.module.user.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
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
@RequestMapping("/api/v1/users")
@Tag(name = "user")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * *
     * This method handles send email with verification code request.
     *
     * @param emailDto This is an email needs to be sent.
     * @return A message.
     */

    @Operation(
            description = "Send email with verification code",
            summary = "Send email with verification",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = EmailDto.class),
                    examples = {
                            @ExampleObject(
                                    name = "Example ",
                                    value = "{\n" +
                                            "  \"email\": \"lct@gmail.com\"" +
                                            "}")
                    })),

            responses = {
                    @ApiResponse(responseCode = "200", description = "OK",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"Status\": \"SUCCESSES\",\n" +
                                                            "  \"message\": \"Confirmation code sent successfully!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Not Found",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 404,\n" +
                                                            "  \"Status\": \"CLIENT_ERROR\",\n" +
                                                            "  \"message\": \"User with email lct@gmail.com not found!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "500", description = "Internal server error")}
    )

    @PostMapping("send-verification-code")
    public ResponseEntity<ResponseDto> sendVerificationCode(@RequestBody EmailDto emailDto) {
        this.userService.sendVerificationCode(emailDto);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(HttpStatus.OK.value());
        responseDto.setMessage("Confirmation code sent successfully!");
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    /**
     * *
     * This method handles confirm verification code request.
     *
     * @param verificationCodeDto This is the verification code of the user need to be activated.
     * @return The ID of the user.
     */
    @Operation(
            description = "Enter confirm code in email and active account",
            summary = "Confirm and active user",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = VerificationCodeDto.class),
                    examples = {
                            @ExampleObject(
                                    name = "Example ",
                                    value = "{\n" +
                                            "  \"verificationCode\": \"123456\"" +
                                            "}")
                    })),
            responses = {
                    @ApiResponse(responseCode = "200", description = "OK",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"Status\": \"SUCCESSES\",\n" +
                                                            "  \"message\": \"Active user successfully!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Not Found",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 404,\n" +
                                                            "  \"Status\": \"CLIENT_ERROR\",\n" +
                                                            "  \"message\": \"Not found verification Code!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "500", description = "Internal server error")}
    )

    @PostMapping("activate-user")
    public ResponseEntity<ResponseDto> confirmVerificationCodeAndActiveUser(@RequestBody VerificationCodeDto verificationCodeDto) {
        this.userService.confirmVerificationCodeAndActiveUser(verificationCodeDto);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(HttpStatus.OK.value());
        responseDto.setMessage("User is Activated Successfully!");
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    /**
     * *
     * This method handles confirm verification code request for change password.
     *
     * @param verificationCodeDto This is the verification code of the user need to be activated.
     * @return The email of the user.
     */
    @Operation(
            description = "Confirm verification code to change password",
            summary = "Confirm verification code to change password",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = VerificationCodeDto.class),
                    examples = {
                            @ExampleObject(
                                    name = "Example ",
                                    value = "{\n" +
                                            "  \"verificationCode\": \"123456\"" +
                                            "}")
                    })),
            responses = {
                    @ApiResponse(responseCode = "200", description = "OK",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"Status\": \"SUCCESSES\",\n" +
                                                            "  \"message\": \"Verify successfully,This is email to change password\",\n" +
                                                            "  \"data\": \"lct@gmail.com\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Not Found",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 404,\n" +
                                                            "  \"Status\": \"CLIENT_ERROR\",\n" +
                                                            "  \"message\": \"Not found verification Code!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "500", description = "Internal server error")}
    )

    @PostMapping("confirm-change-password")
    public ResponseDataDto confirmChangePasswordByVerificationCode(@RequestBody @Valid VerificationCodeDto verificationCodeDto) {
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage("Successfully confirm change password by verification code!");
        responseDataDto.setData(this
                .userService
                .confirmChangePasswordByVerificationCode(verificationCodeDto));
        return responseDataDto;
    }

    /**
     * *
     * This method handles change password request.
     *
     * @param changePasswordDto This is a new password of the user.
     * @return A message.
     */

    @Operation(
            description = "Change password",
            summary = "Change password",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = ConfirmLoginDto.class),
                    examples = {
                            @ExampleObject(
                                    name = "Example ",
                                    value = "{\n" +
                                            "  \"email\": \"lct@gmail.com\",\n" +
                                            "  \"password\": \"12345678\"" +
                                            "}")
                    })),
            responses = {
                    @ApiResponse(responseCode = "200", description = "OK",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"Status\": \"SUCCESSES\",\n" +
                                                            "  \"message\": \"Change password successfully!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Not Found",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 404,\n" +
                                                            "  \"Status\": \"CLIENT_ERROR\",\n" +
                                                            "  \"message\": \"Email not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )}

    )
    @PatchMapping("change-password")
    public ResponseEntity<ResponseDto> changePassword(@RequestBody @Valid ChangePasswordDto changePasswordDto) {
        this.userService.updatePassword(changePasswordDto);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(HttpStatus.OK.value());
        responseDto.setMessage("change password successful!");
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }
}
