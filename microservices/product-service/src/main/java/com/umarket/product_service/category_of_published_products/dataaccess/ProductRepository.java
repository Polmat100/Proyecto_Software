package com.umarket.product_service.category_of_published_products.dataaccess;

import com.umarket.product_service.category_of_published_products.businesslogic.models.Category;
import com.umarket.product_service.category_of_published_products.businesslogic.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    // find products by category
    List<Product> findByCategory(Category category);

    // find products by name ignoring upper and lower case
    List<Product> findByNameContainingIgnoreCase(String name);

    @Query("SELECT p FROM Product p LEFT JOIN FETCH p.images LEFT JOIN FETCH p.category")
    List<Product> findAllWithImages();

}
