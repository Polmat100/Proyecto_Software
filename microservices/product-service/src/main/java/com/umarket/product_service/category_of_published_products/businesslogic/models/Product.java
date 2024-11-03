package com.umarket.product_service.category_of_published_products.businesslogic.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "product")
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private ProductStatus status = ProductStatus.AVAILABLE;

    @Column(name = "posted_at", updatable = false)
    private LocalDateTime postedAt;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(name = "image_url")
    private String imageUrl;

    //CONSTRUCTORS
    public Product() {
        this.postedAt = LocalDateTime.now();
    }

    public Product(String name, String description, Category category, String imageUrl, BigDecimal price) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.imageUrl = imageUrl;
        this.price = price;
        this.status = ProductStatus.AVAILABLE;
        this.postedAt = LocalDateTime.now();
    }

    //ENUM FOR PRODUCT STATUS
    enum ProductStatus {
        AVAILABLE,
        SOLD
    }
}
