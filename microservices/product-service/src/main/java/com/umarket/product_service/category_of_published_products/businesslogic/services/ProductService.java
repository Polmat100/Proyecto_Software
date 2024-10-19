package com.umarket.product_service.category_of_published_products.businesslogic.services;

import com.umarket.product_service.category_of_published_products.businesslogic.models.Product;
import com.umarket.product_service.category_of_published_products.dataaccess.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }
}
