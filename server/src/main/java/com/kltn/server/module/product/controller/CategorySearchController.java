package com.kltn.server.module.product.controller;

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
public class CategorySearchController {

    @Autowired
    private PageService pageService;

    /**
     * Api get result search product by category and response a paginated list product
     *
     * @param parent_id  -> this is the keyword which you have to enter to search the products you want to find
     * @param pageNumber -> this is the current page
     * @param size       -> number of element in one page
     * @return: a PageResponse containing the necessary information that the client needs including a list of products, total products...
     */
    @Operation(
            description = " when you enter a parent_id you will get a list subcategories and all product of this category including product of its subcategories ",
            summary = "Search product by category  ",
            parameters = {
                    @Parameter(name = "parent_id", description = " this is id of category from which you want to get its subcategories and products", example = "1", required = true),
                    @Parameter(name = "pageNumber", description = "this is the current page", example = "1", required = true),
                    @Parameter(name = "size", description = "number of element in one page", example = "5", required = true)
            },
            responses = {
                    @ApiResponse(responseCode = "200", description = "Returns a PageResponse containing the necessary information that the client needs including a list of products, total products...",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class), examples = {
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
                                                            "],\n" +
                                                            "\"listChildCate\":\n" +
                                                            "[\n" +
                                                            "{\n" +
                                                            "\"id\": 2,\n" +
                                                            "\"title\": \"T-Shirt\",\n" +
                                                            "\"slug\": \"t-shirt\",\n" +
                                                            "\"description\": null,\n" +
                                                            "\"parent_id\": 1,\n" +
                                                            "\"status\": 1,\n" +
                                                            "\"createAt\": null,\n" +
                                                            "\"updateAt\": null\n" +
                                                            "},\n" +
                                                            "{\n" +
                                                            "\"id\": 2,\n" +
                                                            "\"title\": \"T-Shirt\",\n" +
                                                            "\"slug\": \"t-shirt\",\n" +
                                                            "\"description\": null,\n" +
                                                            "\"parent_id\": 1,\n" +
                                                            "\"status\": 1,\n" +
                                                            "\"createAt\": null,\n" +
                                                            "\"updateAt\": null\n" +
                                                            "}\n" +
                                                            "]" +
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

    @GetMapping("/category-search")
    public ResponseEntity<ResponseDataDto> categorySearchResult(
            @RequestParam("parent_id") short parent_id,
            @RequestParam(value = "pageNumber", defaultValue = "1") int pageNumber,
            @RequestHeader(value = "size", defaultValue = "3") int size
    ) {

        ResponseDataDto responseDto = new ResponseDataDto();
        responseDto.setCode(200);
        responseDto.setStatus("ok");
        responseDto.setMessage("Get list product find by text successfully");
        responseDto.setData(this.pageService.pageListProductWithCategory(parent_id, pageNumber, size));
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }
}
