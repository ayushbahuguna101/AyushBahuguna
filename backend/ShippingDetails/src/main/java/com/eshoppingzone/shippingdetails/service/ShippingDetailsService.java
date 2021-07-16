package com.eshoppingzone.shippingdetails.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eshoppingzone.shippingdetails.model.ShippingDetails;
import com.eshoppingzone.shippingdetails.repository.ShippingDetailsRepository;

@Service
public class ShippingDetailsService {

	@Autowired
	private ShippingDetailsRepository repository;
	
	public ShippingDetails saveShippingDetails(ShippingDetails details) {
		return repository.save(details);
	}

}
