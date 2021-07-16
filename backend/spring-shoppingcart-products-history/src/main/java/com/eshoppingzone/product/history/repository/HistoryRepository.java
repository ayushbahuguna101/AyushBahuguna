package com.eshoppingzone.product.history.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.eshoppingzone.product.history.model.History;

public interface HistoryRepository extends MongoRepository<History,String> {
	
	public List<History> findByUsername(String username);

}
