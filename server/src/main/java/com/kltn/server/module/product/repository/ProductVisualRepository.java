package com.kltn.server.module.product.repository;

import com.kltn.server.common.entity.ProductVisual;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProductVisualRepository extends JpaRepository<ProductVisual, Long> {

    @Query(value = "SELECT * from product_visual where product_option_detail_id = :id order by id", nativeQuery = true)
    List<ProductVisual> getAllByProductOptionDetailIdInAscOrder(@Param("id") Long id);

    @Transactional
    @Modifying
    @Query("DELETE FROM ProductVisual p WHERE p.product.id = :id and p.productOptionDetail IS NOT NULL")
    void deleteAllByProductId(@Param("id") Long id);
}
