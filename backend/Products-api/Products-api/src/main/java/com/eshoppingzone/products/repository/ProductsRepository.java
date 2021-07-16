package com.eshoppingzone.products.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.eshoppingzone.products.model.Products;

public interface ProductsRepository extends MongoRepository<Products, String> {

	public List<Products> findByCategory(String category);
		
}
