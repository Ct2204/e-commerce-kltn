package com.kltn.server.module.cart.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.kltn.server.common.entity.CartItem;
import com.kltn.server.common.entity.ProductItem;
import com.kltn.server.common.entity.User;
import com.kltn.server.common.vo.CartItemStatusEnum;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    /**
     * Find a cart item entity in the database based on the user, product item, and
     * cart item status.
     *
     * @param user        The user entity.
     * @param productItem The product item entity.
     * @param statusEnum  The cart item status.
     * @return The Entity object matching the specified user, product item,
     *         and status, or null if not found.
     */
    CartItem findCartItemEntityByUserAndProductItemAndStatus(User user,
            ProductItem productItem,
            CartItemStatusEnum statusEnum);

    /**
     * Find a cart item entity in the database based on the user ID and cart item
     * ID.
     *
     * @param userID     The user ID.
     * @param cartItemId The cart item ID.
     * @return An optional containing the cart item entity if found, or empty if not
     *         found.
     */
    Optional<CartItem> findCartItemEntityByUserIdAndId(Long userID, Long cartItemId);

    @Query(value = "SELECT " +
            "DISTINCT ON (ci.id) ci.id, " +
            "pi.id, " +
            "case when pv.url is null and pv2.product_option_detail_id is null then pv2.url else pv.url end as url, " +
            "p.title, " +
            "pi.price, " +
            "ci.quantity, " +
            "pi.quantity " +
            "FROM users as u " +
            "INNER JOIN cart_items as ci ON u.id = ci.user_id " +
            "INNER JOIN product_items as pi ON ci.product_item_id = pi.id " +
            "INNER JOIN products as p ON pi.product_id = p.id " +
            "LEFT JOIN product_item_detail as pid ON pi.id = pid.product_item_id " +
            "LEFT JOIN product_option_detail as pod ON pid.product_option_detail_id = pod.id " +
            "LEFT JOIN (SELECT DISTINCT ON (product_option_detail_id) product_option_detail_id, url " +
            "      FROM product_visual as pvs WHERE pvs.type = 0) as pv ON pv.product_option_detail_id = pod.id " +
            "LEFT JOIN (SELECT DISTINCT ON (product_id) product_id, product_option_detail_id, url " +
            "      FROM product_visual as pvs WHERE pvs.type = 0) as pv2 ON pv2.product_id = p.id " +
            "WHERE u.id = ?1 AND ci.status = ?2", nativeQuery = true)
    List<Object[]> findCartItemByUserId(Long userId, int status);

    /**
     * Find cart items in the database based on the user ID, a set of cart item IDs,
     * and a cart item status.
     *
     * @param userId             The user ID.
     * @param cartItemIds        A set of cart item IDs.
     * @param cartItemStatusEnum The cart item status.
     * @return A list of CartItem objects matching the criteria.
     */
    @Query("SELECT c " +
            "FROM CartItem c " +
            "WHERE c.user.id = :userId " +
            "AND c.id IN (:id) " +
            "AND c.status = :status")
    List<CartItem> findCartItemByIds(@Param("userId") Long userId,
            @Param("id") List<Long> cartItemIds,
            @Param("status") CartItemStatusEnum cartItemStatusEnum);

    @Query("SELECT ci FROM CartItem ci   WHERE ci.user.id =:userId AND ci.id  IN  (:cartItemId) ")
    List<CartItem> GetCartItemSelected(Long userId, List<Long> cartItemId);
}
