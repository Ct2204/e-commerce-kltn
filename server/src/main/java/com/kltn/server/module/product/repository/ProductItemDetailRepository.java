package com.kltn.server.module.product.repository;

import com.kltn.server.common.entity.ProductItemDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProductItemDetailRepository extends JpaRepository<ProductItemDetail, Long> {

    @Query(value = "SELECT * from product_item_detail where product_item_id = :id order by id", nativeQuery = true)
    List<ProductItemDetail> getAllByProductItemId(@Param("id") Long id);

    @Transactional
    @Modifying
    @Query("DELETE FROM ProductItemDetail pid " +
            "WHERE pid.productItem IN (SELECT pi FROM ProductItem pi WHERE pi.product.id = :id)")
    void deleteAllByProductId(@Param("id") Long productId);
}
