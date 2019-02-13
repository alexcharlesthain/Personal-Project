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
import com.qa.spring.application.model.UFCDataModelFighter;
import com.qa.spring.application.repository.UFCFighterRepository;

@RestController
@RequestMapping("/api")
public class UFCFighterController {

	@Autowired
	UFCFighterRepository myFighterRepository;

	@CrossOrigin
	@GetMapping("/ufc/{fighter_id}")
	public UFCDataModelFighter getfighter_id(@PathVariable(value = "fighter_id")int fighter_id) {
		return myFighterRepository.findById(fighter_id).orElseThrow(() -> new ResourceNotFoundException("UFCDataModelFighter", "fighter_id", fighter_id));
	}

	@CrossOrigin
	@GetMapping("/ufc/getfighters")
	public List<UFCDataModelFighter> getAllFighters(){
		return myFighterRepository.findAll();
	}

}
