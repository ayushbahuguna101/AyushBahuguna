package com.eshoppingzone.userDetails.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.eshoppingzone.userDetails.model.UserDetails;
import com.eshoppingzone.userDetails.repository.UserDetailsRepository;
import com.eshoppingzone.userDetails.service.UserDetailsService;

@RestController
@CrossOrigin(origins = "*")
public class UserDetailsController {
	@Autowired	
	 private UserDetailsService userDetailsService;
	
	
	@Autowired
	private UserDetailsRepository userDetailsRepository;
	
	@GetMapping("/getAllUserDetails")
	public ResponseEntity<List<UserDetails>> getAllUserDetails() {
		List<UserDetails> userDetails = userDetailsService.getAllUserDetails();
		return new ResponseEntity<>(userDetails, HttpStatus.OK);
	}
	
	@GetMapping("/getUserDetails/{id}")
	public Optional<UserDetails> getUserDetails(@PathVariable String id) {
		return userDetailsRepository.findById(id);
	}
	
	@PostMapping("/saveUserDetails")
	public ResponseEntity<UserDetails> saveUserDetails(@RequestBody UserDetails userDetails) {
		UserDetails ud = userDetailsService.saveUserDetails(userDetails);
		return new ResponseEntity<>(ud, HttpStatus.CREATED);
	}
	
	@PutMapping("/updateUserDetails")
	public ResponseEntity<UserDetails> updateUserDetails(@RequestBody UserDetails userDetails) {
		UserDetails ud = userDetailsService.updateUserDetails(userDetails);
		return new ResponseEntity<>(ud, HttpStatus.CREATED);
	}

}
