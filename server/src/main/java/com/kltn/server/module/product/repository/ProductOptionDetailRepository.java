package com.kltn.server.module.product.repository;

import com.kltn.server.common.entity.ProductOptionDetail;
import com.kltn.server.common.vo.ProductStatusType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProductOptionDetailRepository extends JpaRepository<ProductOptionDetail, Long> {

    @Query("SELECT pod FROM ProductOptionDetail pod " +
            "JOIN pod.product p " +
            "WHERE p.id = :productId AND pod.id = :productOptionDetailId AND p.status NOT IN (:status)")
    ProductOptionDetail findProductOptionDetailByProductId(@Param("productId") Long productId,
            @Param("productOptionDetailId") Long productOptionDetailId,
            @Param("status") List<ProductStatusType> status);

    @Query(value = "SELECT * from product_option_detail where product_option_id = :id order by id", nativeQuery = true)
    List<ProductOptionDetail> getAllByProductIdInAscOrder(@Param("id") Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM product_option_detail p WHERE product_id = :id", nativeQuery = true)
    void deleteAllByProductId(@Param("id") Long id);
}
