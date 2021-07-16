package com.eshoppingzone.userDetails.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eshoppingzone.userDetails.model.UserDetails;
import com.eshoppingzone.userDetails.repository.UserDetailsRepository;

@Service
public class UserDetailsService {
	
	@Autowired
		private UserDetailsRepository userDetailsRepository;
		
		public List<UserDetails> getAllUserDetails() {
			return userDetailsRepository.findAll();
		}
	
		public Optional<UserDetails> getUserDetails(String username) {
			return userDetailsRepository.findById(username);
		}
		
		public UserDetails saveUserDetails(UserDetails userDetails) {
			return userDetailsRepository.save(userDetails);
		}
		
		public UserDetails updateUserDetails(UserDetails userDetails) {
			return userDetailsRepository.save(userDetails);
		}
		
}
