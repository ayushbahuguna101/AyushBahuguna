package com.eshoppingzone.products.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eshoppingzone.products.model.Products;
import com.eshoppingzone.products.repository.ProductsRepository;

@Service
public class ProductsService {
	 @Autowired
	    private ProductsRepository productRepository;
	     
	    public List<Products> getProduct() {
	        return productRepository.findAll();
	    }
	     
	    public Products saveProduct(Products product) {
	        return productRepository.save(product);
	    }
	     
	    public Products updateProduct(Products product) {
	        return productRepository.save(product);
	    }
	     
	    public String deleteProduct(String productsName) {
	    	productRepository.deleteById(productsName);
	        return "Product: " + productsName + " deleted successfully";
	    }
	    
	    public List<Products> getbyCategory(String category){
	    	return productRepository.findByCategory(category);
	    }
}
