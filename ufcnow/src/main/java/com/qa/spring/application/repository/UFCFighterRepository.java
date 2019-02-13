package com.qa.spring.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.spring.application.model.UFCDataModelFighter;

@Repository
public interface UFCFighterRepository extends JpaRepository<UFCDataModelFighter,Integer>{

}
