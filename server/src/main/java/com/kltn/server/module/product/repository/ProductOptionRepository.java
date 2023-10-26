package com.kltn.server.module.product.repository;

import com.kltn.server.common.entity.ProductOption;
import com.kltn.server.common.vo.ProductStatusType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProductOptionRepository extends JpaRepository<ProductOption, Long> {

    @Query("SELECT po FROM ProductOption po " +
            "JOIN po.product p " +
            "WHERE p.id = :productId " +
            "AND p.status NOT IN (:status)")
    List<ProductOption> findProductOptionByProductId(@Param("productId") Long productId,
            @Param("status") List<ProductStatusType> status);

    @Query(value = "SELECT * from product_options where product_id = :id order by id", nativeQuery = true)
    List<ProductOption> getAllByProductIdInAscOrder(@Param("id") Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM product_options p WHERE product_id = :id", nativeQuery = true)
    void deleteAllByProductId(@Param("id") Long id);
}
