package com.kltn.server.module.product.repository;

import com.kltn.server.common.entity.ProductDetail;
import com.kltn.server.common.vo.ProductStatusType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProductDetailRepository extends JpaRepository<ProductDetail, Long> {

    @Query("SELECT pd FROM ProductDetail pd " +
            "JOIN pd.product p " +
            "WHERE p.id = :productId AND p.status NOT IN (:status)")
    List<ProductDetail> findProductDetailByProduct(@Param("productId") Long productId,
            @Param("status") List<ProductStatusType> status);

    @Query(value = "SELECT * from product_detail where product_id = :id order by id", nativeQuery = true)
    List<ProductDetail> getAllByProductIdInAscOrder(@Param("id") Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM product_detail WHERE product_id = :id", nativeQuery = true)
    void deleteAllByProductId(@Param("id") Long id);
}
