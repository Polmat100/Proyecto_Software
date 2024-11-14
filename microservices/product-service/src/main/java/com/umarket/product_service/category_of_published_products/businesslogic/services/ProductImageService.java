package com.umarket.product_service.category_of_published_products.businesslogic.services;

import com.umarket.product_service.category_of_published_products.businesslogic.models.ProductImage;
import com.umarket.product_service.category_of_published_products.dataaccess.ProductImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductImageService {

    @Autowired
    private ProductImageRepository productImageRepository;

    public List<ProductImage> getAllImages(){
        return productImageRepository.findAll();
    }

    public Optional<ProductImage> getImageById(Integer id){
        return productImageRepository.findById(id);
    }

    public ProductImage addImage(ProductImage image){
        return productImageRepository.save(image);
    }
    public void deleteImageById(Integer id){
        productImageRepository.deleteById(id);
    }
}

