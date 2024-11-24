package com.umarket.product_service.category_of_published_products.presentation.controller;

import com.umarket.product_service.category_of_published_products.businesslogic.models.Product;
import com.umarket.product_service.category_of_published_products.businesslogic.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService; //Servicio que busca en la base de datos

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/category/{category}")
    public List<Product> getProductsByCategory(@PathVariable String category) {
        return productService.getProductsByCategory(category);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product){
        return productService.createProduct(product);
    }
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Integer id, @RequestBody Product product){
        return productService.updateProduct(id,product);
    }
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Integer id) {
        productService.deleteProduct(id);
    }


    /*@GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String name) {
        return productService.searchProductsByName(name);
    }*/
    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam(required = false) String name, @RequestParam(required = false) String category) {
        if (name != null && category != null) {
            return productService.searchByNameAndCategory(name, category);
        } else if (name != null) {
            return productService.searchProductsByName(name);
        } else if (category != null) {
            return productService.getProductsByCategory(category);
        } else {
            return productService.getAllProducts();
        }
    }


}