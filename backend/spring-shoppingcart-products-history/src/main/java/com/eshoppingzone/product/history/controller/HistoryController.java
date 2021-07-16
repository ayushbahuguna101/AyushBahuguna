package com.eshoppingzone.product.history.controller;
import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.eshoppingzone.product.history.model.History;
import com.eshoppingzone.product.history.repository.HistoryRepository;

@RestController
@CrossOrigin(origins = "*")
public class HistoryController {
	@Autowired
	private HistoryRepository repository;
	
	
	
	
	@PostMapping("/addhistory")
	public History saveHistory(@RequestBody History history) {
		int id=history.getProductid();
//		String path=("product"+id+".jpg");
//		history.setFile(path);
		repository.save(history);
		return history;
		
	}
	
	@GetMapping("/gethistory/{username}")
	public List<History> getHistory(@PathVariable String username){
		return repository.findByUsername(username);
	}
	
	@DeleteMapping("/deletehistory/{id}")
	public String deleteHistoryProducts(@PathVariable String id) {
		repository.deleteById(id);
		return "Product deleted";
	}
}
