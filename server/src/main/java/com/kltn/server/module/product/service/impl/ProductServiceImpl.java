package com.kltn.server.module.product.service.impl;

import com.kltn.server.common.entity.*;
import com.kltn.server.common.exception.ResourceNotFoundException;
import com.kltn.server.common.vo.ProductStatusType;
import com.kltn.server.module.product.converter.ProductConverter;
import com.kltn.server.module.product.dto.*;
import com.kltn.server.module.product.repository.ProductCategoryRepository;
import com.kltn.server.module.product.repository.ProductRatingRepository;
import com.kltn.server.module.product.repository.ProductRepository;
import com.kltn.server.module.product.service.ProductService;
import com.kltn.server.module.seller.converter.ProductDtoConverter;
import com.kltn.server.module.seller.dto.PageProductResDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductConverter productConverter;

    @Autowired
    private ProductDtoConverter productDtoConverter;

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    @Autowired
    private ProductRatingRepository productRatingRepository;

    /**
     * *
     * Find All Product Information of a Product By Product id
     *
     * @param productId This is id of product.
     * @return All Information of product and all product Visual
     */
    public ProductDto findProductByProductId(Long productId) {

        Optional<Product> product = this.productRepository.findById(productId);

        if (product.isEmpty()) {
            return null;
        }

        if (product.get().getStatus() == ProductStatusType.DRAFT
                || product.get().getStatus() == ProductStatusType.RECYCLE
                || product.get().getStatus() == ProductStatusType.DELETED) {
            return null;
        }
        return this.productConverter.toDto(product.get());
    }

    /**
     * *
     * Find All Product on page and Pagination
     *
     * @return List of Product with List Image and Video into each Product and
     *         StarRating for each Product
     */
    public ProductListDto findPageProduct(
            int perPage, int currentPage) {

        Pageable paging = PageRequest.of(currentPage, perPage);

        Page<Product> pageListEntity = this.productRepository.findListProduct(paging);

        return pageListEntity.getTotalElements() > 0
                ? new ProductListDto(
                        pageListEntity.getTotalPages(),
                        pageListEntity.getTotalElements(),
                        pageListEntity.getSize(),
                        pageListEntity.getNumberOfElements(),
                        pageListEntity.getNumber() + 1,
                        pageListEntity.isFirst(),
                        pageListEntity.isLast(),
                        pageListEntity.getContent().stream()
                                .map((item) -> {
                                    ProductDto dto = this.productConverter.toDto(item);
                                    return dto;
                                })
                                .collect(Collectors.toList()))
                : null;
    }


    /**
     * Handle get a list of option and product item.
     *
     * @param id This is ID of the product.
     * @return ProductItemsResDto contains list of option and product item.
     * @throws ResourceNotFoundException if the ID of the product not found.
     */
    public ProductItemsResDto getProduct(Long id) {
        Product product = this.productRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product with id " + id + " not found!"));

        if (!isAvailable(product)) {
            throw new ResourceNotFoundException("Product with id " + id + " not found!");
        }

        ProductItemsResDto productDto = new ProductItemsResDto();
        List<ProductOption> listOption = product.getProductOptions();
        List<ProductItem> listProductItem = product.getProductItems();
        Map<Long, Integer> map = new HashMap<>();
        int n = listOption.size();
        List<ProductOptionsDto> listOptionDto = new ArrayList<>();
        List<List<ProductOptionDetailImageDto>> images = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            // 3 or 2 Option
            // List of option detail
            ProductOptionsDto option = new ProductOptionsDto();
            option.setOption(listOption.get(i).getOption());
            List<String> listValue = new ArrayList<>();
            List<ProductOptionDetail> listOptionDetail = listOption.get(i).getProductOptionDetails();
            List<ProductOptionDetailImageDto> imageVisuals = new ArrayList<>();
            for (int j = 0; j < listOptionDetail.size(); j++) {
                // Key id option detail, value : index of optiondetail
                map.put(listOptionDetail.get(j).getId(), j);
                listValue.add(listOptionDetail.get(j).getValue());
                if (listOptionDetail.get(j).getProductVisuals().size() > 0) {
                    imageVisuals = listOptionDetail
                            .get(j)
                            .getProductVisuals()
                            .stream()
                            .map(v -> toDto(v))
                            .collect(Collectors.toList());
                    images.add(imageVisuals);
                }
                if (images.size() > 0) {
                    option.setImages(images);
                }
                option.setValues(listValue);
            }

            listOptionDto.add(option);
        }
        productDto.setOptions(listOptionDto);

        List<ProductItemsDto> listItemDto = new ArrayList<>();
        listProductItem.forEach(p -> System.out.println(p.getId()));
        listProductItem = listProductItem.stream().sorted(Comparator.comparing(ProductItem::getId))
                .collect(Collectors.toList());
        listProductItem.forEach(p -> System.out.println(p.getId()));
        for (ProductItem item : listProductItem) {
            ProductItemsDto dto = new ProductItemsDto();
            dto.setId(item.getId());
            dto.setProductId(item.getProduct().getId());
            dto.setPrice(item.getPrice());
            dto.setQuantity(item.getQuantity());
            List<Integer> list = new ArrayList<>();
            List<ProductItemDetail> listItemDetail = new ArrayList<>();
            listItemDetail = item.getProductItemDetails().stream()
                    .sorted(Comparator.comparing(ProductItemDetail::getId)).collect(Collectors.toList());
            for (ProductItemDetail itemDetail : listItemDetail) {
                list.add(map.get(itemDetail.getProductOptionDetail().getId()));
            }
            dto.setOptionValueIndex(list);
            listItemDto.add(dto);
        }
        productDto.setProductItems(listItemDto);
        return productDto;
    }

    @Override
    public ProductListDto getAllProductByCategory(Short categoryId, int perPage, int currentPage) {
        Pageable paging = PageRequest.of(currentPage, perPage);

//        ProductCategory productCategory = productCategoryRepository
//                .findById(categoryId)
//                .orElseThrow(()-> new ResourceNotFoundException("CategoryID not found"));

        Page<Product> pageListEntity = productRepository.findAllByCategory(categoryId,paging);

        return pageListEntity.getTotalElements() > 0
                ? new ProductListDto(
                pageListEntity.getTotalPages(),
                pageListEntity.getTotalElements(),
                pageListEntity.getSize(),
                pageListEntity.getNumberOfElements(),
                pageListEntity.getNumber() + 1,
                pageListEntity.isFirst(),
                pageListEntity.isLast(),
                pageListEntity.getContent().stream()
                        .map((item) -> {
                            ProductDto dto = this.productConverter.toDto(item);
                            return dto;
                        })
                        .collect(Collectors.toList()))
                : null;
    }

    public ProductOptionDetailImageDto toDto(ProductVisual entity) {
        ProductOptionDetailImageDto dto = new ProductOptionDetailImageDto();
        dto.setType(entity.getType());
        dto.setUrl(entity.getUrl());
        return dto;
    }

    /**
     * Check Product Status.
     *
     * @param product This is a product need to be checked.
     * @return true if product is available.
     */
    public boolean isAvailable(Product product) {
        if ((product.getStatus() == ProductStatusType.DRAFT) ||
                (product.getStatus() == ProductStatusType.RECYCLE) ||
                (product.getStatus() == ProductStatusType.DELETED)) {
            return false;
        }
        return true;
    }
}
