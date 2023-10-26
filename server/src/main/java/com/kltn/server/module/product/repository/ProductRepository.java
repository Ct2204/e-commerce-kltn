package com.kltn.server.module.product.repository;

import com.kltn.server.common.entity.Product;
import com.kltn.server.common.entity.Seller;
import com.kltn.server.common.vo.ProductStatusType;
import com.kltn.server.module.product.dto.ProductSearchResDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product" +
            " p WHERE p.id = :productId")
    Optional<Product> findByProduct(@Param("productId") Long productId);

    @Query(value = "SELECT * FROM products where status not in(3,4) order by id", nativeQuery = true)
    Page<Product> findListProduct(Pageable pageable);

    Optional<Product> findOneById(Long id);

    @Query("select new com.kltn.server.module.product.dto.ProductSearchResDto(p.id, MIN(i.url),p.title,  avg(r.starRating) ,p.price,p.priceSales ) "
            +
            "From Product p " +
            " left join ProductVisual i on p.id=i.product.id " +
            " left join ProductRating r on r.product.id = p.id " +
            "WHERE (( (p.title) ILIKE concat('%',:keyword, '%')) " +
            "or (unaccent(p.title) ILIKE concat('%',:keyword, '%'))) and p.status not in (:status) " +
            "GROUP BY p.id")
    Page<ProductSearchResDto> getPageResultSearch(@Param("keyword") String keyword,
            @Param("status") List<ProductStatusType> status,
            Pageable pageable);

    @Query(value = "WITH RECURSIVE product_categories_tree(id, title, parent_id) AS (" +
            " SELECT id, title, parent_id" +
            " FROM product_categories" +
            " WHERE id = :categoryId" +
            " UNION ALL" +
            " SELECT c.id, c.title, c.parent_id" +
            " FROM product_categories c" +
            " JOIN product_categories_tree ct ON ct.id = c.parent_id" +
            ")" +
            "SELECT p.*" +
            "FROM products p" +
            " JOIN product_categories c ON p.category_id = c.id " +
            "WHERE c.id IN (SELECT id FROM product_categories_tree)", countQuery = "SELECT COUNT(*) FROM products", nativeQuery = true)
    Page<Product> findProductsByCategoryId(@Param("categoryId") short categoryId, Pageable pageable);


    List<Product> findBySeller(Seller seller);

    Page<Product> findAllBySeller(Seller seller, Pageable pageable);
}
