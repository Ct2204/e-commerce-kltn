package com.kltn.server.module.product.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ProductRatingReqDto {

    @Schema(description ="This is id of product ", example = "4")
    @NotNull(message = "Product id must not be null")
    private Long productId;

    @Schema(description ="This is the quantity you want to change for the product (1-5)", example = "4")
    @Min(value = 1, message = "Star must be >=1")
    @Max(value = 5, message = "Star must be <=5")
    @NotNull(message = "Start rating must not be null")
    private Short starRating;

    @Schema(description ="This is your comment about product", example = "Hàng đẹp, đúng mẫu, vải hơi mỏng")
    private String comment;

    @Schema(description = "This is a list of images (maximum 5 images), and video (maximum 1 video) that the user wants to include a rating")
    private List<MultipartFile> listMedia = new ArrayList<>();
}
