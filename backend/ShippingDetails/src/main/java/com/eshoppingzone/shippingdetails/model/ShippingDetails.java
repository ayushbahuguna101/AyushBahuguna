package com.eshoppingzone.shippingdetails.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Document(collection = "shippingDetails")
public class ShippingDetails {

	@Id
	private String username;
	private String fullName;
	private String phone;
	private String address;
	private int pin;
}
