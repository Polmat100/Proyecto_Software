package com.umarket.product_service.category_of_published_products.businesslogic.dto;

import com.umarket.product_service.category_of_published_products.businesslogic.models.Product;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private Integer id;
    private String name;
    private String description;
    private BigDecimal price;
    private Product.ProductStatus status;
    private CategoryDTO category;
    private List<String> imageUrls;

}
