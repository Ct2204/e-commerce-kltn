package com.kltn.server.module.order.dto;


import com.kltn.server.common.vo.OrderStatusE;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data

@NoArgsConstructor
public class OrderProductDto {



        private Long productItemId;
        private Integer quantity;
        private String title; // Title của ProductItem
        private String url; // URL của ProductItem
        private OrderStatusE status;
        private String price;





        public OrderProductDto(Long productItemId,Integer quantity, String title,String url,OrderStatusE status,String price) {

            this.productItemId = productItemId;
            this.url = url;
            this.title = title;
            this.quantity = quantity;
            this.status = status;
            this.price = price;
        }
}
