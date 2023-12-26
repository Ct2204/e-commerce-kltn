
package com.kltn.server.module.orderManagement.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.List;

@lombok.Getter
@lombok.Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateOrderRequestManagementDto {

    private @NotNull(
            message = "cant null"
    ) List<Long> cartItemId;

    @NotNull(message = "cant null")
    private Long userId;
}
