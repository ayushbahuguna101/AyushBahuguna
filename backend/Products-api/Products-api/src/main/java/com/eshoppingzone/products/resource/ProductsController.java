package com.eshoppingzone.products.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eshoppingzone.products.model.Products;
import com.eshoppingzone.products.repository.ProductsRepository;
import com.eshoppingzone.products.service.ProductsService;

@RestController
@CrossOrigin(origins = "*")
public class ProductsController {
	 @Autowired	
	 private ProductsService productService;
	 
	 @Autowired 
	 private MongoOperations mongoOperations;
	 
	 @Autowired
	 private ProductsRepository repository;
	 @GetMapping("/allproducts")
	    public ResponseEntity<List<Products>>  getProduct() {
	        List<Products> products = productService. getProduct();
	        return new ResponseEntity<>(products, HttpStatus.OK);
	    }
	 
	 	@GetMapping("/getproduct/{id}")
		public Optional<Products> getSingleProduct(@PathVariable String id){
	 		id = id.replace("%20", " ");
			return repository.findById(id);
		}
	 
	    @PostMapping("/addproduct")
	    public ResponseEntity<Products> saveProduct(@RequestBody Products product) {
	    	 Products p = productService.saveProduct(product);
	        return new ResponseEntity<>(p, HttpStatus.CREATED);
	    }
	 
	    @PutMapping("/updateproduct")
	    public ResponseEntity<Products> updateProductt(@RequestBody Products product) {
	        Products p = productService.updateProduct(product);
	        return new ResponseEntity<>(p, HttpStatus.CREATED);
	    }
	 
	    @DeleteMapping("/deleteproduct/{productsName}")
	    public ResponseEntity<String> deleteProduct(@PathVariable String productsName) {
	    	productsName = productsName.replace("%20", " ");
	        String message = productService.deleteProduct(productsName);
	        return new ResponseEntity<>(message, HttpStatus.OK);
	    }
	    

	    @GetMapping("/category/{category}")
	    public ResponseEntity<List<Products>>  getbyCategory(@PathVariable String category) {
	        List<Products> products = productService. getbyCategory(category);
	        return new ResponseEntity<>(products, HttpStatus.OK);
	    }
	    
	    
	    @GetMapping("/searchproduct/{key}")
		public List<Products> searchProduct(@PathVariable String key)
		{
			Query query =new Query();
			query.addCriteria(Criteria.where("productsName").regex(key));
			
			List<Products> products = mongoOperations.find(query, Products.class);
			return products;
			
		}
}
