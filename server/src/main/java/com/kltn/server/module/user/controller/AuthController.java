package com.kltn.server.module.user.controller;


import com.kltn.server.common.dto.ResponseDto;
import com.kltn.server.common.security.jwt.JwtUtils;
import com.kltn.server.module.user.dto.LoginDto;
import com.kltn.server.module.user.dto.RegisterDto;
import com.kltn.server.module.user.dto.ResponseDataDto;
import com.kltn.server.module.user.dto.SocialLoginDto;
import com.kltn.server.module.user.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/users")
@Tag(name = "user")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtUtils;

    /**
     * *
     * This method handles insert a user request.
     *
     * @param registerDto This is all information of the user.
     * @return A message.
     */

    @Operation(
            description = "Register account by email and password.",
            summary = "Register account",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = RegisterDto.class),
                    examples = {
                            @ExampleObject(
                                    name = "Example ",
                                    value = "{\n" +
                                            "  \"email\": \"lct@gmail.com\", \n" +
                                            "  \"passWord\": \"12345678\"\n, \n" +
                                            "  \"confirmPassword\": \"12345678\", \n" +
                                            "  \"fullName\": \"Le Cong Thuong\"" +
                                            "}")
                    })),
            responses = {
                    @ApiResponse(responseCode = "201", description = "Register successfully",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 201,\n" +
                                                            "  \"Status\": \"REGISTER_SUCCESSES\",\n" +
                                                            "  \"message\": \"Successful registration!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "400", description = "Bad request",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 400,\n" +
                                                            "  \"Status\": \"BAD_REQUEST\",\n" +
                                                            "  \"message\": \"Invalid confirm password!\"\n" +
                                                            "}")
                                    }
                            )
                    ),

                    @ApiResponse(responseCode = "409", description = "Conflict",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 409,\n" +
                                                            "  \"Status\": \"EMAIL_ALREADY_EXIST\",\n" +
                                                            "  \"message\": \"Email has been taken!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "500", description = "Internal server error")
            }
    )

    @PostMapping("register")
    public ResponseEntity<ResponseDto> registerApi(@RequestBody @Valid RegisterDto registerDto) {

        this.userService.saveUser(registerDto);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus("REGISTER_SUCCESSES");
        responseDto.setCode(HttpStatus.OK.value());
        responseDto.setMessage("Successful registration!");
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    /**
     * *
     * This method handles login by email and password request.
     *
     * @param loginDto This is all information to login.
     * @return A message.
     */
    @Operation(
            description = "Login by email and password",
            summary = "Login by email and password",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = LoginDto.class),
                    examples = {
                            @ExampleObject(
                                    name = "Example",
                                    value = "{\n" +
                                            "  \"email\": \"lct@gmail.com\",\n" +
                                            "  \"password\": \"12345678\"\n" +
                                            "}")
                    })),
            responses = {
                    @ApiResponse(responseCode = "200", description = "OK",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example",
                                                    value = "{\n" +
                                                            "  \"data\": {\n" +
                                                            "    \"access_token\": \"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjNAZ21haWwuY29tIiwiaWF0IjoxNjg5NjcwODQ3LCJleHAiOjE2ODk3NTcyNDd9.oF2AhI5BvrHcMqrHTDPhESxjlDu6aPYJTlYEO-6J1ZI\",\n" +
                                                            "    \"refresh_token\": \"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjNAZ21haWwuY29tIiwiaWF0IjoxNjg5NjcwODQ4LCJleHAiOjE2OTIyNjI4NDh9.ofgr7N-hGYRq808_ekX1HnX6H6UFdIFiO1gf6HODZ1M\",\n" +
                                                            "    \"user_id\": 1,\n" +
                                                            "    \"seller_id\": 1\n" +
                                                            "  },\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"message\": \"Login successfully\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "401", description = "Unauthorized",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example",
                                                    value = "{\n" +
                                                            "  \"code\": 401,\n" +
                                                            "  \"status\": \"INVALID_EMAIL_OR_PASSWORD\",\n" +
                                                            "  \"message\": \"Invalid email or password token !\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Not found",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example",
                                                    value = "{\n" +
                                                            "  \"code\": 404,\n" +
                                                            "  \"status\": \"CLIENT_ERROR\",\n" +
                                                            "  \"message\": \"User with email bapcompany@gmail.com not found!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "500", description = "Internal server error")
            }
    )

    @PostMapping("/login")
    public ResponseEntity<ResponseDataDto> login(@RequestBody @Valid LoginDto loginDto) {

        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage("login successfully!");
        responseDataDto.setData(this.userService.loginByEmailAndPassword(loginDto));
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method to load data when login by social account
     *
     * @param socialLoginDto This is data from to save to database
     * @return A message.
     */

    @PostMapping("load-data-social-account")
    public ResponseEntity<ResponseDto> loadDataBySocialAccount(@RequestBody @Valid SocialLoginDto socialLoginDto) {

        this.userService.saveUserBySocial(socialLoginDto);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(HttpStatus.OK.value());
        responseDto.setMessage("Successfully retrieved data using social account!");
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    /**
     * *
     * This method handles logout request.
     *
     * @param request This is a request from the user wants to log out.
     * @return A message.
     */

    @Operation(
            description = "Logout Application",
            summary = "Logout",
            responses = {
                    @ApiResponse(responseCode = "200", description = "OK",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"Status\": \"SUCCESSFUL\",\n" +
                                                            "  \"message\": \"Logout successfully\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "403", description = "Unauthorized",
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
                    @ApiResponse(responseCode = "500", description = "Internal server error")
            }

    )

    @PostMapping("logout")
    public ResponseEntity<ResponseDto> logout(HttpServletRequest request) {

        // Clear session data
        request.getSession().invalidate();
        // Clear authentication
        String token = request.getHeader("Authorization");
        jwtUtils.invalidateToken(token);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(HttpStatus.OK.value());
        responseDto.setMessage("Logout successful!");
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    /**
     * refresh token when access token expires
     *
     * @param request a refresh token from cookies
     * @return a message
     */
    @Operation(
            description = "  This API is used to refresh the user's access token. After logging in, the user will receive a valid access token, however, the access token will expire after a certain period of time. Once the access token expires, the user will not be able to access the protected resources. The Refresh access token API allows the user to send a request to refresh the access token. The system will return a valid new access token so that the user can continue to access protected resources.",
            summary = " Refresh access token",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Response a new access token",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example1",
                                                    value =
                                                            "{\n" +
                                                                    " \"code\": 200,\n" +
                                                                    " \"Status\": \"SUCCESSFUL\",\n" +
                                                                    " \"message\": \"Succeed\",\n" +
                                                                    " \"data\": {\n" +
                                                                    "\"access_token\": \"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjNAZ21haWwuY29tIiwiaWF0IjoxNjg5NjcwODQ3LCJleHAiOjE2ODk3NTcyNDd9.oF2AhI5BvrHcMqrHTDPhESxjlDu6aPYJTlYEO-6J1ZI\",\n" +
                                                                    "\"refresh_token\": \"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjNAZ21haWwuY29tIiwiaWF0IjoxNjg5NjcwODQ4LCJleHAiOjE2OTIyNjI4NDh9.ofgr7N-hGYRq808_ekX1HnX6H6UFdIFiO1gf6HODZ1M\"\n" +
                                                                    "}" +
                                                                    "}"
                                            )
                                    }
                            )
                    ),

                    @ApiResponse(responseCode = "404", description = "when you pass the wrong refresh token and the system can't find a user that matches the refresh token you passed in the cookie",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            " \"code\": 404,\n" +
                                                            " \"Status\": \"SC_NOT_FOUND\",\n" +
                                                            " \"message\": \"Can not find user refresh token from your tokend!!\"\n" +
                                                            "}")
                                    })),
                    @ApiResponse(responseCode = "401", description = " when refresh token expires",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            " \"code\": 404,\n" +
                                                            " \"Status\": \"401 UNAUTHORIZED\",\n" +
                                                            " \"message\": \"Failed for [eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQaGFtUGh1b25nQGdtYWlsLmNvbSIsImlhdCI6MTY4OTc2MjE4MCwiZXhwIjoxNjg5NzYyMjQwfQ.W5C4UFVsWz1I8lmE9jAoXI6zCGmqpFHtyogeCROWHj0]: Refresh token was expired. Please make a new signIn request\"\n" +
                                                            "}")
                                    })),

                    @ApiResponse(responseCode = "403", description = "Unauthorized",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            " \"code\": 403,\n" +
                                                            " \"Status\": \"FORBIDDEN\",\n" +
                                                            " \"message\": \"Unauthorized\"\n" +
                                                            "}")
                                    })),
            }

    )
    @PostMapping("/refreshToken")
    public ResponseEntity<ResponseDataDto> refreshToken(@RequestBody Map<String,String> request) {
        String refresh_token = request.get("refresh_token");
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage("Refresh token successfully!");
        responseDataDto.setData(this.userService.refreshToken(refresh_token));
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }
}
