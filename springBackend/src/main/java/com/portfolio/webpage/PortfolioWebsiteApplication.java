package com.portfolio.webpage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@SpringBootApplication
public class PortfolioWebsiteApplication {
	public static void main(String[] args) {
		SpringApplication.run(PortfolioWebsiteApplication.class, args);
	}
}
