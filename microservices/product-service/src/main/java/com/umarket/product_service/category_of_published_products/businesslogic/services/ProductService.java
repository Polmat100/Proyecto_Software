package com.umarket.product_service.category_of_published_products.businesslogic.services;

import com.umarket.product_service.category_of_published_products.businesslogic.dto.ProductSearchDTO;
import com.umarket.product_service.category_of_published_products.businesslogic.models.Product;
import com.umarket.product_service.category_of_published_products.dataaccess.CategoryRepository;
import com.umarket.product_service.category_of_published_products.dataaccess.ProductRepository;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    //Get products
    public List<Product> getAllProducts() {
        return productRepository.findAllWithImages();
    }

    //Search product
    public List<ProductSearchDTO> searchProductsByName(String name) {
        List<Product> products = productRepository.findByNameContainingIgnoreCase(name);
        return products.stream()
                .map(product -> new ProductSearchDTO(
                        product.getId(),
                        product.getName()
                ))
                .collect(Collectors.toList());
    }

    //Add product
    public Product createProduct(Product product){
        return productRepository.save(product);
    }

    //Edit product
    public Product updateProduct(Integer id, Product updateProduct){
        return productRepository.findById(id).map(
                existingProduct  -> {
                    existingProduct.setName(updateProduct.getName());
                    existingProduct.setDescription(updateProduct.getDescription());
                    existingProduct.setPrice(updateProduct.getPrice());
                    existingProduct.setStatus(updateProduct.getStatus());
                    existingProduct.setCategory(updateProduct.getCategory());
                    return productRepository.save(existingProduct);
                }).orElseThrow(()  -> new RuntimeException("Product not found with id " + id) );
    }

    //Delete products
    public void deleteProduct(Integer id){
        if(productRepository.existsById(id)){
            productRepository.deleteById(id);
        }else {
            throw new RuntimeException("Product not found whit id : "+ id);
        }
    }


}


