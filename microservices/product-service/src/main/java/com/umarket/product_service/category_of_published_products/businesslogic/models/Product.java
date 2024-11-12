package com.umarket.product_service.category_of_published_products.businesslogic.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity //Marca la clase como una entidad JPA, lo que significa que se mapeará a una tabla en la base de datos.
@Table(name = "product")
@Getter
@Setter
public class Product {
    @Id //PRINCIPAL KEY
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Specifies that the id value is generated automatically, using an identity strategy that allows the database to handle the generation of IDs.
    @Column(name = "product_id")
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Enumerated(EnumType.STRING) //Store the value of the status enumeration in a text string in the DB (instead of a numeric index)
    @Column(name = "status", nullable = false)
    private ProductStatus status = ProductStatus.AVAILABLE; //Initializes the state to Available by default

    @Column(name = "posted_at", updatable = false)
    private LocalDateTime postedAt;

    @ManyToOne //We define the many-to-one relationship, where many products can be related to a single category
    @JoinColumn(name = "category_id")
    private Category category;

    //CONSTRUCTORS
    //DEFAULT CONTRUCTORS
    public Product() {
        this.postedAt = LocalDateTime.now(); //It is the only attribute that needs an automatic value at the time of object creation
    }

    public Product(String name, String description, BigDecimal price, Category category) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.status = ProductStatus.AVAILABLE; //Default value
        this.postedAt = LocalDateTime.now(); //Default value
    }

    //ENUM FOR PRODUCT STATUS
    enum ProductStatus {
        AVAILABLE,
        SOLD
    }
}
