package com.umarket.product_service.category_of_published_products.dataaccess;

import com.umarket.product_service.category_of_published_products.businesslogic.models.Category;
import com.umarket.product_service.category_of_published_products.businesslogic.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    //Buscar productos por la categoría
    List<Product> findByCategory(Category category);
    //Buscar por nombre que contenga IgnoreCase
    List<Product> findByNameContainingIgnoreCase(String name);
}
