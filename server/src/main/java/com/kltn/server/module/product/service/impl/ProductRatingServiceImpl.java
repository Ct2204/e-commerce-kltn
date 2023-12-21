package com.kltn.server.module.product.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.kltn.server.common.entity.Product;
import com.kltn.server.common.entity.ProductRating;
import com.kltn.server.common.entity.ProductRatingVisual;
import com.kltn.server.common.entity.User;
import com.kltn.server.common.exception.ResourceNotFoundException;
import com.kltn.server.common.vo.ProductRatingVisualType;
import com.kltn.server.common.vo.ProductStatusType;
import com.kltn.server.module.product.converter.ProductRatingConverter;
import com.kltn.server.module.product.dto.PageRatingResDto;
import com.kltn.server.module.product.dto.ProductRatingReqDto;
import com.kltn.server.module.product.repository.ProductRatingRepository;
import com.kltn.server.module.product.repository.ProductRatingVisualRepository;
import com.kltn.server.module.product.repository.ProductRepository;
import com.kltn.server.module.product.service.ProductRatingService;
import com.kltn.server.module.product.service.StorageService;
import com.kltn.server.module.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ProductRatingServiceImpl implements ProductRatingService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductRatingRepository productRatingRepository;

    @Autowired
    private ProductRatingVisualRepository productRatingVisualRepository;

    @Autowired
    private ProductRatingConverter productRatingConverter;

    @Autowired
    private StorageService storageService;

    @Autowired
    private UserRepository userRepository;

    @Value("${image.dir.rating}")
    private String imageDirLocation;

    @Value("${video.dir.rating}")
    private String videoDirLocation;

    @Value("${kltn.domain}")
    private String domain;

    @Autowired
    private Cloudinary cloudinary;

    /**
     * Get all ProductRating with paginate by product id
     *
     * @param perPage     this is the number of elements per page .
     * @param productId   This is an ID of exist product.
     * @param currentPage This is current page.
     * @return list rating of page and paginate information.
     */
    @Override
    public PageRatingResDto findAllProductRatingByProductId(Long productId, int perPage, int currentPage)
            throws IllegalArgumentException {

        Pageable paging = PageRequest.of(currentPage,
                perPage, Sort.by("createdAt").descending());

        Product product = this.productRepository.findOneById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        if (!isAvailable(product)) {
            throw new ResourceNotFoundException("Product with id " + productId + " not found!");
        }
        Page<ProductRating> pageListEntity = this.productRatingRepository.findByProduct(product, paging);

        return pageListEntity.getTotalElements() > 0
                ? new PageRatingResDto(pageListEntity.getTotalPages(),
                        pageListEntity.getTotalElements(),
                        pageListEntity.getSize(),
                        pageListEntity.getNumberOfElements(),
                        pageListEntity.getNumber() + 1,
                        pageListEntity.isFirst(),
                        pageListEntity.isLast(),
                        productId,
                        // Calculate average number of stars and round 1 number after decimal point
                        ((float) Math.round((float) this.productRatingRepository.sumStarOfProduct(productId)
                                / pageListEntity.getTotalElements() * 10)) / 10,
                        pageListEntity.getContent().stream()
                                .map(item -> this.productRatingConverter.toDto(item))
                                .collect(Collectors.toList()))
                : null;
    }

    /**
     * Insert new rating for a product
     *
     * @param userId        This is id of current user.
     * @param productRating This is all information to insert new rating.
     * @throws IllegalArgumentException, ResourceNotFoundException
     */
    @Override
    @Transactional
    public void saveProductRating(Long userId, ProductRatingReqDto productRating) {

        List<MultipartFile> files = productRating.getListMedia();
        if (files.size() > 6) {
            throw new IllegalArgumentException("List media must be <= 6");
        }

        Product product = this.productRepository.findOneById(productRating.getProductId())
                .orElseThrow(() -> new ResourceNotFoundException("Product not found!"));
        if (!isAvailable(product)) {
            throw new ResourceNotFoundException("Product with id " + productRating.getProductId() + " not found!");
        }
        User user = this.userRepository.findOneById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        ProductRating saveProductRating = this.productRatingConverter.toEntity(productRating);
        saveProductRating.setProduct(product);
        saveProductRating.setUser(user);

        // Save rating
        this.productRatingRepository.save(saveProductRating);

        // Check if the rating has images and video, then save a list of them
        if (!files.isEmpty()) {

            for (MultipartFile file : files) {
                if (!this.storageService.isImageFile(file) && !this.storageService.isVideoFile(file)) {
                    throw new IllegalArgumentException("Only store image and video file");
                }
            }
            for (MultipartFile file : files) {

                ProductRatingVisual productRatingVisualEntity = new ProductRatingVisual();
                productRatingVisualEntity.setProduct(product);
                productRatingVisualEntity.setRating(saveProductRating);

                try {
                    // Upload file to Cloudinary
                    Map uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());

                    // Get the Cloudinary URL
                    String cloudinaryUrl = (String) uploadResult.get("url");

                    // Check the file type (image or video) and save it to the correct folder
                    if (this.storageService.isImageFile(file)) {
                        productRatingVisualEntity.setType((short) ProductRatingVisualType.IMAGE.ordinal());
                        productRatingVisualEntity.setUrl(cloudinaryUrl);
                    } else {
                        productRatingVisualEntity.setType((short) ProductRatingVisualType.VIDEO.ordinal());
                        productRatingVisualEntity.setUrl(cloudinaryUrl);
                    }

                    this.productRatingVisualRepository.save(productRatingVisualEntity);
                } catch (IOException e) {
                    e.printStackTrace(); // Handle the exception appropriately
                }

                // Check the file type (image or video) and save it to the correct folder
//                if (this.storageService.isImageFile(file)) {
//                    productRatingVisualEntity.setType((short) ProductRatingVisualType.IMAGE.ordinal());
//                    productRatingVisualEntity.setUrl(domain + "/images/rating/"
//                            + this.storageService.storeFile(file, Paths.get(imageDirLocation)));
//                } else {
//                    productRatingVisualEntity.setType((short) ProductRatingVisualType.VIDEO.ordinal());
//                    productRatingVisualEntity.setUrl(domain + "/videos/rating/"
//                            + this.storageService.storeFile(file, Paths.get(videoDirLocation)));
//                }

                //this.productRatingVisualRepository.save(productRatingVisualEntity);
            }
        }
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
