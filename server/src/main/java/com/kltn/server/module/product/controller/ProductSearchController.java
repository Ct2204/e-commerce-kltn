package com.kltn.server.module.product.controller;

import com.kltn.server.module.product.dto.ProductSearchPageDto;
import com.kltn.server.module.product.dto.ResponseDataDto;
import com.kltn.server.module.product.service.PageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/product")
@Tag(name = "Products")
public class ProductSearchController {

    @Autowired
    private PageService pageService;

    /**
     * Api get result search product by text and response a paginated list product
     *
     * @param keyword->    this is the keyword which you have to enter to search the products you want to find
     * @param pageNumber-> this is the current page
     * @param size         -> number of element in one page
     * @return: returns a PageResponse containing the necessary information that the client needs including a list of products, total products...
     */
    @Operation(
            description = "when you enter a keyword, pageNumber, and size of the page you will get a paginated list product",
            summary = "get result search product by text and response a paginated list product",
            parameters = {
                    @Parameter(name = "keyword", description = "this is the keyword which you have to enter to search the products you want to find", example = "k", required = true),
                    @Parameter(name = "pageNumber", description = "this is the current page", example = "1", required = true),
                    @Parameter(name = "size", description = "number of element in one page", example = "5", required = true)
            },
            responses = {
                    @ApiResponse(responseCode = "200", description = "Returns a PageResponse containing the necessary information that the client needs including a list of products, total products...",
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
                                                                    " \"totalPages\": 2,\n" +
                                                                    " \"totalElements\": \"13\",\n" +
                                                                    " \"perPage\": 10,\n" +
                                                                    " \"numberOfElements\": 3,\n" +
                                                                    " \"currentPage\": 2,\n" +
                                                                    " \"first\": true,\n" +
                                                                    " \"last\": false,\n" +
                                                                    " \"listProduct\":[\n" +
                                                                    "{\n" +
                                                                    "\"id\": 1,\n" +
                                                                    "\"imageUrl\": \"https://ecommerce.com/images/product/B14.jpg\",\n" +
                                                                    "\"productTitle\": \"ZESICA Women's 2023 Sexy Boho Off Shoulder Puff Short Sleeve High Waist Ruffled Flowy A Line Beach Party Midi Dres\",\n" +
                                                                    "\"staring\": null,\n" +
                                                                    "\"price\": 600000054.55,\n" +
                                                                    "\"price_sale\": 500000.00\n" +
                                                                    "},\n" +
                                                                    "{\n" +
                                                                    " \"id\": 2,\n" +
                                                                    "\"imageUrl\": \"https://ecommerce.com/images/product/B14.jpg\",\n" +
                                                                    "\"productTitle\": \"ZESICA Women's 2023 Sexy Boho Off Shoulder Puff Short Sleeve High Waist Ruffled Flowy A Line Beach Party Midi Dres\",\n" +
                                                                    "\"staring\": null,\n" +
                                                                    "\"price\": 600000054.55,\n" +
                                                                    "\"price_sale\": 500000.00\n" +
                                                                    "},\n" +
                                                                    "{\n" +
                                                                    "\"id\": 3,\n" +
                                                                    "\"imageUrl\": \"https://ecommerce.com/images/product/B14.jpg\",\n" +
                                                                    "\"productTitle\": \"ZESICA Women's 2023 Sexy Boho Off Shoulder Puff Short Sleeve High Waist Ruffled Flowy A Line Beach Party Midi Dres\",\n" +
                                                                    "\"staring\": null,\n" +
                                                                    "\"price\": 600000054.55,\n" +
                                                                    "\"price_sale\": 500000.00\n" +
                                                                    "}\n" +
                                                                    "]\n" +
                                                                    "}" +
                                                                    "}"
                                            )
                                    }
                            )
                    ),

                    @ApiResponse(responseCode = "404", description = "Occurs when a user requests a page or resource that is unavailable on the web",
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
            }

    )

    @GetMapping("/search-product-by-text")
    public ResponseEntity<ResponseDataDto> GetPageResultSearchProductV2(
            @RequestParam("keyword") String keyword,
            @RequestParam(value = "pageNumber", defaultValue = "1") int pageNumber,
            @RequestHeader(value = "size", defaultValue = "3") int size) {

        ProductSearchPageDto pageResDTO = this.pageService.pageableListResultSearch(keyword, pageNumber, size);
        System.out.println(pageResDTO.getListProduct().size());
        if (pageResDTO.getListProduct().size() == 0) {
            ResponseDataDto responseDto = new ResponseDataDto();
            responseDto.setCode(200);
            responseDto.setStatus("ok");
            responseDto.setMessage("No matching products found");

            return ResponseEntity.status(HttpStatus.OK).body(responseDto);
        }

        ResponseDataDto responseDto = new ResponseDataDto();
        responseDto.setCode(200);
        responseDto.setStatus("ok");
        responseDto.setMessage("Find list product by text successfully");
        responseDto.setData(pageResDTO);
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }
}
