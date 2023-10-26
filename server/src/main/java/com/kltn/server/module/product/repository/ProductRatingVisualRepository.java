package com.kltn.server.module.product.repository;

import com.kltn.server.common.entity.ProductRatingVisual;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRatingVisualRepository extends JpaRepository<ProductRatingVisual, Long> {

}
