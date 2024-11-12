package com.umarket.product_service.category_of_published_products.presentation.controller;

import com.umarket.product_service.category_of_published_products.businesslogic.models.ProductImage;
import com.umarket.product_service.category_of_published_products.businesslogic.services.ProductImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/api/product_images")
public class ProductImageController {

    @Autowired
    private ProductImageService productImageService;

    @GetMapping
    public ResponseEntity<List<ProductImage>> getAllImages(){
        List<ProductImage> images = productImageService.getAllImages();
        return ResponseEntity.ok(images);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductImage> getImageById(@PathVariable Integer id) {
        return productImageService.getImageById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
