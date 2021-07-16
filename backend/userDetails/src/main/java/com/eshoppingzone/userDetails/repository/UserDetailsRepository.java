package com.eshoppingzone.userDetails.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.eshoppingzone.userDetails.model.UserDetails;

public interface UserDetailsRepository extends MongoRepository<UserDetails, String> {

	Optional<UserDetails> findByPhoneNumber(String phoneNumber);
	

}
