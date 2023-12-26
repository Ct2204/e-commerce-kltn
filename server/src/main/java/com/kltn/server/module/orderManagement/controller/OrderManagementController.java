
package com.kltn.server.module.orderManagement.controller;

import com.kltn.server.common.dto.ResponseDto;
import com.kltn.server.common.vo.OrderStatusE;

import com.kltn.server.module.orderManagement.dto.OrderManagementDto;
import com.kltn.server.module.orderManagement.service.OrderManagementService;
import com.kltn.server.module.product.dto.ResponseDataDto;
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
@RequestMapping({"/api/v1/seller/order"})


public class OrderManagementController {

    @Autowired
    private OrderManagementService orderService;


    /**
     * *
     * This method handles get all order of user.
     *
     * @param id this is ID of the user
     * @return A list of order .
     */


    @GetMapping({"/by-user/{id}"})
    public ResponseEntity<ResponseDataDto> getOrderByUserId(@PathVariable("id") Long id) {
        List<OrderManagementDto> items = this.orderService.getAllOrderByUserId(id);
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
        List<OrderManagementDto> items = this.orderService.getOrderByStatus(status);
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



    @GetMapping({"/by-order/{id}"})
    public ResponseEntity<ResponseDataDto> getOrderById(@ PathVariable("id") Long id) {
        OrderManagementDto items = this.orderService.getOrderById(id);
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





}
