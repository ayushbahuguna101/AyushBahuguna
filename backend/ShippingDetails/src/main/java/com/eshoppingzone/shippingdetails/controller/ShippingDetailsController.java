package com.eshoppingzone.shippingdetails.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.eshoppingzone.shippingdetails.model.ShippingDetails;
import com.eshoppingzone.shippingdetails.service.ShippingDetailsService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/ship")
public class ShippingDetailsController {
	
	@Autowired
	private ShippingDetailsService service;
	
	@PostMapping("/addShippingDetails")
    public ResponseEntity<ShippingDetails> addShippingDetails(@RequestBody ShippingDetails details) {
    	ShippingDetails s = service.saveShippingDetails(details);
        return new ResponseEntity<>(s, HttpStatus.CREATED);
    }
}
