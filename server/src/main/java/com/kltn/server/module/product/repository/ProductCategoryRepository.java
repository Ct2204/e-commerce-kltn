package com.kltn.server.module.product.repository;


import com.kltn.server.common.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {

    List<ProductCategory> findByParentId(short parent_id);


    Optional<ProductCategory> findById(Short categoryId);
}
