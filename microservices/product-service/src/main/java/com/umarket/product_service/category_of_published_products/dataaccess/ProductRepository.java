package com.umarket.product_service.category_of_published_products.dataaccess;

import com.umarket.product_service.category_of_published_products.businesslogic.models.Category;
import com.umarket.product_service.category_of_published_products.businesslogic.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    // Buscar productos por la categoría (con el objeto Category)
    List<Product> findByCategory(Category category);

    // Buscar por nombre (que contenga IgnoreCase)
    List<Product> findByNameContainingIgnoreCase(String name);

    /*// Buscar productos por nombre y categoría (puede ser útil si deseas una búsqueda más específica)*/
    List<Product> findByNameContainingIgnoreCaseAndCategory(String name, Category category);

}
