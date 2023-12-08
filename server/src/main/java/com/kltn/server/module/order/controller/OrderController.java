package com.kltn.server.module.order.controller;

import com.kltn.server.common.dto.ResponseDto;
import com.kltn.server.common.vo.OrderStatusE;
import com.kltn.server.module.order.dto.CreateOrderRequestDto;
import com.kltn.server.module.order.dto.OrderDetailDto;
import com.kltn.server.module.order.dto.OrderDto;
import com.kltn.server.module.order.service.OrderDetailService;
import com.kltn.server.module.order.service.OrderService;
import com.kltn.server.module.product.dto.ResponseDataDto;
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

import java.util.List;

@RestController
@CrossOrigin({"*"})
@RequestMapping({"/api/v1/order"})
@Tag(name = "order")

public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrderDetailService orderDetailService;

    /**
     * *
     * This method handles get all order of user.
     *
     * @param id this is ID of the user
     * @return A list of order .
     */

    @Operation(description = "Returns all order of User have UserId", summary = "Get  order by UserId",

            responses = @ApiResponse(responseCode = "200", description = "Successfully retrieved", content = @Content(mediaType = "application/json", schema = @Schema(implementation = ResponseDataDto.class),

                    examples = {
                            @ExampleObject(name = "Example 1", value = "{\n" +
                                    "  \"code\": 200,\n" +
                                    "  \"Status\": \"SUCCESSFUL\",\n" +
                                    "  \"message\": \"Get order Successfully!\",\n" +
                                    "  \"data\": {\n" +
                                    "    \"orderId\": 1,\n" +
                                    "    \"status\": \"PENDING\",\n" +
                                    "    \"total price\": 100.50\n" +
                                    "  }\n" +
                                    "}")
                    })),

            parameters = @Parameter(name = "id", description = "User id", example = "1"))

    @GetMapping({"/by-user/{id}"})
    public ResponseEntity<ResponseDataDto> getOrderByUserId(@PathVariable("id") Long id) {
        List<OrderDto> items = this.orderService.getAllOrderByUserId(id);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(items == null ? "Not exist any Order of user " + id : "Get order Successfully!");
        responseDataDto.setData(items);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles get all order with status.
     *
     * @param status this is status of the order
     * @return A list of order .
     */

    @Operation(description = "Returns all order with status", summary = "Get  order by status",

            responses = @ApiResponse(responseCode = "200", description = "Successfully retrieved", content = @Content(mediaType = "application/json", schema = @Schema(implementation = ResponseDataDto.class),

                    examples = {
                            @ExampleObject(name = "Example ", value = "{\n" +
                                    "  \"code\": 200,\n" +
                                    "  \"Status\": \"SUCCESSFUL\",\n" +
                                    "  \"message\": \"Get order Successfully!\",\n" +
                                    "  \"data\": {\n" +
                                    "    \"orderId\": 1,\n" +
                                    "    \"status\": \"PENDING\",\n" +
                                    "    \"total price\": 100.50\n" +
                                    "  }\n" +
                                    "}")
                    })),

            parameters = @Parameter(name = "status", description = "status", example = "PENDING"))

    @GetMapping({"/by-status/{status}"})
    public ResponseEntity<ResponseDataDto> getOrderByStatus(@PathVariable("status") OrderStatusE status) {
        List<OrderDto> items = this.orderService.getOrderByStatus(status);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(items == null ? "Not exist any Order with " + status : "Get order Successfully!");
        responseDataDto.setData(items);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles get order by OrderID.
     *
     * @param id this is ID of the order
     * @return An order
     */
    @Operation(description = "Returns an order with id", summary = "Get  order by id",

            responses = @ApiResponse(responseCode = "200", description = "Successfully retrieved", content = @Content(mediaType = "application/json", schema = @Schema(implementation = ResponseDataDto.class),

                    examples = {
                            @ExampleObject(name = "Example ", value = "{\n" +
                                    "  \"code\": 200,\n" +
                                    "  \"Status\": \"SUCCESSFUL\",\n" +
                                    "  \"message\": \"Get order Successfully!\",\n" +
                                    "  \"data\": {\n" +
                                    "    \"orderId\": 1,\n" +
                                    "    \"status\": \"PENDING\",\n" +
                                    "    \"total price\": 100.50\n" +
                                    "  }\n" +
                                    "}")
                    })),

            parameters = @Parameter(name = "id", description = "order id", example = "1"))
    @GetMapping({"/by-order/{id}"})
    public ResponseEntity<ResponseDataDto> getOrderById(@ PathVariable("id") Long id) {
        OrderDto items = this.orderService.getOrderById(id);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage(items == null ? "Not exist any Order with " + id : "Get order Successfully!");
        responseDataDto.setData(items);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }

    /**
     * *
     * This method handles update Status of order.
     *
     * @param id          this is ID of the order
     * @param orderStatus this is a status of order
     * @return A message
     */
    @PatchMapping({"/update-order/{id}"})
    public ResponseEntity<ResponseDto> updateStatusOrder(@PathVariable Long id, @RequestBody OrderStatusE orderStatus) {
        this.orderService.updateStatusOrder(id, orderStatus);
        ResponseDto responseDto = new ResponseDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(201);
        responseDto.setMessage("Change Status order successfully!");
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    /**
     * *
     * This method handles create order.
     *
     * @param createOrderRequestDto this is all information need to create order
     * @return A message
     */
    @Operation(description = "Create an order with cartItemId and useId", summary = "Create an order ", responses = {
            @ApiResponse(responseCode = "201", description = "Successfully retrieved", content = @Content(mediaType = "application/json", schema = @Schema(implementation = ResponseDto.class),

                    examples = {
                            @ExampleObject(name = "Example ", value = "{\n" +
                                    "  \"code\": 201,\n" +
                                    "  \"Status\": \"SUCCESSFUL\",\n" +
                                    "  \"message\": \"order Successfully\"\n" +
                                    "}")
                    })),
            @ApiResponse(responseCode = "404", description = "Fail if CartItem invalid", content = @Content(mediaType = "application/json", schema = @Schema(implementation = ResponseDto.class),

                    examples = {
                            @ExampleObject(name = "Example ", value = "{\n" +
                                    "  \"code\": 404,\n" +
                                    "  \"Status\": \"CLIENT_ERROR\",\n" +
                                    "  \"message\": \"CartItem with 1 invalid please check\"\n" +
                                    "}")
                    })),

            @ApiResponse(responseCode = "409", description = "Fail if CartItem  and userId not match", content = @Content(mediaType = "application/json", schema = @Schema(implementation = ResponseDto.class),

                    examples = {
                            @ExampleObject(name = "Example ", value = "{\n" +
                                    "  \"code\": 409,\n" +
                                    "  \"Status\": \"CLIENT_ERROR\",\n" +
                                    "  \"message\": \"CartItem And User not map\"\n" +
                                    "}")
                    }))
    }, requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateOrderRequestDto.class), examples = {
            @ExampleObject(name = "Example ", value = "{\n" +
                    "  \"cartItemId\": \"[1,2]\",\n" +
                    "  \"userId\": \"1\"\n" +
                    "}")
    }))

    )
    @PostMapping({"/create-order"})
    public ResponseEntity<ResponseDataDto> createOrder(@RequestBody CreateOrderRequestDto createOrderRequestDto) {


        ResponseDataDto responseDto = new ResponseDataDto();
        responseDto.setStatus(HttpStatus.OK.series().name());
        responseDto.setCode(201);
        responseDto.setMessage(" order successfully!");
        responseDto.setData((this.orderService.saveOrder(createOrderRequestDto)));
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    /**
     * *
     * This method handles create order.
     *
     * @param id this is ID of the orderDetail
     * @return A List Order Detail
     */
    @GetMapping({"/get-order-detail-by-order/{id}"})
    ResponseEntity<ResponseDataDto> getOrderDetailByOrderId(@PathVariable Long id) {

        List<OrderDetailDto> orderDetail = this.orderDetailService.getOrderDetailByOrderId(id);
        ResponseDataDto responseDataDto = new ResponseDataDto();
        responseDataDto.setStatus(HttpStatus.OK.series().name());
        responseDataDto.setCode(HttpStatus.OK.value());
        responseDataDto.setMessage("Get order detail Successfully!");
        responseDataDto.setData(orderDetail);
        return ResponseEntity.status(HttpStatus.OK).body(responseDataDto);
    }
}
