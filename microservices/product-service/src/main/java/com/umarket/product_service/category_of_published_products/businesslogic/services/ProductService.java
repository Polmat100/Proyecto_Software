package com.umarket.product_service.category_of_published_products.businesslogic.services;

import com.umarket.product_service.category_of_published_products.businesslogic.models.Category;
import com.umarket.product_service.category_of_published_products.businesslogic.models.Product;
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

    public List<Product> searchProductsByName(String name){
        //Busca productos que contengan la consulta de forma insensible a mayúsculas/minúsculas
        return  productRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Product> getProductsByCategory(String categoryName) {
        Optional<Category> category=categoryRepository.findByName(categoryName);
        /*if (category.isEmpty()) {
            throw new RuntimeException("Category not found with name: " + categoryName);
        }*/
        return category.map(productRepository::findByCategory).orElseGet(List::of);
        //return productRepository.findByCategory(category.get());
    }

    public List<Product> searchByNameAndCategory(String name, String categoryName) {
        Optional<Category> category = categoryRepository.findByName(categoryName);
        if (category.isPresent()) {
            return productRepository.findByNameContainingIgnoreCaseAndCategory(name, category.get());
        } else {
            return List.of(); // Retorna una lista vacía si la categoría no existe
        }
    }

    //Agregar productos
    public Product createProduct(Product product){
        return productRepository.save(product);
    }

    //Editar productos
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

    //Eliminar Productos
    public void deleteProduct(Integer id){
        if(productRepository.existsById(id)){
            productRepository.deleteById(id);
        }else {
            throw new RuntimeException("Product not found whit id : "+ id);
        }
    }


}


