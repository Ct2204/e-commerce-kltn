
package com.kltn.server.module.seller.controller;

import com.kltn.server.common.dto.ResponseDto;
import com.kltn.server.module.product.dto.ResponseDataDto;
import com.kltn.server.module.seller.dto.*;
import com.kltn.server.module.seller.service.SellerService;
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
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/seller")
@CrossOrigin({"*"})
@Tag(name = "seller")
public class SellerController {

    @Autowired
    SellerService sellerService;

    /**
     * *
     * This method handles get information of a product.
     *
     * @param id This is id of the product.
     * @return The information of the product.
     */
    @Operation(
            description = "Returns product by id",
            summary = "Get product by id",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Successfully retrieved",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example",
                                                    value = "{\n" +
                                                            "  \"data\": {\n" +
                                                            "    \"productId\": 4,\n" +
                                                            "    \"sellerId\": 1,\n" +
                                                            "    \"title\": \"Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt\",\n" +
                                                            "    \"sku\": \"CT\",\n" +
                                                            "    \"categoryId\": 2,\n" +
                                                            "    \"price\": 14.50,\n" +
                                                            "    \"priceSales\": 0.30,\n" +
                                                            "    \"percentDiscount\": 0.80\n" +
                                                            "  },\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"message\": \"Get Product Successfully!\"\n" +
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
                                                            "  \"message\": \"Product with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = @Parameter(name = "id", description = "ID of the product", example = "2")
    )
    @GetMapping("/product/{id}")
    public ResponseEntity<ResponseDataDto> getProduct(@PathVariable("id") Long id) {
        ProductDto items = this.sellerService.getProduct(id);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(items == null ? "Not exist any Products" : "Get Product Successfully!");
        responseDataDto.setData(items);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles save a new product.
     *
     * @param productDto This is information of the product.
     * @return The success message.
     */
    @Operation(
            description = "Create a new product",
            summary = "Create a new product",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    "  \"sellerId\": 1,\n" +
                                                    "  \"title\": null,\n" +
                                                    "  \"sku\": null,\n" +
                                                    "  \"categoryId\": null,\n" +
                                                    "  \"price\": null,\n" +
                                                    "  \"priceSales\": null,\n" +
                                                    "  \"percentDiscount\": null\n" +
                                                    "}"
                                    )
                            }
                    )
            ),
            responses = {
                    @ApiResponse(responseCode = "201", description = "Created",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),

                                    examples = {
                                            @ExampleObject(
                                                    name = "Example ",
                                                    value = "{\n" +
                                                            "  \"data\": {\n" +
                                                            "    \"productId\": 30\n" +
                                                            "  },\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"code\": 201,\n" +
                                                            "  \"message\": \"Save Product Successfully!\"\n" +
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
                                                            "  \"message\": \"Seller id shouldn't be null!\"\n" +
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
                                                            "  \"message\": \"Seller with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = @Parameter(name = "ProductDto", description = "ProductDto", content = @Content(mediaType = "application/json", schema = @Schema(implementation = ProductDto.class)))
    )
    @PostMapping("/product/add")
    public ResponseEntity<ResponseDataDto> saveProduct(@RequestBody @Valid ProductDto productDto) {

        Long id = this.sellerService.saveProduct(productDto);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.CREATED.series().name());
        responseDataDto.setCode(HttpStatus.CREATED.value());
        responseDataDto.setMessage("Save Product Successfully!");
        Map<String, Long> dataHashmap = new HashMap<>();
        dataHashmap.put("productId", id);
        responseDataDto.setData(dataHashmap);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDataDto);
    }

    /**
     * *
     * This method handles upload a file of the product.
     *
     * @param files This is the pictures or videos from the product.
     * @return The success message.
     */
    @PostMapping("/product/upload-file")
    public ResponseEntity<ResponseDataDto> uploadProfilePicture(@RequestBody MultipartFile[] files) {
        List<ProductDescriptionVisualDto> dto = this.sellerService.uploadProductFile(files);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.CREATED.series().name());
        responseDataDto.setCode(HttpStatus.CREATED.value());
        responseDataDto.setMessage("Upload file successfully!");
        responseDataDto.setData(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDataDto);
    }

    /**
     * *
     * This method handles update a product.
     *
     * @param productDto This is information of the product.
     * @return The success message.
     */
    @Operation(
            description = "Update a  product",
            summary = "Update a product",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    "  \"productId\": 4,\n" +
                                                    "  \"sellerId\": 1,\n" +
                                                    "  \"title\": \"Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt\",\n" +
                                                    "  \"sku\": \"CT\",\n" +
                                                    "  \"categoryId\": 2,\n" +
                                                    "  \"price\": 14.50,\n" +
                                                    "  \"priceSales\": 0.3,\n" +
                                                    "  \"percentDiscount\": 0.8\n" +
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
                                                            "  \"message\": \"Update Product Successfully!\"\n" +
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
                                                            "  \"message\": \"Seller id shouldn't be null!\"\n" +
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
                                                            "  \"message\": \"Seller with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = @Parameter(name = "ProductDto", description = "ProductDto", content = @Content(mediaType = "application/json", schema = @Schema(implementation = ProductDto.class)))
    )
    @PutMapping("/product/update")
    public ResponseEntity<ResponseDto> updateProduct(@RequestBody @Valid ProductDto productDto) {

        this.sellerService.updateProduct(productDto);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(HttpStatus.OK.value());
        responseDto.setMessage("Update product successfully!");
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    /**
     * *
     * This method handles get a list options of a product.
     *
     * @param id This is id of the product.
     * @return The list options of the product.
     */
    @Operation(
            description = "Returns product options with items by product id",
            summary = "Get product options and items by product id",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Successfully retrieved",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example",
                                                    value = "{\n" +
                                                            "  \"data\": {\n" +
                                                            "    \"productId\": 1,\n" +
                                                            "    \"sellerId\": 1,\n" +
                                                            "    \"option\": [\n" +
                                                            "      {\n" +
                                                            "        \"name\": \"Color\",\n" +
                                                            "        \"images\": [\n" +
                                                            "          [\n" +
                                                            "            {\n" +
                                                            "              \"url\": \"red1.jpg\",\n" +
                                                            "              \"type\": \"IMAGE\"\n" +
                                                            "            },\n" +
                                                            "            {\n" +
                                                            "              \"url\": \"red2.mp4\",\n" +
                                                            "              \"type\": \"VIDEO\"\n" +
                                                            "            }\n" +
                                                            "          ],\n" +
                                                            "          [\n" +
                                                            "            {\n" +
                                                            "              \"url\": \"yellow1.jpg\",\n" +
                                                            "              \"type\": \"IMAGE\"\n" +
                                                            "            },\n" +
                                                            "            {\n" +
                                                            "              \"url\": \"yellow2.mp4\",\n" +
                                                            "              \"type\": \"VIDEO\"\n" +
                                                            "            }\n" +
                                                            "          ]\n" +
                                                            "        ],\n" +
                                                            "        \"values\": [\n" +
                                                            "          \"Red\",\n" +
                                                            "          \"Yellow\"\n" +
                                                            "        ]\n" +
                                                            "      },\n" +
                                                            "      {\n" +
                                                            "        \"name\": \"Size\",\n" +
                                                            "        \"images\": [\n" +
                                                            "          [],\n" +
                                                            "          []\n" +
                                                            "        ],\n" +
                                                            "        \"values\": [\n" +
                                                            "          \"S\",\n" +
                                                            "          \"M\"\n" +
                                                            "        ]\n" +
                                                            "      }\n" +
                                                            "    ],\n" +
                                                            "    \"productItems\": [\n" +
                                                            "      {\n" +
                                                            "        \"id\": 108,\n" +
                                                            "        \"title\": \"Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt Red-S\",\n" +
                                                            "        \"price\": 14.49,\n" +
                                                            "        \"quantity\": 211,\n" +
                                                            "        \"optionValueIndex\": [\n" +
                                                            "          0,\n" +
                                                            "          0\n" +
                                                            "        ]\n" +
                                                            "      },\n" +
                                                            "      {\n" +
                                                            "        \"id\": 109,\n" +
                                                            "        \"title\": \"Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt Red-M\",\n" +
                                                            "        \"price\": 14.49,\n" +
                                                            "        \"quantity\": 211,\n" +
                                                            "        \"optionValueIndex\": [\n" +
                                                            "          0,\n" +
                                                            "          1\n" +
                                                            "        ]\n" +
                                                            "      },\n" +
                                                            "      {\n" +
                                                            "        \"id\": 110,\n" +
                                                            "        \"title\": \"Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt Yellow-S\",\n" +
                                                            "        \"price\": 14.49,\n" +
                                                            "        \"quantity\": 211,\n" +
                                                            "        \"optionValueIndex\": [\n" +
                                                            "          1,\n" +
                                                            "          0\n" +
                                                            "        ]\n" +
                                                            "      },\n" +
                                                            "      {\n" +
                                                            "        \"id\": 111,\n" +
                                                            "        \"title\": \"Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt Yellow-M\",\n" +
                                                            "        \"price\": 14.49,\n" +
                                                            "        \"quantity\": 211,\n" +
                                                            "        \"optionValueIndex\": [\n" +
                                                            "          1,\n" +
                                                            "          1\n" +
                                                            "        ]\n" +
                                                            "      }\n" +
                                                            "    ]\n" +
                                                            "  },\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"message\": \"Get Product Successfully!\"\n" +
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
                                                            "  \"message\": \"Product with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = @Parameter(name = "id", description = "ID of the product", example = "4")
    )
    @GetMapping("/product/option/{id}")
    public ResponseEntity<ResponseDataDto> getProductOptionWithItem(@PathVariable("id") Long id) {
        ProductOptionWithItemDto item = this.sellerService.getProductOptionWithItem(id);

        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(item == null ? "Not exist any Products" : "Get Product Successfully!");
        responseDataDto.setData(item);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles save a list options and item of a product.
     *
     * @param productOptionWithItemDto This is a DTO contains list options and item.
     * @return The success message.
     */
    @Operation(
            description = "Create a new product options and items",
            summary = "Create a new product options and items with the given data",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductOptionWithItemDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    "  \"productId\": 1,\n" +
                                                    "  \"sellerId\": 1,\n" +
                                                    "  \"options\": [\n" +
                                                    "    {\n" +
                                                    "      \"name\": \"Color\",\n" +
                                                    "      \"images\": [\n" +
                                                    "        [\n" +
                                                    "          {\n" +
                                                    "            \"url\": \"red1.jpg\",\n" +
                                                    "            \"type\": \"IMAGE\"\n" +
                                                    "          },\n" +
                                                    "          {\n" +
                                                    "            \"url\": \"red2.mp4\",\n" +
                                                    "            \"type\": \"VIDEO\"\n" +
                                                    "          }\n" +
                                                    "        ],\n" +
                                                    "        [\n" +
                                                    "          {\n" +
                                                    "            \"url\": \"yellow1.jpg\",\n" +
                                                    "            \"type\": \"IMAGE\"\n" +
                                                    "          },\n" +
                                                    "          {\n" +
                                                    "            \"url\": \"yellow2.mp4\",\n" +
                                                    "            \"type\": \"VIDEO\"\n" +
                                                    "          }\n" +
                                                    "        ]\n" +
                                                    "      ],\n" +
                                                    "      \"values\": [\n" +
                                                    "        \"Red\",\n" +
                                                    "        \"Yellow\"\n" +
                                                    "      ]\n" +
                                                    "    },\n" +
                                                    "    {\n" +
                                                    "      \"name\": \"Size\",\n" +
                                                    "      \"images\": [\n" +
                                                    "        [],\n" +
                                                    "        []\n" +
                                                    "      ],\n" +
                                                    "      \"values\": [\n" +
                                                    "        \"S\",\n" +
                                                    "        \"M\"\n" +
                                                    "      ]\n" +
                                                    "    }\n" +
                                                    "  ],\n" +
                                                    "  \"productItems\": [\n" +
                                                    "    {\n" +
                                                    "      \"id\": 108,\n" +
                                                    "      \"title\": \"Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt Red-S\",\n" +
                                                    "      \"price\": 14.49,\n" +
                                                    "      \"quantity\": 211,\n" +
                                                    "      \"optionValueIndex\": [\n" +
                                                    "        0,\n" +
                                                    "        0\n" +
                                                    "      ]\n" +
                                                    "    },\n" +
                                                    "    {\n" +
                                                    "      \"id\": 109,\n" +
                                                    "      \"title\": \"Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt Red-M\",\n" +
                                                    "      \"price\": 14.49,\n" +
                                                    "      \"quantity\": 211,\n" +
                                                    "      \"optionValueIndex\": [\n" +
                                                    "        0,\n" +
                                                    "        1\n" +
                                                    "      ]\n" +
                                                    "    },\n" +
                                                    "    {\n" +
                                                    "      \"id\": null,\n" +
                                                    "      \"title\": \"Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt Yellow-S\",\n" +
                                                    "      \"price\": 14.49,\n" +
                                                    "      \"quantity\": 211,\n" +
                                                    "      \"optionValueIndex\": [\n" +
                                                    "        1,\n" +
                                                    "        0\n" +
                                                    "      ]\n" +
                                                    "    },\n" +
                                                    "    {\n" +
                                                    "      \"id\": null,\n" +
                                                    "      \"title\": \"Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt Yellow-M\",\n" +
                                                    "      \"price\": 14.49,\n" +
                                                    "      \"quantity\": 211,\n" +
                                                    "      \"optionValueIndex\": [\n" +
                                                    "        1,\n" +
                                                    "        1\n" +
                                                    "      ]\n" +
                                                    "    }\n" +
                                                    "  ]\n" +
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
                                                            "  \"message\": \"Save Product Options Successfully!\"\n" +
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
                                                            "  \"message\": \"Seller id shouldn't be null!\"\n" +
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
                                                            "  \"message\": \"Seller with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = @Parameter(name = "ProductOptionWithItemDto", description = "ProductOptionWithItemDto", content = @Content(mediaType = "application/json", schema = @Schema(implementation = ProductOptionWithItemDto.class)))
    )
    @PostMapping("/product/option/add")
    public ResponseEntity<ResponseDto> saveProductOption(@RequestBody @Valid
                                                         ProductOptionWithItemDto productOptionWithItemDto) {
        this.sellerService.saveProductOptionWithItem(productOptionWithItemDto);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.CREATED.series().name());
        responseDto.setCode(HttpStatus.CREATED.value());
        responseDto.setMessage("Save options successfully!");
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDto);
    }

    /**
     * *
     * This method handles get description of a product.
     *
     * @param id This is id of the product.
     * @return The description of the product.
     */
    @Operation(
            description = "Returns product description by product id",
            summary = "Get product description by product id",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Successfully retrieved",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example",
                                                    value = "{\n" +
                                                            "  \"data\": {\n" +
                                                            "    \"productId\": 27,\n" +
                                                            "    \"sellerId\": 1,\n" +
                                                            "    \"description\": \"Iphone den tu nha Apple\",\n" +
                                                            "    \"images\": [\n" +
                                                            "      {\n" +
                                                            "        \"url\": \"FutureIphone12.jpg\",\n" +
                                                            "        \"type\": \"IMAGE\"\n" +
                                                            "      },\n" +
                                                            "      {\n" +
                                                            "        \"url\": \"FutureIphone2.jpg\",\n" +
                                                            "        \"type\": \"IMAGE\"\n" +
                                                            "      },\n" +
                                                            "      {\n" +
                                                            "        \"url\": \"FutureIphone3.mp4\",\n" +
                                                            "        \"type\": \"VIDEO\"\n" +
                                                            "      },\n" +
                                                            "      {\n" +
                                                            "        \"url\": \"FutureIphone4.mp4\",\n" +
                                                            "        \"type\": \"VIDEO\"\n" +
                                                            "      },\n" +
                                                            "      {\n" +
                                                            "        \"url\": \"FutureIphone5.jpg\",\n" +
                                                            "        \"type\": \"IMAGE\"\n" +
                                                            "      },\n" +
                                                            "      {\n" +
                                                            "        \"url\": \"FutureIphone6.jpg\",\n" +
                                                            "        \"type\": \"IMAGE\"\n" +
                                                            "      }\n" +
                                                            "    ]\n" +
                                                            "  },\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"message\": \"Get Product Description successfully!\"\n" +
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
                                                            "  \"message\": \"Product with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = @Parameter(name = "id", description = "ID of the product", example = "4")
    )
    @GetMapping("/product/description/{id}")
    public ResponseEntity<ResponseDataDto> getProductDescription(@PathVariable("id") Long id) {
        ProductDescriptionDto item = this.sellerService.getProductDescription(id);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(item == null ? "Not exist description" : "Get Product Description successfully!");
        responseDataDto.setData(item);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles save description of a product.
     *
     * @param productDescriptionDto This is information of the description.
     * @return The success message.
     */
    @Operation(
            description = "Create a product description",
            summary = "Create a new product description with the given data",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductDescriptionDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    "  \"productId\": 4,\n" +
                                                    "  \"sellerId\": 1,\n" +
                                                    "  \"description\": \"San pham rat chat luong\",\n" +
                                                    "  \"images\": [\n" +
                                                    "    {\"url\":\"description1.jpg\", \"type\":\"IMAGE\"},\n" +
                                                    "    {\"url\":\"description2.jpg\", \"type\":\"IMAGE\"},\n" +
                                                    "    {\"url\":\"description3.mp4\", \"type\":\"VIDEO\"},\n" +
                                                    "    {\"url\":\"description4.mp4\", \"type\":\"VIDEO\"},\n" +
                                                    "    {\"url\":\"description5.jpg\", \"type\":\"IMAGE\"},\n" +
                                                    "    {\"url\":\"description6.jpg\", \"type\":\"IMAGE\"}\n" +
                                                    "  ]\n" +
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
                                                            "  \"message\": \"Save Product Descriptions Successfully!\"\n" +
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
                                                            "  \"message\": \"Seller id shouldn't be null!\"\n" +
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
                                                            "  \"message\": \"Seller with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = @Parameter(name = "ProductDescriptionDto",
                    description = "ProductDescriptionDto",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductDescriptionDto.class)))
    )
    @PostMapping("/product/description/add")
    public ResponseEntity<ResponseDto> saveProductDescription(@RequestBody @Valid
                                                              ProductDescriptionDto productDescriptionDto) {
        this.sellerService.saveProductDescription(productDescriptionDto);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.CREATED.series().name());
        responseDto.setCode(HttpStatus.CREATED.value());
        responseDto.setMessage("Save description successfully!");
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDto);
    }

    /**
     * *
     * This method handles get details of a product.
     *
     * @param id This is id of the product.
     * @return The details of the product.
     */
    @Operation(
            description = "Returns product details",
            summary = "Get product details by id",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Successfully retrieved",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example",
                                                    value = "{\n" +
                                                            "  \"data\": {\n" +
                                                            "    \"productId\": 4,\n" +
                                                            "    \"sellerId\": 1,\n" +
                                                            "    \"productDetails\": [\n" +
                                                            "      {\n" +
                                                            "        \"key\": \"Xuat xu\",\n" +
                                                            "        \"value\": \"Viet Nam\"\n" +
                                                            "      },\n" +
                                                            "      {\n" +
                                                            "        \"key\": \"Thuong hieu\",\n" +
                                                            "        \"value\": \"ADAM\"\n" +
                                                            "      },\n" +
                                                            "      {\n" +
                                                            "        \"key\": \"Chat lieu\",\n" +
                                                            "        \"value\": \"Nhua\"\n" +
                                                            "      },\n" +
                                                            "      {\n" +
                                                            "        \"key\": \"Do ben\",\n" +
                                                            "        \"value\": \"Chong nuoc\"\n" +
                                                            "      }\n" +
                                                            "    ]\n" +
                                                            "  },\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"message\": \"Get Product Details successfully!\"\n" +
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
                                                            "  \"message\": \"Product with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = @Parameter(name = "id", description = "ID of the product", example = "4")
    )
    @GetMapping("/product/detail/{id}")
    public ResponseEntity<ResponseDataDto> getProductDetail(@PathVariable("id") Long id) {
        ProductDetailsDto item = this.sellerService.getProductDetails(id);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(item == null ? "Not exist any details" : "Get Product Details successfully!");
        responseDataDto.setData(item);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles save details of a product.
     *
     * @param productDetailsDto This is information of the details.
     * @return The success message.
     */
    @Operation(
            description = "Create a new product detail",
            summary = "Create a new product detail with the given data",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductDetailsDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    "  \"productId\": 4,\n" +
                                                    "  \"sellerId\": 1,\n" +
                                                    "  \"productDetails\": [\n" +
                                                    "    {\"key\":\"Xuat xu\",\"value\" : \"Viet Nam\"},\n" +
                                                    "    {\"key\":\"Thuong hieu\",\"value\" : \"ADAM\"},\n" +
                                                    "    {\"key\":\"Chat lieu\",\"value\" : \"Nhua\"},\n" +
                                                    "    {\"key\":\"Do ben\",\"value\" : \"Chong tank\"}\n" +
                                                    "  ]\n" +
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
                                                            "  \"message\": \"Save Product Detail Successfully!\"\n" +
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
                                                            "  \"message\": \"Seller id shouldn't be null!\"\n" +
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
                                                            "  \"message\": \"Seller with id 444 not found!\"\n" +
                                                            "}")
                                    }
                            )
                    )
            },
            parameters = @Parameter(name = "ProductDetailsDto",
                    description = "ProductDetailsDto",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductDetailsDto.class)))
    )
    @PostMapping("/product/detail/add")
    public ResponseEntity<ResponseDto> saveProductDetail(@RequestBody @Valid ProductDetailsDto productDetailsDto) {
        this.sellerService.saveProductDetail(productDetailsDto);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.CREATED.series().name());
        responseDto.setCode(HttpStatus.CREATED.value());
        responseDto.setMessage("Save details successfully!");
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDto);
    }

    /**
     * *
     * This method handles get a list categories of a product.
     *
     * @return The list categories of the product.
     */
    @Operation(
            description = "Returns a list categories of a product",
            summary = "Get a list categories of a product",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Successfully retrieved",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example",
                                                    value = "{\n" +
                                                            "  \"data\": [\n" +
                                                            "    {\n" +
                                                            "      \"id\": 1,\n" +
                                                            "      \"title\": \"Phone\",\n" +
                                                            "      \"parentId\": null\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 2,\n" +
                                                            "      \"title\": \"Shirt\",\n" +
                                                            "      \"parentId\": null\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 3,\n" +
                                                            "      \"title\": \"Shoe\",\n" +
                                                            "      \"parentId\": null\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 4,\n" +
                                                            "      \"title\": \"Hat\",\n" +
                                                            "      \"parentId\": null\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 5,\n" +
                                                            "      \"title\": \"Jean\",\n" +
                                                            "      \"parentId\": null\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 6,\n" +
                                                            "      \"title\": \"Android\",\n" +
                                                            "      \"parentId\": 1\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 7,\n" +
                                                            "      \"title\": \"IPhone\",\n" +
                                                            "      \"parentId\": 1\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 8,\n" +
                                                            "      \"title\": \"Polo\",\n" +
                                                            "      \"parentId\": 2\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 9,\n" +
                                                            "      \"title\": \"T-Shirt\",\n" +
                                                            "      \"parentId\": 2\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 10,\n" +
                                                            "      \"title\": \"Male Shoe\",\n" +
                                                            "      \"parentId\": 3\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 11,\n" +
                                                            "      \"title\": \"Female Shoe\",\n" +
                                                            "      \"parentId\": 3\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 12,\n" +
                                                            "      \"title\": \"Male Hat\",\n" +
                                                            "      \"parentId\": 4\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 13,\n" +
                                                            "      \"title\": \"Female Hat\",\n" +
                                                            "      \"parentId\": 4\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 14,\n" +
                                                            "      \"title\": \"Male Jean\",\n" +
                                                            "      \"parentId\": 5\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"id\": 15,\n" +
                                                            "      \"title\": \"Female Jean\",\n" +
                                                            "      \"parentId\": 5\n" +
                                                            "    }\n" +
                                                            "  ],\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"message\": \"Get Product category Successfully!\"\n" +
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
                    )
            }
    )
    @GetMapping("/product/category")
    public ResponseEntity<ResponseDataDto> getProductCategory() {
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage("Get Product category Successfully!");
        responseDataDto.setData(this.sellerService.getAllProductCategory());
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }


    /**
     * *
     * This method to get list products for seller.
     *
     * @param sellerId This is  ID of seller to get list products.
     * @param currentPage This is current page of list product for seller.
     * @return DataDto.
     */

    @Operation(
            description = "Return Page List Product for seller",
            summary = "Get Page List Product for seller With Information of Paging",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Successfully retrieved",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example",
                                                    value = "{\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"status\": \"SUCCESSFUL\",\n" +
                                                            "  \"message\": \"Find List Product For Seller Successful\",\n" +
                                                            "  \"data\": {\n" +
                                                            "    \"totalPages\": 1,\n" +
                                                            "    \"perPage\": 2,\n" +
                                                            "    \"numberOfElements\": 5,\n" +
                                                            "    \"currentPage\": 1,\n" +
                                                            "    \"first\": true,\n" +
                                                            "    \"last\": false,\n" +
                                                            "    \"listProduct\": [\n" +
                                                            "      {\n" +
                                                            "        \"id\": 1,\n" +
                                                            "        \"title\": \"Gildan Men's Crew T-Shirts, Multipack, Style G1100\",\n" +
                                                            "        \"quantityInStock\": 300,\n" +
                                                            "        \"price\": 10.00,\n" +
                                                            "        \"status\": \"AVAILABLE\",\n" +
                                                            "        \"url\": \"https://ecommerce-api.bappartners.com/images/product/R1.jpg\",\n" +
                                                            "        \"categoryTitle\": \"Quần áo\"\n" +
                                                            "      }\n" +
                                                            "    ]\n" +
                                                            "  }\n" +
                                                            "}"
                                            )
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
                                                            "  \"status\": \"FORBIDDEN\",\n" + // Corrected "Status" to "status"
                                                            "  \"message\": \"Unauthorized\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    )
            },
            parameters = {
                    @Parameter(name = "perPage", description = "perPage product", example = "1"),
                    @Parameter(name = "currentPage", description = "currentPage Product", example = "1")
            }
    )

    @GetMapping(path="list-product/{sellerId}")
    @ResponseBody
    public ResponseDataDto getListProductForSeller(
            @PathVariable Long sellerId,
            @RequestParam(value = "perPage", defaultValue = "5") int perPage,
            @RequestParam(value = "currentPage", defaultValue = "1") int currentPage){
        PageProductResDto pageProductRes = this.sellerService.getAllProductForSeller(
                sellerId,perPage, currentPage-1);

        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus("Success");
        responseDataDto.setCode(200);
        responseDataDto.setMessage("Get list product successfully");
        responseDataDto.setData(pageProductRes);
        return responseDataDto;


    }

}
