package com.umarket.api_gateway.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api")
public class ProductGatewayController {

    @Autowired
    private RestTemplate restTemplate;

    private final String productServiceUrl = "http://localhost:8081/api/products";
    private final String categoryServiceUrl = "http://localhost:8081/api/categories";

    // get products
    @GetMapping("/products")
    public ResponseEntity<Object> getProducts(@RequestParam(required = false) String filter) {
        String url = UriComponentsBuilder.fromHttpUrl(productServiceUrl)
                .queryParam("filter", filter)
                .toUriString();

        return restTemplate.getForEntity(url, Object.class);
    }

    // search products
    @GetMapping("/products/search")
    public ResponseEntity<Object> searchProducts(@RequestParam String name) {
        String url = UriComponentsBuilder.fromHttpUrl(productServiceUrl + "/search")
                .queryParam("name", name)
                .toUriString();

        return restTemplate.getForEntity(url, Object.class);
    }

    // get categories
    @GetMapping("/categories")
    public ResponseEntity<Object> getCategories() {
        return restTemplate.exchange(categoryServiceUrl, HttpMethod.GET, null, Object.class);
    }
}