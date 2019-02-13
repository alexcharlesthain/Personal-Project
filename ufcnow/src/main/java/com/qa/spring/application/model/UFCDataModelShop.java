package com.qa.spring.application.model;

import java.io.Serializable;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

//import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "shop_list")
@EntityListeners(AuditingEntityListener.class)
public class UFCDataModelShop implements Serializable {

    public UFCDataModelShop() {

    }

    public UFCDataModelShop(String title, String description, String category, String price, String rating) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.rating = rating;
    }
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id") private int product_id;
    @Column(name = "description") private String description;
    @Column(name = "category") private String category;
    @Column(name = "price") private String price;
    @Column(name = "rating") private String rating;
	@NotBlank
	@Column(name = "title") private String title;
	
    
    public int getproduct_id() {
        return product_id;
    }

    public void setproduct_id(int product_id) {
        this.product_id = product_id;
    }
   
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String gettitle() {
    	return title;
    }
    
    public void settitle(String title) {
        this.title = title;
    }

    public String getdescription() {
        return description;
    }
    
    public void setdescription(String description) {
        this.description = description;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }
}
