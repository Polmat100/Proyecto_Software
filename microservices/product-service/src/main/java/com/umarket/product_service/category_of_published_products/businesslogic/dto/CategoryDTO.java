package com.umarket.product_service.category_of_published_products.businesslogic.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO {
    private Integer id;
    private String name;
    private String description;
}
