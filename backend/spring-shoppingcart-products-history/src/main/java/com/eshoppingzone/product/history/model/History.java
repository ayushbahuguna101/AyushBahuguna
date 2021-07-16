package com.eshoppingzone.product.history.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="History")
public class History {
	
	String username;
	String title;
	String file;
	int productid;
	int price;
	int rating;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getProductid() {
		return productid;
	}
	public void setProductid(int productid) {
		this.productid = productid;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getFile() {
		return file;
	}
	public void setFile(String file) {
		this.file = file;
	}
	
	public History(String username, String title, int productid, int price, int rating, String file) {
		super();
		this.username = username;
		this.title = title;
		this.productid = productid;
		this.price = price;
		this.rating = rating;
		this.file =file;
	}
	public History() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "History [username=" + username + ", title=" + title + ", productid=" + productid + ", price=" + price
				+ ", rating=" + rating +", file=" + file + "]";
	}



}
