package com.spring.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "SellerInformation")
public class SellerInformation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int sellerId;

	@Column(length = 25)
	private String sellerName;
	@Column(length = 25)
	private String city;
	@Column(length = 25)
	private String mobileNumber;
	@Column(length = 25)
	private String emailId;
	@Column(length = 10)
	private String gender;
	private int age;
	@Column(length = 25)
	private String profession;
	@Column(length = 25)
	private String mealType;

	@OneToOne
	@JoinColumn(name = "roomId")
	RoomInformation roomInformation;

	public SellerInformation() {
		super();
	}

	@Override
	public String toString() {
		return "SellerInformation [sellerId=" + sellerId + ", sellerName=" + sellerName + ", city=" + city
				+ ", mobileNumber=" + mobileNumber + ", age=" + age + ", profession=" + profession + ", mealType="
				+ mealType + "]";
	}

	public void setRoomInformation(RoomInformation roomInformation) {
		this.roomInformation = roomInformation;
	}

	public int getSellerId() {
		return sellerId;
	}

	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getProfession() {
		return profession;
	}

	public void setProfession(String profession) {
		this.profession = profession;
	}

	public String getMealType() {
		return mealType;
	}

	public void setMealType(String mealType) {
		this.mealType = mealType;
	}

}
