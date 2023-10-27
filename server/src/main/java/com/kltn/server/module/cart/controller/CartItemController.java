package com.kltn.server.module.cart.controller;

import com.kltn.server.common.dto.ResponseDto;
import com.kltn.server.module.cart.dto.CartItemQuantityRequestDto;
import com.kltn.server.module.cart.dto.CartItemReqDto;
import com.kltn.server.module.cart.service.CartItemService;
import com.kltn.server.module.user.dto.ResponseDataDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/v1/cart-items")
@Tag(name = "carts")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @Operation(
            description = "The user has selected all the detail options and chosen to add them to the shopping cart.\n" +
                    "Some notes to consider:\n" +
                    "- The user must be in an active state to perform the operation; otherwise, " +
                    "the action will be restricted.\n" +
                    "- The quantity must be appropriate based on the available quantity of the product " +
                    "item in the inventory.\n" +
                    "- When a user adds a product to the shopping cart, if the product already exists in the cart, " +
                    "the quantities will be combined by adding the existing quantity to the newly added quantity.\n" +
                    "- If the product does not exist in the cart, it will be added to the shopping cart.",
            summary = "Add a product to the user's shopping cart",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = CartItemReqDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    "  \"userId\": 6,\n" +
                                                    "  \"quantity\": \"2\",\n" +
                                                    "  \"productItemId\": \"1\"\n" +
                                                    "}"
                                    )
                            }
                    )),
            responses = {
                    @ApiResponse(responseCode = "200", description = "Create new cart item successfully",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 1",
                                                    value = "{\n" +
                                                            "  \"status\": \"OK\",\n" +
                                                            "  \"code\": \"200\",\n" +
                                                            "  \"message\": \"Create new cart item successfully!\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "400", description = "Create new cart item successfully",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 2",
                                                    value = "{\n" +
                                                            "  \"status\": \"BAD_REQUEST\",\n" +
                                                            "  \"code\": \"400\",\n" +
                                                            "  \"message\": \"The given id must not be null!\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "403", description = "Unauthorized",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 3",
                                                    value = "{\n" +
                                                            "  \"status\": \"FORBIDDEN\",\n" +
                                                            "  \"code\": \"403\",\n" +
                                                            "  \"message\": \"Unauthorized!\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Resource not found!",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 4",
                                                    value = "{\n" +
                                                            "  \"status\": \"SC_NOT_FOUND\",\n" +
                                                            "  \"code\": \"404\",\n" +
                                                            "  \"message\": \"Resource not found!\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    )
            }
    )
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseDto> createNewCartItem(@Validated @RequestBody CartItemReqDto cartItemReqDto) {
        cartItemService.createNewCartItem(cartItemReqDto);
        ResponseDto response = new ResponseDto();
        response.setCode(HttpStatus.OK.value());
        response.setStatus(HttpStatus.OK.name());
        response.setMessage("Create new cart item successfully!");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @Operation(
            description = "Return all products currently in the user's shopping cart",
            summary = "Retrieve all cart items by user id",
            parameters = @Parameter(name = "userId", description = "User ID", example = "2"),
            responses = {
                    @ApiResponse(responseCode = "200", description = "Get all user's cart item successfully!",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDataDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 1",
                                                    value = "{\n" +
                                                            "  \"code\": 200,\n" +
                                                            "  \"Status\": \"OK\",\n" +
                                                            "  \"message\": \"Get all user's cart item successfully!\",\n" +
                                                            "  \"data\": [\n" +
                                                            "    {\n" +
                                                            "      \"cartItemId\": 1,\n" +
                                                            "      \"productItemId\": \"2\",\n" +
                                                            "      \"url\": \"https://ecommerce.com/images/product/R1.jpg\",\n" +
                                                            "      \"title\": 1,\n" +
                                                            "      \"price\": \"170000.00\",\n" +
                                                            "      \"quantity\": 11,\n" +
                                                            "      \"stockQuantity\": 150\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"cartItemId\": 10,\n" +
                                                            "      \"productItemId\": \"1\",\n" +
                                                            "      \"url\": \"https://ecommerce.com/images/product/R1.jpg\",\n" +
                                                            "      \"title\": 1,\n" +
                                                            "      \"price\": \"170000.00\",\n" +
                                                            "      \"quantity\": 11,\n" +
                                                            "      \"stockQuantity\": 150\n" +
                                                            "    },\n" +
                                                            "    {\n" +
                                                            "      \"cartItemId\": 12,\n" +
                                                            "      \"productItemId\": \"4\",\n" +
                                                            "      \"url\": \"https://ecommerce.com/images/product/R1.jpg\",\n" +
                                                            "      \"title\": 1,\n" +
                                                            "      \"price\": \"170000.00\",\n" +
                                                            "      \"quantity\": 11,\n" +
                                                            "      \"stockQuantity\": 150\n" +
                                                            "    }\n" +
                                                            "  ]\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "403", description = "Unauthorized",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 2",
                                                    value = "{\n" +
                                                            "  \"status\": \"FORBIDDEN\",\n" +
                                                            "  \"code\": \"403\",\n" +
                                                            "  \"message\": \"Unauthorized!\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Resource not found!",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 3",
                                                    value = "{\n" +
                                                            "  \"status\": \"SC_NOT_FOUND\",\n" +
                                                            "  \"code\": \"404\",\n" +
                                                            "  \"message\": \"Resource not found!\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    )
            }
    )
    @GetMapping(value = "/{userId}")
    public ResponseEntity<ResponseDataDto> getAllItemsByUserId(@PathVariable("userId") Long userId) {
        ResponseDataDto responseData = new ResponseDataDto();
        responseData.setStatus(HttpStatus.OK.name());
        responseData.setCode(HttpStatus.OK.value());
        responseData.setMessage("Get all user's cart item successfully!");
        responseData.setData(cartItemService.getAllCartItemsByUserId(userId));
        return ResponseEntity.status(HttpStatus.OK).body(responseData);
    }

    @Operation(
            description = "Update the quantity of each product in the user's shopping " +
                    "cart when the user modifies the quantity and then exits " +
                    "the page or adds new products to the cart. \n" +
                    "        When updating the quantity: \n" +
                    "        - if the updated quantity becomes a value less than 0, " +
                    "an error will be returned. \n" +
                    "        - If the updated quantity becomes 0, " +
                    "the product will be automatically removed from the user's shopping cart. \n" +
                    "        - If the updated quantity exceeds the inventory stock, " +
                    "an error will be returned immediately.",
            summary = "Add a product to the user's shopping cart",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = CartItemQuantityRequestDto.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Example",
                                            value = "{\n" +
                                                    "  \"cartItemList\": [\n" +
                                                    "    {\n" +
                                                    "      \"cartItemId\": 7,\n" +
                                                    "      \"quantity\": \"11\"\n" +
                                                    "    }\n" +
                                                    "  ]\n" +
                                                    "}"
                                    )
                            }
                    )),
            responses = {
                    @ApiResponse(responseCode = "200", description = "Create new cart item successfully",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 1",
                                                    value = "{\n" +
                                                            "  \"status\": \"OK\",\n" +
                                                            "  \"code\": \"200\",\n" +
                                                            "  \"message\": \"Update all user's cart item successfully!\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "403", description = "Unauthorized",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 2",
                                                    value = "{\n" +
                                                            "  \"status\": \"FORBIDDEN\",\n" +
                                                            "  \"code\": \"403\",\n" +
                                                            "  \"message\": \"Unauthorized!\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Resource not found!",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 3",
                                                    value = "{\n" +
                                                            "  \"status\": \"SC_NOT_FOUND\",\n" +
                                                            "  \"code\": \"404\",\n" +
                                                            "  \"message\": \"Resource not found!\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "500", description = "Exceeded inventory quantity!",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 4",
                                                    value = "{\n" +
                                                            "  \"status\": \"ERR_BAD_REQUEST\",\n" +
                                                            "  \"code\": \"500\",\n" +
                                                            "  \"message\": \"Exceeded inventory quantity!\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    )
            }
    )
    @PutMapping(value = "/update-all/{userId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseDto> updateCartItemList(
            @PathVariable("userId") Long userId,
            @Validated @RequestBody CartItemQuantityRequestDto cartItemQuantityRequestDtoList) {
        cartItemService.updateCartItems(userId, cartItemQuantityRequestDtoList);
        ResponseDto response = new ResponseDto();
        response.setStatus(HttpStatus.OK.name());
        response.setCode(HttpStatus.OK.value());
        response.setMessage("Update all user's cart item successfully!");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @Operation(
            description = "Perform deletion based on the cart item flag of the user when " +
                    "the user clicks the remove button to remove a product from the shopping cart.",
            parameters = {
                    @Parameter(name = "userId", description = "The ID of the user who is removing" +
                            " the product from the shopping cart", example = "2", required = true),
                    @Parameter(name = "cartItemId", description = "The ID of the product that the " +
                            "user is removing from the shopping cart", example = "10", required = true)
            },
            responses = {
                    @ApiResponse(responseCode = "200", description = "Get all user's cart item successfully!",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 1",
                                                    value = "{\n" +
                                                            "  \"status\": \"OK\",\n" +
                                                            "  \"code\": \"200\",\n" +
                                                            "  \"message\": \"Delete cart item successfully!\"\n" +
                                                            "}")
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "403", description = "Unauthorized",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 2",
                                                    value = "{\n" +
                                                            "  \"status\": \"FORBIDDEN\",\n" +
                                                            "  \"code\": \"403\",\n" +
                                                            "  \"message\": \"Unauthorized!\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    ),
                    @ApiResponse(responseCode = "404", description = "Resource not found!",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseDto.class),
                                    examples = {
                                            @ExampleObject(
                                                    name = "Example 3",
                                                    value = "{\n" +
                                                            "  \"status\": \"SC_NOT_FOUND\",\n" +
                                                            "  \"code\": \"404\",\n" +
                                                            "  \"message\": \"Resource not found!\"\n" +
                                                            "}"
                                            )
                                    }
                            )
                    )
            }
    )
    @DeleteMapping(value = "/{userId}/{cartItemId}")
    public ResponseEntity<ResponseDto> deleteCartItem(@PathVariable("userId") Long userId,
                                                      @PathVariable("cartItemId") Long cartItemId) {
        cartItemService.deleteCartItem(userId, cartItemId);
        ResponseDto response = new ResponseDto();
        response.setStatus(HttpStatus.OK.name());
        response.setCode(HttpStatus.OK.value());
        response.setMessage("Delete cart item successfully!");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
