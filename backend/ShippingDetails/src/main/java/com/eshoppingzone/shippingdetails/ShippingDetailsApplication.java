package com.eshoppingzone.shippingdetails;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ShippingDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShippingDetailsApplication.class, args);
	}

}
