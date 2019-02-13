package com.qa.spring.application.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.spring.application.exception.ResourceNotFoundException;
import com.qa.spring.application.model.UFCDataModelShop;
import com.qa.spring.application.repository.UFCShopRepository;

@RestController
@RequestMapping("/api2")
public class UFCShopController {

	@Autowired
	UFCShopRepository myShopRepository;

	@CrossOrigin
	@GetMapping("/ufc/{product_id}")
	public UFCDataModelShop getFighterbyID(@PathVariable(value = "product_id")Integer product_id) {
		return myShopRepository.findById(product_id).orElseThrow(() -> new ResourceNotFoundException("UFCDataModelShop", "fighter_id", product_id));
	}

	@CrossOrigin
	@GetMapping("/ufc/allProducts")
	public List<UFCDataModelShop> getAllProducts(){
		return myShopRepository.findAll();
	}

}
