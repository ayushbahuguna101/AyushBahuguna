package com.eshoppingzone.shippingdetails.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.eshoppingzone.shippingdetails.model.ShippingDetails;

@Repository
public interface ShippingDetailsRepository extends MongoRepository<ShippingDetails, String>{

}
