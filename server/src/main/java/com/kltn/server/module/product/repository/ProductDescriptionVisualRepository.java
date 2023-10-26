package com.kltn.server.module.product.repository;

import com.kltn.server.common.entity.ProductDescriptionVisual;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProductDescriptionVisualRepository extends JpaRepository<ProductDescriptionVisual, Long> {

    @Query(value = "SELECT * from product_description_visual where product_id = :id order by id", nativeQuery = true)
    List<ProductDescriptionVisual> getAllByProductIdInAscOrder(@Param("id") Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM product_description_visual WHERE product_id = :id", nativeQuery = true)
    void deleteAllByProductId(@Param("id") Long id);
}
