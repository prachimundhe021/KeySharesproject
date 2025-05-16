package com.spring.restControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entity.LoginRegistration;
import com.spring.repository.LoginRegistrationRepo;

@RestController
@CrossOrigin("http://localhost:4200")
public class LoginRegistrationController {

	@Autowired
	LoginRegistrationRepo repo;
	
	@PostMapping("/registration")
	public String Register(@RequestBody LoginRegistration loginRegistration) {
		
		String flag="0";
		
		String email = loginRegistration.getEmailId();
		
		LoginRegistration check = repo.findByEmailId(email);
		
		if(check == null) {
			System.out.println(loginRegistration);
			repo.save(loginRegistration);
			
		}else if(check.getEmailId().equals(email)) {
			System.out.println("Already Registered!!");
			flag="1";			
		}
		
		return flag;
		
	}
	
	@GetMapping("/login/{emailId}/{passWord}")
	public LoginRegistration RegistrationDetails(@PathVariable String emailId, @PathVariable String passWord){
		
		LoginRegistration loginRole = repo.findByEmailIdAndPassWord(emailId, passWord);
		
		if (loginRole == null || loginRole.getRole() == null || loginRole.getRole().isEmpty()) {
			System.out.println("Data Not Exist!!");
			LoginRegistration loginRegistration =  new LoginRegistration();
			loginRegistration.setRole("other");
			
			return loginRegistration;
		}
		else {	
			System.out.println(loginRole.getRole());
			return loginRole;
		}
	}
	
	
	
	
//	@GetMapping("/registerCheck/{userName}/{emailId}")
//	public String RegistrationDetailsCheck(@PathVariable String emailId){
//		
//		String flag="0";
//		
//		System.out.println(userName+" "+emailId);
//		
////		LoginRegistration email = repo.findByEmailId(emailId);
//		
////		LoginRegistration username = repo.findByUserName(userName);
//		
//		LoginRegistration check = repo.findByUserNameAndEmailId(userName, emailId);
//		
////		System.out.println(check.get);
////		System.out.println(username);
//		
////		if((email.getEmailId().equals(emailId)) && username.getUserName().equals(userName))
////			flag= "1";
////		else if (username.getUserName().equals(userName)) 
////			flag= "2";
////		else if(email.getEmailId().equals(emailId))
////			flag= "3";
////		else 
////			flag= "4";
//		
//		return flag;
//	}
	
	
	
}
