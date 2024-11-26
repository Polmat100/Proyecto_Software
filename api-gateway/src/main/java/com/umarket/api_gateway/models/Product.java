package com.umarket.api_gateway.models;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class Product {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private String status;
    private Category category;
    private List<String> imageUrls;
}
