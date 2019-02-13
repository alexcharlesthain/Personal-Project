package com.qa.spring.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class UFCApplication {

	public static void main(String[] args) {
		SpringApplication.run(UFCApplication.class, args);
	}
}