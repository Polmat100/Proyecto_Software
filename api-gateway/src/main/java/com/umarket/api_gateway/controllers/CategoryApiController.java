package com.umarket.api_gateway.controllers;

import com.umarket.api_gateway.models.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "${allowed.origins}")
@RestController
@RequestMapping("/api/categories")
public class CategoryApiController {
    private final RestTemplate restTemplate;

    @Value("${product-service.url}")
    private String productServiceUrl;

    public CategoryApiController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping
    public List<Category> getAllCategories() {
        String url = productServiceUrl + "/api/categories";
        ResponseEntity<Category[]> response = restTemplate.getForEntity(url, Category[].class);
        return Arrays.asList(response.getBody());
    }

}
