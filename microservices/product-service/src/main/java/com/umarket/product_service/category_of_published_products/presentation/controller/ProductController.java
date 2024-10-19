package com.umarket.product_service.category_of_published_products.presentation.controller;

import com.umarket.product_service.category_of_published_products.businesslogic.models.Product;
import com.umarket.product_service.category_of_published_products.dataaccess.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // Obtener todos los productos
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Obtener productos de la categoría 'Deportes'
    @GetMapping("/deporte")
    public List<Product> getSportsProducts() {
        return productRepository.findByCategory("Deportes");
    }

    // Obtener un producto por ID
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productRepository.findById(id)
                .map(product -> ResponseEntity.ok().body(product))
                .orElse(ResponseEntity.notFound().build());
    }

    // Crear un nuevo producto
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // Actualizar un producto
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        return productRepository.findById(id).map(product -> {
            product.setName(productDetails.getName());
            product.setDescription(productDetails.getDescription());
            product.setCategory(productDetails.getCategory());
            product.setBrand(productDetails.getBrand());
            product.setPrice(productDetails.getPrice());
            product.setImageUrl(productDetails.getImageUrl());
            Product updatedProduct = productRepository.save(product);
            return ResponseEntity.ok(updatedProduct);
        }).orElse(ResponseEntity.notFound().build());
    }

    // Eliminar un producto
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        return productRepository.findById(id).map(product -> {
            productRepository.delete(product);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
