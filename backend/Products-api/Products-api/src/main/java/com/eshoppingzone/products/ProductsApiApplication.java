package com.eshoppingzone.products;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableEurekaClient
@EnableSwagger2
@SpringBootApplication
public class ProductsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductsApiApplication.class, args);
	}
	@Bean
	public Docket swagConfig(){
		return new Docket( DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.any())
				.apis(RequestHandlerSelectors.basePackage("com.eshoppingzone.products.resource"))
				.build()
				.pathMapping("/")
				.apiInfo(apiDetails());
	}

	private ApiInfo apiDetails(){
		return new ApiInfo( "Products Details",
				"Description of Products",
				"1.0",
				" ",
				new springfox.documentation.service.Contact("Ayush Bahuguna", "http://eshoppingzone.com", "project@gmail.com"),
				"API License",
				"http://eshoppingzone.com",
				Collections.emptyList()
		);
	}

}
