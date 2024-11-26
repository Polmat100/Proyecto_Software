package com.umarket.api_gateway.feignclients;

import com.umarket.api_gateway.models.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "product-service", url = "http://localhost:8081")
public interface ProductClient {
    @GetMapping("/api/products")
    List<Product> getAllProducts();

    @PostMapping("/api/products")
    Product createProduct(@RequestBody Product product);

    @PutMapping("/api/products/{id}")
    Product updateProduct(@PathVariable Integer id, @RequestBody Product product);

    @DeleteMapping("/api/products/{id}")
    void deleteProduct(@PathVariable Integer id);

    @GetMapping("/api/products/search")
    List<Product> searchProducts(@RequestParam String name);
}
