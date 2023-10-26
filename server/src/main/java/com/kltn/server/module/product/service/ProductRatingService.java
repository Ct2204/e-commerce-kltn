package com.kltn.server.module.product.service;

import com.kltn.server.module.product.dto.PageRatingResDto;
import com.kltn.server.module.product.dto.ProductRatingReqDto;
import org.springframework.stereotype.Service;

@Service
public interface ProductRatingService {

    PageRatingResDto findAllProductRatingByProductId(Long productId, int perPage, int currentPage);

    void saveProductRating(Long userId, ProductRatingReqDto productRating);

}
