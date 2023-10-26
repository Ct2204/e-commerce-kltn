package com.kltn.server.module.product.controller;

import com.kltn.server.common.dto.ResponseDto;
import com.kltn.server.module.product.dto.PageRatingResDto;
import com.kltn.server.module.product.dto.ProductRatingReqDto;
import com.kltn.server.module.product.dto.ResponseDataDto;
import com.kltn.server.module.product.service.ProductRatingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Tag(name = "Products")
@RequestMapping("/api/v1")
public class ProductRatingController {

    @Autowired
    private ProductRatingService productRatingService;

    /**
     * *
     * This method handles get all ProductRating with paginate by product id
     *
     * @param productId   This is an ID of exist product.
     * @param perPage     this is the number of elements per page .
     * @param currentPage This is current page.
     * @return list rating of page and paginate information.
     */
    @Operation(
            description = "Get all ProductRating with paginate by product id",
            summary = " Get all ProductRating with paginate by product id",
            parameters = @Parameter(name = "productId", description = "This is id of an exist product", example = "1", required = true),
            responses = {
                    @ApiResponse(responseCode = "200", description = "Succeed",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example1 ",
                                                    value = "{\n" +
                                                            " \"code\": 200,\n" +
                                                            " \"Status\": \"SUCCESSFUL\",\n" +
                                                            " \"message\": \"Succeed\",\n" +
                                                            " \"data\": {\n" +

                                                            " \"totalPages\": 2,\n" +
                                                            " \"totalElements\": \"13\",\n" +
                                                            " \"perPage\": 10,\n" +
                                                            " \"numberOfElements\": 3,\n" +
                                                            " \"currentPage\": 2,\n" +
                                                            " \"first\": true,\n" +
                                                            " \"last\": false,\n" +
                                                            " \"productId\": 1,\n" +
                                                            " \"averageOfStars\": 4.8,\n" +
                                                            " \"listRating\":[\n" +

                                                            "{\n" +
                                                            " \"id\": 23,\n" +
                                                            " \"productId\": \"1\",\n" +
                                                            " \"userId\": 1,\n" +
                                                            " \"fullName\": \"Nguyễn Văn A\",\n" +
                                                            " \"avatarUrl\": \"https://ecommerce.com/images/profile/2f82b3ea000ded43cbf03b48718a391c7c66d7fcdd35752b43a1fc49071364e4.png\",\n" +
                                                            " \"starRating\": 5,\n" +
                                                            " \"comment\": \"Hàng đẹp, chất lượng, đáng mua\",\n" +
                                                            " \"createdAt\": \"2023-06-18T12:15:23.50428\",\n" +

                                                            " \"updatedAt\": \"2023-06-18T12:15:23.50428\",\n" +
                                                            " \"listMedia\":[\n" +
                                                            "{\n" +
                                                            " \"id\": 25,\n" +
                                                            " \"productRatingId\": 23,\n" +
                                                            " \"type\": 0,\n" +
                                                            " \"url\": \"https://ecommerce.com/images/rating/2023070612033814314.png\",\n" +
                                                            " \"createdAt\": \"2023-06-18T12:15:23.50428\",\n" +
                                                            " \"updatedAt\":\" 2023-06-18T12:15:23.50428\"\n" +
                                                            " },\n" +
                                                            "{\n" +
                                                            " \"id\": 26,\n" +
                                                            " \"productRatingId\": 23,\n" +
                                                            " \"type\": 0,\n" +
                                                            " \"url\": \"https://ecommerce.com/videos/rating/2023070612038910710.png\",\n" +
                                                            " \"createdAt\": \"2023-06-18T12:15:23.50428\",\n" +
                                                            " \"updatedAt\": \"2023-06-18T12:15:23.50428\"\n" +
                                                            " },\n" +
                                                            "{\n" +
                                                            " \"id\": 27,\n" +
                                                            " \"productRatingId\": 23,\n" +
                                                            " \"type\": 1,\n" +
                                                            " \"url\": \"https://ecommerce.com/videos/rating/2023070612033810710.mp4\",\n" +
                                                            " \"createdAt\": \"2023-06-18T12:15:23.50428\",\n" +
                                                            " \"updatedAt\": \"2023-06-18T12:15:23.50428\"\n" +
                                                            " }\n" +
                                                            " ]\n" +
                                                            "},\n" +

                                                            "{\n" +
                                                            " \"id\": 21,\n" +
                                                            " \"productId\": \"1\",\n" +
                                                            " \"userId\": 2,\n" +
                                                            " \"fullName\": \"Nguyễn Văn B\",\n" +
                                                            " \"avatarUrl\": \"https://ecommerce.com/images/profile/2b3ea000ded43cbf0348718a391c7c66d7fcdd35752b43a1fc49071364e4.png\",\n" +
                                                            " \"starRating\": 4,\n" +
                                                            " \"comment\": \"Không đúng size\",\n" +
                                                            " \"createdAt\": \"2023-06-18T12:12:51.656529\",\n" +
                                                            " \"updatedAt\": \"2023-06-18T12:12:51.656529\",\n" +
                                                            " \"listMedia\":[\n" +
                                                            "{\n" +
                                                            " \"id\": 27,\n" +
                                                            " \"productRatingId\": \"21\",\n" +
                                                            " \"type\": 0,\n" +
                                                            " \"url\": \"https://ecommerce.com/images/rating/2023070612033814314.png\",\n" +
                                                            " \"createdAt\": \"2023-06-16T13:22:02.3355\",\n" +
                                                            " \"updatedAt\": \"2023-06-16T13:22:02.3355\"\n" +
                                                            " }\n" +
                                                            " ]\n" +
                                                            " },\n" +

                                                            "{\n" +
                                                            " \"id\": 21,\n" +
                                                            " \"productId\": \"1\",\n" +
                                                            " \"userId\": 2,\n" +
                                                            " \"fullName\": \"Nguyễn Văn B\",\n" +
                                                            " \"avatarUrl\": \"https://ecommerce.com/images/profile/2b3ea000ded43cbf0348718a391c7c66d7fcdd35752b43a1fc49071364e4.png\",\n" +
                                                            " \"starRating\": 4,\n" +
                                                            " \"comment\": \"Không đúng size\",\n" +
                                                            " \"createdAt\": \"2023-06-18T12:12:51.656529\",\n" +
                                                            " \"updatedAt\": \"2023-06-18T12:12:51.656529\",\n" +
                                                            " \"listMedia\":[\n" +
                                                            " ]\n" +
                                                            " }\n" +

                                                            "]\n" +
                                                            "}\n" +
                                                            "}"),
                                            @ExampleObject(
                                                    name = "Example2 ",
                                                    value = "{\n" +
                                                            " \"code\": 200,\n" +
                                                            " \"Status\": \"SUCCESSFUL\",\n" +
                                                            " \"message\": \"Not exist any comments\",\n" +
                                                            " \"data\": null\n" +
                                                            "}")
                                    }
                            )
                    ),

                    @ApiResponse(responseCode = "404", description = "Resource not found!",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            " \"code\": 404,\n" +
                                                            " \"Status\": \"SC_NOT_FOUND\",\n" +
                                                            " \"message\": \"Resource not found!\"\n" +
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
                                                            "}"),
                                    })),
                    @ApiResponse(responseCode = "400", description = "BadRequest",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            " \"code\": 400,\n" +
                                                            " \"Status\": \"BAD_REQUEST\",\n" +
                                                            " \"message\": \"The given id must not be null!\"\n" +
                                                            "}")
                                    }))
            }

    )
    @GetMapping(path = "/rating/{productId}")
        @ResponseBody
        public ResponseEntity<?> findAllProductRatingByProductId(
                @PathVariable Long productId,
                @RequestParam(value = "perPage", defaultValue = "10") int perPage,
                @RequestParam(value = "currentPage", defaultValue = "1") int currentPage) {
    
            PageRatingResDto pageProductRatingRes = this.productRatingService.findAllProductRatingByProductId(
                    productId, perPage, currentPage - 1);
    
            ResponseDataDto responseDataDto = new ResponseDataDto();
            responseDataDto.setStatus(HttpStatus.OK.series().name());
            responseDataDto.setCode(HttpStatus.OK.value());
            responseDataDto.setData(pageProductRatingRes);
            responseDataDto.setMessage(pageProductRatingRes == null ? "Not exist any comments" : "Succeed");
    
            return ResponseEntity.ok().body(responseDataDto);
        }

    /**
     * This method handles insert new rating for a product
     *
     * @param userId        This is id of current user.
     * @param productRating This is all information to insert new rating.
     * @return "Created successes!"
     */
    @Operation(
            description = "Returns all order with status",
            summary = "Get order by status",
            parameters = @Parameter(name = "userId", description = "This is id of current user", example = "1", required = true),
            requestBody = @RequestBody(content = @Content(mediaType = MediaType.MULTIPART_FORM_DATA_VALUE,
                    schema = @Schema(implementation = ProductRatingReqDto.class)
            )
            ),
            responses = {
                    @ApiResponse(responseCode = "201", description = "Created succeed!",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            " \"code\": 201,\n" +
                                                            " \"Status\": \"SUCCESSFUL\",\n" +
                                                            " \"message\": \"Created succeed!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Resource not found!",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            " \"code\": 404,\n" +
                                                            " \"Status\": \"SC_NOT_FOUND\",\n" +
                                                            " \"message\": \"Resource not found!\"\n" +
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
                                                            "}"),
                                    })),
                    @ApiResponse(responseCode = "400", description = "BadRequest",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            " \"code\": 400,\n" +
                                                            " \"Status\": \"BAD_REQUEST\",\n" +
                                                            " \"message\": \"The given id must not be null!\"\n" +
                                                            "}")
                                    }))}

    )
    @PostMapping("/rating")
    @ResponseBody
    public ResponseEntity<?> insertProductRating(@RequestHeader Long userId,
                                                 @ModelAttribute @Valid ProductRatingReqDto productRating) {

        this.productRatingService.saveProductRating(userId, productRating);

        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.CREATED.series().name());
        responseDto.setCode(HttpStatus.CREATED.value());
        responseDto.setMessage("Created succeed!");

        return ResponseEntity.status(201).body(responseDto);
    }
}
