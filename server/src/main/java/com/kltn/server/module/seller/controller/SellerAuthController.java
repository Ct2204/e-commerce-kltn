package com.kltn.server.module.seller.controller;

import com.kltn.server.common.dto.ResponseDto;
import com.kltn.server.module.user.dto.LoginDto;
import com.kltn.server.module.user.dto.ResponseDataDto;
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
@RequestMapping("/api/v1/seller")
@CrossOrigin({"*"})
@Tag(name = "seller")
public class SellerAuthController {

    @Autowired
    private UserService userService;

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
                                    schema = @Schema(implementation = com.kltn.server.module.user.dto.ResponseDataDto.class),
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
}
