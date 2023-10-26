package com.kltn.server.module.product.repository;

import com.kltn.server.common.entity.ProductDescription;
import com.kltn.server.common.vo.ProductStatusType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProductDescriptionRepository extends JpaRepository<ProductDescription, Long> {

    @Query("SELECT pd FROM ProductDescription pd JOIN pd.product p " +
            "WHERE p.id = :productId " +
            "AND p.status NOT IN (:status)")
    List<ProductDescription> findByProduct(@Param("productId") Long productId,
            @Param("status") List<ProductStatusType> status);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM product_description WHERE product_id = :id", nativeQuery = true)
    void deleteAllByProductId(@Param("id") Long id);
}
