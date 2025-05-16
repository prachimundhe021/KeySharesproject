package com.spring.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "LoginRegistration")
public class LoginRegistration {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int loginRegiId;

	@Column(length = 25)
	private String userName;
	@Column(length = 25)
	private String emailId;
	@Column(length = 8)
	private String gender;
	@Column(length = 25)
	private String passWord;
	@Column(length = 25)
	private String confirmPassword;
	@Column(length = 8)
	private String role;

	public LoginRegistration() {
		super();
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public LoginRegistration(int loginRegiId, String userName, String emailId, String gender, String passWord,
			String confirmPassword, String role) {
		super();
		this.loginRegiId = loginRegiId;
		this.userName = userName;
		this.emailId = emailId;
		this.gender = gender;
		this.passWord = passWord;
		this.confirmPassword = confirmPassword;
		this.role = role;
	}

	@Override
	public String toString() {
		return "LoginRegistration [loginRegiId=" + loginRegiId + ", userName=" + userName + ", emailId=" + emailId
				+ ", gender=" + gender + ", passWord=" + passWord + ", confirmPassword=" + confirmPassword + ", role="
				+ role + "]";
	}

	public int getLoginRegiId() {
		return loginRegiId;
	}

	public void setLoginRegiId(int loginRegiId) {
		this.loginRegiId = loginRegiId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

}
