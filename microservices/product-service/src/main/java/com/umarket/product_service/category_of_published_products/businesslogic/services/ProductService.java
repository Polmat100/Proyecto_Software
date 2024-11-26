package com.umarket.product_service.category_of_published_products.businesslogic.services;

import com.umarket.product_service.category_of_published_products.businesslogic.dto.CategoryDTO;
import com.umarket.product_service.category_of_published_products.businesslogic.dto.ProductDTO;
import com.umarket.product_service.category_of_published_products.businesslogic.models.Category;
import com.umarket.product_service.category_of_published_products.businesslogic.models.Product;
import com.umarket.product_service.category_of_published_products.businesslogic.models.ProductImage;
import com.umarket.product_service.category_of_published_products.dataaccess.CategoryRepository;
import com.umarket.product_service.category_of_published_products.dataaccess.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    //Methods
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<ProductDTO> getAllProductWithImages(){
        return productRepository.findAllWithImages().stream().map(product -> {
            List<String> imagesUrls = product.getImages().stream()
                    .map(ProductImage::getImageUrl).toList();

            CategoryDTO categoryDTO = null;
            if (product.getCategory() != null) {
                categoryDTO = new CategoryDTO(
                        product.getCategory().getId(),
                        product.getCategory().getName(),
                        product.getCategory().getDescription()
                );
            }

            return new ProductDTO(
                    product.getId(),
                    product.getName(),
                    product.getDescription(),
                    product.getPrice(),
                    product.getStatus(),
                    categoryDTO,
                    imagesUrls
            );

        }).toList();
    }

    public List<Product> getProductsByCategory(String categoryName) {
        Optional<Category> category=categoryRepository.findByName(categoryName);
        return category.map(productRepository::findByCategory).orElseGet(List::of);
    }

    public List<Product> searchProductsByName(String name){
        //Search products ignoring upper or lower case
        return  productRepository.findByNameContainingIgnoreCase(name);
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


