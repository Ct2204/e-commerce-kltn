
package com.kltn.server.module.product.controller;


import com.kltn.server.module.product.dto.*;
import com.kltn.server.module.product.service.*;
import com.kltn.server.module.seller.dto.PageProductResDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin({"*"})
@RequestMapping("/api/v1/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductDetailService productDetailService;

    @Autowired
    private ProductDescriptionService productDescriptionService;


    @Autowired
    private ProductOptionService productOptionService;

    @Autowired
    private ProductItemService productItemService;

    @Autowired
    private ProductOptionDetailService productOptionDetailService;

    /**
     * *
     * This method handles get all Product, List Product with paginate
     *
     * @param currentPage This is current page.
     * @return List Product on page and paginate information.
     */
    @Operation(

            description = "Return Page List Product",

            summary = "Get Page List Product With Information of Paging",

            responses = @ApiResponse(responseCode = "200", description = "Successfully retrieved",

                    content = @Content(mediaType = "application/json",

                            schema = @Schema(implementation = ResponseDataDto.class),

                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    " \"code\": 200,\n" +
                                                    " \"Status\": \"SUCCESSFUL\",\n" +
                                                    " \"message\": \"Find List Product Successful\",\n" +
                                                    " \"data\": {\n" +
                                                    " \"totalPages\": 1,\n" +
                                                    " \"perPage\": \"27\",\n" +
                                                    " \"numberOfElements\": 27,\n" +
                                                    " \"currentPage\": 1,\n" +
                                                    " \"first\": true,\n" +
                                                    " \"last\": false,\n" +
                                                    " \"listProducts\": [\n" +
                                                    " {\n" +
                                                    " \"id\": 1,\n" +
                                                    " \"title\": \"Gildan Men's Crew T-Shirts, Multipack, Style G1100\",\n" +
                                                    " \"slug\": \"Gildan Men's Crew T-Shirts\",\n" +
                                                    " \"sku\": \"Gildan Men's Crew T-Shirts\",\n" +
                                                    " \"quantityInStock\": 300,\n" +
                                                    " \"price\": 10.00,\n" +
                                                    " \"percentageDiscount\": 10.00,\n" +
                                                    " \"priceSales\": 10.00,\n" +
                                                    " \"status\": \"AVAILABLE\",\n" +
                                                    " \"star_rating\": 5.0,\n" +
                                                    " \"status\": 1,\n" +
                                                    " \"listMediaProduct\": [\n" +
                                                    " {\n" +
                                                    " \"id\": 1,\n" +
                                                    " \"type\": \"IMAGE\",\n" +
                                                    " \"url\": \"https://ecommerce.com/images/product/R1.jpg\",\n" +
                                                    " \"slug\": \"B\",\n" +
                                                    " \"createAt\": null,\n" +
                                                    " \"updateAt\": null\n" +
                                                    " }\n" +
                                                    " ],\n" +
                                                    " \"categoryId\": 2\n" +
                                                    " }\n" +
                                                    " ]\n" +
                                                    " }\n" +
                                                    "}"
                                    )
                            }

                    )

            ),

            parameters = {@Parameter(name = "perPage", description = "perPage product", example = "1"),
                    @Parameter(name = "currentPage", description = "currentPage Product", example = "1")}
    )
    @GetMapping(path = "/list-product")
    @ResponseBody
    public ResponseEntity<ResponseDataDto> findAllProduct(
            @RequestParam(value = "perPage", defaultValue = "10") int perPage,
            @RequestParam(value = "currentPage", defaultValue = "1") int currentPage) {
        ProductListDto pageProductList = this.productService.findPageProduct(
                perPage, currentPage - 1);

        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage("Find List Product Successful");
        responseDataDto.setData(pageProductList);

        if (pageProductList == null) {
            responseDataDto.setMessage("Do Not Have Any Products In This Page");
        }

        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles Get all Product Information and Product Visuals by Product Id
     *
     * @param productId This is an ID of exist product.
     * @return All Product Information and List Product Visuals by Product Id
     */
    @Operation(

            description = "Return Product Information",

            summary = "Get Product Information And Its Visual ",

            responses = @ApiResponse(responseCode = "200", description = "Successfully retrieved",

                    content = @Content(mediaType = "application/json",

                            schema = @Schema(implementation = ResponseDataDto.class),

                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    " \"code\": 200,\n" +
                                                    " \"Status\": \"SUCCESSFUL\",\n" +
                                                    " \"message\": \"Get Product Information Successful\",\n" +
                                                    " \"data\": {\n" +
                                                    " \"id\": 1,\n" +
                                                    " \"title\": \"Gildan Men's Crew T-Shirts, Multipack, Style G1100\",\n" +
                                                    " \"slug\": \"Gildan Men's Crew T-Shirts\",\n" +
                                                    " \"sku\": \"Gildan Men's Crew T-Shirts\",\n" +
                                                    " \"quantityInStock\": 300,\n" +
                                                    " \"price\": 10.00,\n" +
                                                    " \"percentageDiscount\": 10.00,\n" +
                                                    " \"priceSales\": 10.00,\n" +
                                                    " \"status\": \"AVAILABLE\",\n" +
                                                    " \"star_rating\": 5.0,\n" +
                                                    " \"status\": 1,\n" +
                                                    " \"listMediaProduct\": [\n" +
                                                    " {\n" +
                                                    " \"id\": 1,\n" +
                                                    " \"type\": \"IMAGE\",\n" +
                                                    " \"url\": \"https://ecommerce.com/images/product/R1.jpg\",\n" +
                                                    " \"slug\": \"B\",\n" +
                                                    " \"createAt\": null,\n" +
                                                    " \"updateAt\": null\n" +
                                                    " }\n" +
                                                    " ],\n" +
                                                    " \"categoryId\": 2\n" +
                                                    " }\n" +
                                                    "}"
                                    )
                            }

                    )

            ),
            parameters = @Parameter(name = "productId", description = "Id of Product", example = "1")

    )
    @GetMapping(path = "/product-information/{productId}")
    public ResponseEntity<ResponseDataDto> findProductByProductId(@PathVariable("productId") Long productId) {
        ProductDto product = this.productService.findProductByProductId(productId);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(product == null ? "Product has not been added" : "Get Product Information Successful!");
        responseDataDto.setData(product);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles Get all Product Options Information by Product Id
     *
     * @param productId This is an ID of exist product.
     * @return All Product Options Information and List Product Option Detail, List Image and Video
     * in each Option by Product ID
     */
    @Operation(
            description = "Return Product Options",
            summary = "Get Product Options By Product Id",
            responses = @ApiResponse(
                    responseCode = "200",
                    description = "Successfully retrieved",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = ResponseDataDto.class),
                            examples = @ExampleObject(
                                    name = "Example",
                                    value = "{\n" +
                                            " \"status\": \"SUCCESSFUL\",\n" +
                                            " \"code\": 200,\n" +
                                            " \"message\": \"Get Product Option Successful!\",\n" +
                                            " \"data\": [\n" +
                                            "     {\n" +
                                            "         \"id\": 1,\n" +
                                            "         \"option\": \"Size\",\n" +
                                            "         \"createdAt\": null,\n" +
                                            "         \"updatedAt\": null,\n" +
                                            "         \"productId\": 1,\n" +
                                            "         \"listProductOptionDetail\": [\n" +
                                            "             {\n" +
                                            "                 \"id\": 3,\n" +
                                            "                 \"productOptionId\": 1,\n" +
                                            "                 \"value\": \"L\",\n" +
                                            "                 \"createdAt\": null,\n" +
                                            "                 \"updatedAt\": null,\n" +
                                            "                 \"productId\": 1,\n" +
                                            "                 \"listProductOptionDetailVisuals\": []\n" +
                                            "             },\n" +
                                            "             {\n" +
                                            "                 \"id\": 2,\n" +
                                            "                 \"productOptionId\": 1,\n" +
                                            "                 \"value\": \"M\",\n" +
                                            "                 \"createdAt\": null,\n" +
                                            "                 \"updatedAt\": null,\n" +
                                            "                 \"productId\": 1,\n" +
                                            "                 \"listProductOptionDetailVisuals\": []\n" +
                                            "             },\n" +
                                            "             {\n" +
                                            "                 \"id\": 1,\n" +
                                            "                 \"productOptionId\": 1,\n" +
                                            "                 \"value\": \"S\",\n" +
                                            "                 \"createdAt\": null,\n" +
                                            "                 \"updatedAt\": null,\n" +
                                            "                 \"productId\": 1,\n" +
                                            "                 \"listProductOptionDetailVisuals\": []\n" +
                                            "             }\n" +
                                            "         ]\n" +
                                            "     },\n" +
                                            "     {\n" +
                                            "         \"id\": 2,\n" +
                                            "         \"option\": \"Color\",\n" +
                                            "         \"createdAt\": null,\n" +
                                            "         \"updatedAt\": null,\n" +
                                            "         \"productId\": 1,\n" +
                                            "         \"listProductOptionDetail\": [\n" +
                                            "             {\n" +
                                            "                 \"id\": 6,\n" +
                                            "                 \"productOptionId\": 2,\n" +
                                            "                 \"value\": \"Red\",\n" +
                                            "                 \"createdAt\": null,\n" +
                                            "                 \"updatedAt\": null,\n" +
                                            "                 \"productId\": 1,\n" +
                                            "                 \"listProductOptionDetailVisuals\": [\n" +
                                            "                     {\n" +
                                            "                         \"id\": 3,\n" +
                                            "                         \"type\": \"IMAGE\",\n" +
                                            "                         \"url\": \"https://ecommerce.com/images/product/R1.jpg\",\n" +
                                            "                         \"slug\": \"B\",\n" +
                                            "                         \"createdAt\": null,\n" +
                                            "                         \"updatedAt\": null\n" +
                                            "                     }\n" +
                                            "                 ]\n" +
                                            "             },\n" +
                                            "             {\n" +
                                            "                 \"id\": 5,\n" +
                                            "                 \"productOptionId\": 2,\n" +
                                            "                 \"value\": \"White\",\n" +
                                            "                 \"createdAt\": null,\n" +
                                            "                 \"updatedAt\": null,\n" +
                                            "                 \"productId\": 1,\n" +
                                            "                 \"listProductOptionDetailVisuals\": [\n" +
                                            "                     {\n" +
                                            "                         \"id\": 2,\n" +
                                            "                         \"type\": \"IMAGE\",\n" +
                                            "                         \"url\": \"https://ecommerce.com/images/product/W1.jpg\",\n" +
                                            "                         \"slug\": \"B\",\n" +
                                            "                         \"createdAt\": null,\n" +
                                            "                         \"updatedAt\": null\n" +
                                            "                     }\n" +
                                            "                 ]\n" +
                                            "             },\n" +
                                            "             {\n" +
                                            "                 \"id\": 4,\n" +
                                            "                 \"productOptionId\": 2,\n" +
                                            "                 \"value\": \"Black\",\n" +
                                            "                 \"createdAt\": null,\n" +
                                            "                 \"updatedAt\": null,\n" +
                                            "                 \"productId\": 1,\n" +
                                            "                 \"listProductOptionDetailVisuals\": [\n" +
                                            "                     {\n" +
                                            "                         \"id\": 1,\n" +
                                            "                         \"type\": \"IMAGE\",\n" +
                                            "                         \"url\": \"https://ecommerce.com/images/product/B1.jpg\",\n" +
                                            "                         \"slug\": \"B\",\n" +
                                            "                         \"createdAt\": null,\n" +
                                            "                         \"updatedAt\": null\n" +
                                            "                     },\n" +
                                            "                     {\n" +
                                            "                         \"id\": 62,\n" +
                                            "                         \"type\": \"IMAGE\",\n" +
                                            "                         \"url\": \"https://ecommerce.com/images/product/B7.jpg\",\n" +
                                            "                         \"slug\": \"B\",\n" +
                                            "                         \"createdAt\": null,\n" +
                                            "                         \"updatedAt\": null\n" +
                                            "                     },\n" +
                                            "                     {\n" +
                                            "                         \"id\": 61,\n" +
                                            "                         \"type\": \"IMAGE\",\n" +
                                            "                         \"url\": \"https://ecommerce.com/images/product/B6.jpg\",\n" +
                                            "                         \"slug\": \"B\",\n" +
                                            "                         \"createdAt\": null,\n" +
                                            "                         \"updatedAt\": null\n" +
                                            "                     }\n" +
                                            "                 ]\n" +
                                            "             }\n" +
                                            "         ]\n" +
                                            "     }\n" +
                                            " ],\n" +
                                            " \"categoryId\": 2\n" +
                                            "}"
                            )
                    )
            ),

            parameters = @Parameter(name = "productId", description = "Id of Product", example = "1")
    )
    @GetMapping(path = "/product-option/{productId}")
    public ResponseEntity<ResponseDataDto> findAllProductOptionByProductId(@PathVariable("productId") Long productId) {
        List<ProductOptionDto> options = this.productOptionService.findProductOptionByProductId(productId);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(options == null ? "Not exist any Product Options" : "Get Product Option Successful!");
        responseDataDto.setData(options);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles Get all Product Items Information by Product Id
     *
     * @param productId This is an ID of exist product.
     * @return All Product Items Information and List Product Item Detail by Product Id
     */
    @Operation(
            description = "Return Product Items",
            summary = "Get Product Item By Product Id",
            responses = @ApiResponse(responseCode = "200", description = "Successfully retrieved",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ResponseDataDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    " \"Status\": \"SUCCESSFUL\",\n" +
                                                    " \"code\": 200,\n" +
                                                    " \"message\": \"Get Product Item Successful!\",\n" +
                                                    " \"data\": {\n" +
                                                    "  \"data\": [\n" +
                                                    "    {\n" +
                                                    "      \"id\": 1,\n" +
                                                    "      \"productId\": 1,\n" +
                                                    "      \"price\": 200000.00,\n" +
                                                    "      \"quantity\": 5,\n" +
                                                    "      \"productItemDetails\": [\n" +
                                                    "        {\n" +
                                                    "          \"id\": 1,\n" +
                                                    "          \"productItemId\": 1,\n" +
                                                    "          \"productOptionDetailId\": 1\n" +
                                                    "        },\n" +
                                                    "        {\n" +
                                                    "          \"id\": 2,\n" +
                                                    "          \"productItemId\": 1,\n" +
                                                    "          \"productOptionDetailId\": 4\n" +
                                                    "        }\n" +
                                                    "      ]\n" +
                                                    "    },\n" +
                                                    "    {\n" +
                                                    "      \"id\": 3,\n" +
                                                    "      \"productId\": 1,\n" +
                                                    "      \"price\": 170000.00,\n" +
                                                    "      \"quantity\": 146,\n" +
                                                    "      \"productItemDetails\": [\n" +
                                                    "        {\n" +
                                                    "          \"id\": 8,\n" +
                                                    "          \"productItemId\": 3,\n" +
                                                    "          \"productOptionDetailId\": 1\n" +
                                                    "        },\n" +
                                                    "        {\n" +
                                                    "          \"id\": 9,\n" +
                                                    "          \"productItemId\": 3,\n" +
                                                    "          \"productOptionDetailId\": 6\n" +
                                                    "        }\n" +
                                                    "      ]\n" +
                                                    "    },\n" +
                                                    "    // More data entries can be added here\n" +
                                                    "  ],\n" +
                                                    " \"status\": \"SUCCESSFUL\",\n" +
                                                    " \"code\": 200,\n" +
                                                    " \"message\": \"Get Product Item Successful!\"\n" +
                                                    " }\n" +
                                                    "}"
                                    )
                            }
                    )
            ),
            parameters = @Parameter(name = "productId", description = "Id of Product", example = "1")
    )
    @GetMapping(path = "/product-item/{productId}")
    public ResponseEntity<ResponseDataDto> findAllProductItemByProductId(@PathVariable("productId") Long productId) {
        List<ProductItemDto> items = this.productItemService.findProductItemsByProductId(productId);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(items == null ? "Not exist any Product Items" : "Get Product Item Successful!");
        responseDataDto.setData(items);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    @Operation(
            description = "Return Product Items",
            summary = "Get Product Items By Product Id Handle When OnClick",
            responses = @ApiResponse(
                    responseCode = "200",
                    description = "Successfully retrieved",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = ResponseDataDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    " \"status\": \"SUCCESSFUL\",\n" +
                                                    " \"code\": 200,\n" +
                                                    " \"message\": \"Get Product Items Successful!\",\n" +
                                                    " \"data\": {\n" +
                                                    " \"options\": [\n" +
                                                    " {\n" +
                                                    " \"option\": \"Size\",\n" +
                                                    " \"images\": [],\n" +
                                                    " \"values\": [\n" +
                                                    " \"L\",\n" +
                                                    " \"M\",\n" +
                                                    " \"S\"\n" +
                                                    " ]\n" +
                                                    " },\n" +
                                                    " {\n" +
                                                    " \"option\": \"Color\",\n" +
                                                    " \"images\": [\n" +
                                                    " [\n" +
                                                    " {\n" +
                                                    " \"url\": \"https://ecommerce.com/images/product/R1.jpg\",\n" +
                                                    " \"type\": \"IMAGE\"\n" +
                                                    " }\n" +
                                                    " ],\n" +
                                                    " [\n" +
                                                    " {\n" +
                                                    " \"url\": \"https://ecommerce.com/images/product/W1.jpg\",\n" +
                                                    " \"type\": \"IMAGE\"\n" +
                                                    " }\n" +
                                                    " ],\n" +
                                                    " [\n" +
                                                    " {\n" +
                                                    " \"url\": \"https://ecommerce.com/images/product/B1.jpg\",\n" +
                                                    " \"type\": \"IMAGE\"\n" +
                                                    " },\n" +
                                                    " {\n" +
                                                    " \"url\": \"https://ecommerce.com/images/product/B7.jpg\",\n" +
                                                    " \"type\": \"IMAGE\"\n" +
                                                    " },\n" +
                                                    " {\n" +
                                                    " \"url\": \"https://ecommerce.com/images/product/B6.jpg\",\n" +
                                                    " \"type\": \"IMAGE\"\n" +
                                                    " }\n" +
                                                    " ]\n" +
                                                    " ],\n" +
                                                    " \"values\": [\n" +
                                                    " \"Red\",\n" +
                                                    " \"White\",\n" +
                                                    " \"Black\"\n" +
                                                    " ]\n" +
                                                    " }\n" +
                                                    " ],\n" +
                                                    " \"productItems\": [\n" +
                                                    " {\n" +
                                                    " \"id\": 1,\n" +
                                                    " \"productId\": 1,\n" +
                                                    " \"price\": 200000.00,\n" +
                                                    " \"quantity\": 5,\n" +
                                                    " \"optionValueIndex\": [\n" +
                                                    " 2,\n" +
                                                    " 2\n" +
                                                    " ]\n" +
                                                    " },\n" +
                                                    " {\n" +
                                                    " \"id\": 2,\n" +
                                                    " \"productId\": 1,\n" +
                                                    " \"price\": 199000.00,\n" +
                                                    " \"quantity\": 13,\n" +
                                                    " \"optionValueIndex\": [\n" +
                                                    " 2,\n" +
                                                    " 1\n" +
                                                    " ]\n" +
                                                    " },\n" +
                                                    " {\n" +
                                                    " \"id\": 3,\n" +
                                                    " \"productId\": 1,\n" +
                                                    " \"price\": 170000.00,\n" +
                                                    " \"quantity\": 146,\n" +
                                                    " \"optionValueIndex\": [\n" +
                                                    " 2,\n" +
                                                    " 0\n" +
                                                    " ]\n" +
                                                    " },\n" +
                                                    " {\n" +
                                                    " \"id\": 8,\n" +
                                                    " \"productId\": 1,\n" +
                                                    " \"price\": 20000.00,\n" +
                                                    " \"quantity\": 100,\n" +
                                                    " \"optionValueIndex\": [\n" +
                                                    " 1,\n" +
                                                    " 2\n" +
                                                    " ]\n" +
                                                    " },\n" +
                                                    " {\n" +
                                                    " \"id\": 9,\n" +
                                                    " \"productId\": 1,\n" +
                                                    " \"price\": 199000.00,\n" +
                                                    " \"quantity\": 14,\n" +
                                                    " \"optionValueIndex\": [\n" +
                                                    " 1,\n" +
                                                    " 1\n" +
                                                    " ]\n" +
                                                    " },\n" +
                                                    " {\n" +
                                                    " \"id\": 10,\n" +
                                                    " \"productId\": 1,\n" +
                                                    " \"price\": 200000.00,\n" +
                                                    " \"quantity\": 15,\n" +
                                                    " \"optionValueIndex\": [\n" +
                                                    " 1,\n" +
                                                    " 0\n" +
                                                    " ]\n" +
                                                    " },\n" +
                                                    " {\n" +
                                                    " \"id\": 11,\n" +
                                                    " \"productId\": 1,\n" +
                                                    " \"price\": 170000.00,\n" +
                                                    " \"quantity\": 16,\n" +
                                                    " \"optionValueIndex\": [\n" +
                                                    " 0,\n" +
                                                    " 2\n" +
                                                    " ]\n" +
                                                    " },\n" +
                                                    " {\n" +
                                                    " \"id\": 12,\n" +
                                                    " \"productId\": 1,\n" +
                                                    " \"price\": 250000.00,\n" +
                                                    " \"quantity\": 17,\n" +
                                                    " \"optionValueIndex\": [\n" +
                                                    " 0,\n" +
                                                    " 1\n" +
                                                    " ]\n" +
                                                    " },\n" +
                                                    " {\n" +
                                                    " \"id\": 13,\n" +
                                                    " \"productId\": 1,\n" +
                                                    " \"price\": 100000.00,\n" +
                                                    " \"quantity\": 18,\n" +
                                                    " \"optionValueIndex\": [\n" +
                                                    " 0,\n" +
                                                    " 0\n" +
                                                    " ]\n" +
                                                    " }\n" +
                                                    " ],\n" +
                                                    " \"createdDate\": \"2023-07-20T16:09:25+07:00\",\n" +
                                                    " \"updatedDate\": null\n" +
                                                    " }\n" +
                                                    "}"
                                    )
                            }
                    )
            ),
            parameters = @Parameter(name = "id", description = "Id of Product", example = "1")
    )
    @GetMapping("/product-items/{id}")
    public ResponseEntity<ResponseDataDto> getProduct(@PathVariable("id") Long id) {
        ProductItemsResDto items = this.productService.getProduct(id);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(items == null ? "Not exist any Product Items" : "Get Product Items Successful!");
        responseDataDto.setData(items);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles Get Exactly Product Option Detail by product Id and by productOptionDetail Id
     *
     * @param productId             This is an ID of exist product.
     * @param productOptionDetailId This is an ID of product option detail
     * @return Information Product Option Detail and its Visuals
     */
    @Operation(
            description = "Return Product Option Details",
            summary = "Get Product Option Detail By Product Option Id",
            responses = @ApiResponse(responseCode = "200", description = "Successfully retrieved",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ResponseDataDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    " \"Status\": \"SUCCESSFUL\",\n" +
                                                    " \"code\": 200,\n" +
                                                    " \"message\": \"Get Product Option Detail Successful!\",\n" +
                                                    " \"data\": {\n" +
                                                    "  \"data\": {\n" +
                                                    "    \"id\": 1,\n" +
                                                    "    \"productOptionId\": 1,\n" +
                                                    "    \"value\": \"S\",\n" +
                                                    "    \"createdAt\": null,\n" +
                                                    "    \"updatedAt\": null,\n" +
                                                    "    \"productId\": 1,\n" +
                                                    "    \"listProductOptionDetailVisuals\": []\n" +
                                                    "  },\n" +
                                                    " \"status\": \"SUCCESSFUL\",\n" +
                                                    " \"code\": 200,\n" +
                                                    " \"message\": \"Get Product Option Detail Successful!\"\n" +
                                                    " }\n" +
                                                    "}"
                                    )
                            }
                    )
            ),
            parameters = {@Parameter(name = "productId", description = "Id of Product", example = "1"),
                    @Parameter(name = "productOptionDetailId", description = "Product Option Detail Id", example = "1")
            }
    )
    @GetMapping(path = "/product-option-detail/{productId}/{productOptionDetailId}")
    public ResponseEntity<ResponseDataDto> findProductOptionByIdAndByProductId(@PathVariable Long productId, @PathVariable Long productOptionDetailId) {
        ProductOptionDetailDto findProductOptionDetail = this.productOptionDetailService.findProductOptionDetailByIdAndByProductId(productId, productOptionDetailId);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(findProductOptionDetail == null ? "Not exist Product Option Detail" : "Get Product Option Detail Successful!");
        responseDataDto.setData(findProductOptionDetail);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles Get Product Detail field on Page Product by product ID
     *
     * @param productId This is an ID of exist product.
     * @return All Product Detail information
     */
    @Operation(
            description = "Return Product Detail",
            summary = "Get Product Detail By Product Id",
            responses = @ApiResponse(
                    responseCode = "200",
                    description = "Successfully retrieved",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = ResponseDataDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    " \"data\": [\n" +
                                                    "    {\n" +
                                                    "        \"id\": 1,\n" +
                                                    "        \"productId\": 1,\n" +
                                                    "        \"key\": \"Detail 1 for Product 1\",\n" +
                                                    "        \"value\": null,\n" +
                                                    "        \"createdAt\": null,\n" +
                                                    "        \"updatedAt\": null\n" +
                                                    "    },\n" +
                                                    "    {\n" +
                                                    "        \"id\": 2,\n" +
                                                    "        \"productId\": 1,\n" +
                                                    "        \"key\": \"Detail 2 for Product 1\",\n" +
                                                    "        \"value\": null,\n" +
                                                    "        \"createdAt\": null,\n" +
                                                    "        \"updatedAt\": null\n" +
                                                    "    }\n" +
                                                    " ],\n" +
                                                    " \"status\": \"SUCCESSFUL\",\n" +
                                                    " \"code\": 200,\n" +
                                                    " \"message\": \"Get Product Detail Successful!\"\n" +
                                                    "}"
                                    )
                            }
                    )
            ),
            parameters = @Parameter(name = "productId", description = "Id of Product", example = "1")
    )
    @GetMapping("/detail/{productId}")
    public ResponseEntity<ResponseDataDto> getProductDetailByProductId(@PathVariable("productId") Long productId) {
        List<ProductDetailDto> details = this.productDetailService.getProductDetailByIdProduct(productId);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(details == null ? "Not exist Product Detail" : "Get Product Detail Successful!");
        responseDataDto.setData(details);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles Get Product Description field on Page Product by product Id
     *
     * @param productId This is an ID of exist product.
     * @return All Product Description information
     */
    @Operation(
            description = "Return Product Descriptions",
            summary = "Get Product Description By Product Id",
            responses = @ApiResponse(
                    responseCode = "200",
                    description = "Successfully retrieved",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = ResponseDataDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    " \"data\": [\n" +
                                                    "    {\n" +
                                                    "        \"productId\": 1,\n" +
                                                    "        \"description\": \"Product Description 1 for Product 1\",\n" +
                                                    "        \"listMedia\": [\n" +
                                                    "            {\n" +
                                                    "                \"id\": 2,\n" +
                                                    "                \"type\": \"IMAGE\",\n" +
                                                    "                \"url\": \"https://ecommerce.com/images/product/R1.jpg\",\n" +
                                                    "                \"createdAt\": null,\n" +
                                                    "                \"updatedAt\": null\n" +
                                                    "            },\n" +
                                                    "            {\n" +
                                                    "                \"id\": 1,\n" +
                                                    "                \"type\": \"IMAGE\",\n" +
                                                    "                \"url\": \"https://ecommerce.com/images/product/R1.jpg\",\n" +
                                                    "                \"createdAt\": null,\n" +
                                                    "                \"updatedAt\": null\n" +
                                                    "            }\n" +
                                                    "        ]\n" +
                                                    "    },\n" +
                                                    "    {\n" +
                                                    "        \"productId\": 1,\n" +
                                                    "        \"description\": \"Product Description 2 for Product 1\",\n" +
                                                    "        \"listMedia\": [\n" +
                                                    "            {\n" +
                                                    "                \"id\": 4,\n" +
                                                    "                \"type\": \"IMAGE\",\n" +
                                                    "                \"url\": \"https://ecommerce.com/images/product/R1.jpg\",\n" +
                                                    "                \"createdAt\": null,\n" +
                                                    "                \"updatedAt\": null\n" +
                                                    "            },\n" +
                                                    "            {\n" +
                                                    "                \"id\": 3,\n" +
                                                    "                \"type\": \"IMAGE\",\n" +
                                                    "                \"url\": \"https://ecommerce.com/images/product/R1.jpg\",\n" +
                                                    "                \"createdAt\": null,\n" +
                                                    "                \"updatedAt\": null\n" +
                                                    "            }\n" +
                                                    "        ]\n" +
                                                    "    }\n" +
                                                    " ],\n" +
                                                    " \"status\": \"SUCCESSFUL\",\n" +
                                                    " \"code\": 200,\n" +
                                                    " \"message\": \"Get Product Description Successful!\"\n" +
                                                    "}"
                                    )
                            }
                    )
            ),
            parameters = @Parameter(name = "productId", description = "Id of Product", example = "1")
    )
    @GetMapping(path = "/description/{productId}")
    public ResponseEntity<ResponseDataDto> findProductDescriptionByProductId(@PathVariable("productId") Long productId) {
        List<ProductDescriptionDto> descriptions = this.productDescriptionService.findProductDescriptionByProductId(productId);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(descriptions == null ? "Not exist Product Description" : "Get Product Description Successful!");
        responseDataDto.setData(descriptions);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    @GetMapping(path="products-category/{categoryId}")
    @ResponseBody
    public ResponseDataDto getListProductByCategory(
            @PathVariable short categoryId,
            @RequestParam(value = "perPage", defaultValue = "8") int perPage,
            @RequestParam(value = "currentPage", defaultValue = "1") int currentPage){
        ProductListDto pageProductRes = this.productService.getAllProductByCategory(categoryId,perPage, currentPage-1);

        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus("Success");
        responseDataDto.setCode(200);
        responseDataDto.setMessage("Get list product successfully");
        responseDataDto.setData(pageProductRes);
        return responseDataDto;


    }
}
