package com.spring.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.entity.LoginRegistration;
import java.util.List;


public interface LoginRegistrationRepo extends JpaRepository<LoginRegistration, Integer>{

//	List<Product> findByProductNameAndProductPrice(String productName, String productPrice);
	
	
	LoginRegistration findByEmailIdAndPassWord(String emailId, String passWord);
	
	LoginRegistration findByEmailId(String emailId);
	

}
