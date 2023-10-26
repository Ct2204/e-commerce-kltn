package com.kltn.server.module.product.repository;

import com.kltn.server.common.entity.Product;
import com.kltn.server.common.entity.ProductRating;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRatingRepository extends JpaRepository<ProductRating, Long> {

    Page<ProductRating> findByProduct(Product product, Pageable pageable);

    @Query("select count(*) from ProductRating where product.id= :productId")
    long countAllRatingByProductId(@Param("productId") Long productId);

    @Query("SELECT SUM(starRating) from ProductRating where product.id= :productId")
    long sumStarOfProduct(@Param("productId") Long productId);
}
