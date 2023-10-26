package com.kltn.server.module.product.converter;

import com.kltn.server.common.entity.ProductRating;
import com.kltn.server.module.product.dto.ProductRatingReqDto;
import com.kltn.server.module.product.dto.ProductRatingResDto;
import com.kltn.server.module.product.dto.ProductRatingVisualDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProductRatingConverter {

    @Autowired
    private ProductRatingVisualConverter productRatingVisualConverter;

    /**
     * Convert ProductRatingDto to ProductRating
     *
     * @param dto ProductRatingReqDto
     * @return ProductRating
     */
    public ProductRating toEntity(ProductRatingReqDto dto) {
        ProductRating entity = new ProductRating();
        entity.setStarRating(dto.getStarRating());
        entity.setComment(dto.getComment());
        return entity;
    }

    /**
     * Convert ProductRating to ProductRatingDto
     *
     * @param entity ProductRating
     * @return ProductRatingResDto
     */
    public ProductRatingResDto toDto(ProductRating entity) {
        ProductRatingResDto dto = new ProductRatingResDto();
        dto.setId(entity.getId());
        dto.setComment(entity.getComment());
        dto.setStarRating(entity.getStarRating());
        dto.setProductId(entity.getProduct().getId());
        dto.setUserId(entity.getUser().getId());

        if (entity.getUser().getUserProfile() != null) {
            dto.setFullName(entity.getUser().getUserProfile().getFullName());
            dto.setAvatarUrl(entity.getUser().getUserProfile().getProfilePicture());
        }
        List<ProductRatingVisualDto> listMedia = entity.getProductRatingVisuals()
                .stream()
                .map(e -> this.productRatingVisualConverter.toDto(e))
                .collect(Collectors.toList());

        dto.setListMedia(listMedia);
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());
        return dto;
    }
}
