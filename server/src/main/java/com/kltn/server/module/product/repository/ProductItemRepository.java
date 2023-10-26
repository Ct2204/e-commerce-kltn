package com.kltn.server.module.product.repository;

import com.kltn.server.common.entity.ProductItem;
import com.kltn.server.common.vo.ProductStatusType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProductItemRepository extends JpaRepository<ProductItem, Long> {

    @Query("SELECT pi FROM ProductItem pi " +
            "JOIN pi.product p " +
            "WHERE p.id = :productId " +
            "AND p.status NOT IN (:status)")
    List<ProductItem> findAllItemsByProductId(
            @Param("productId") Long productId,
            @Param("status") List<ProductStatusType> status);

    @Query(value = "SELECT * from product_items where product_id = :id and status = true order by id", nativeQuery = true)
    List<ProductItem> getAllByProductIdInAscOrder(@Param("id") Long id);

    @Query("SELECT p FROM ProductItem p WHERE p.id IN (:ids) and p.product.id = :productId")
    List<ProductItem> getAllByListIds(@Param("ids") List<Long> ids, @Param("productId") Long productId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE product_items pi " +
            "SET status = false " +
            "WHERE id NOT IN :ids " +
            "AND product_id = :productId " +
            "AND status = true", nativeQuery = true)
    void updateProductItemByStatus(@Param("ids") List<Long> ids, @Param("productId") Long productId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE product_items pi " +
            "SET status = false " +
            "WHERE product_id = :productId " +
            "AND status = true", nativeQuery = true)
    void updateAllProductItemByStatus(@Param("productId") Long productId);

    @Query("SELECT sum(p.quantity) FROM ProductItem p WHERE  p.product.id = :productId")
    Long getQuantityProduct(@Param("productId") Long productId);
}
