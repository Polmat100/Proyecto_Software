package com.umarket.api_gateway.controllers;

import com.umarket.api_gateway.feignclients.ProductClient;
import com.umarket.api_gateway.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductClient productClient;

    @GetMapping
    public List<Product> getAllProducts() {
        return productClient.getAllProducts();
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productClient.createProduct(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Integer id, @RequestBody Product product) {
        return productClient.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Integer id) {
        productClient.deleteProduct(id);
    }

    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String name) {
        return productClient.searchProducts(name);
    }
}
