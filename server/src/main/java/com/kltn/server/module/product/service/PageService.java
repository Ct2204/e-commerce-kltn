package com.kltn.server.module.product.service;

import com.kltn.server.module.product.dto.ProductSearchByCategoryPageResDto;
import com.kltn.server.module.product.dto.ProductSearchPageDto;

public interface PageService {

    ProductSearchPageDto pageableListResultSearch(String keyword, int pageNumber, int size);

    ProductSearchByCategoryPageResDto pageListProductWithCategory(short parent_id, int pageNumber, int size);
}
