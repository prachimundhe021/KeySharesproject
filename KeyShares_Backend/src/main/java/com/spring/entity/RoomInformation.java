package com.spring.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "RoomInformation")
public class RoomInformation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int roomId;

	@Column(length = 25)
	private String roomType;
	@Column(length = 200)
	private String address;
	@Column(length = 50)
	private String city;
	@Column(length = 25)
	private String foodAllowed;
	@Column(length = 25)
	private String coolingType;
	@Column(length = 25)
	private String facilities;

	private int overallCapacity;
	private int alreadyFilled;
	@Column(length = 25)
	private String spaceAvailable;
	private int overallRent;
	private int securityDeposit;
	private int rentPerHead;
	
	@OneToOne
	@JoinColumn(name = "imageLinkId")
	private ImagesLinks imagesLinks;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "sellerId")
	private SellerInformation sellerInformation;
	

	public RoomInformation() {
		super();
	}


	@Override
	public String toString() {
		return "RoomInformation [roomId=" + roomId + ", roomType=" + roomType + ", address=" + address + ", city="
				+ city + ", foodAllowed=" + foodAllowed + ", coolingType=" + coolingType + ", facilities=" + facilities
				+ ", overallCapacity=" + overallCapacity + ", alreadyFilled=" + alreadyFilled + ", spaceAvailable="
				+ spaceAvailable + ", overallRent=" + overallRent + ", securityDeposit=" + securityDeposit
				+ ", rentPerHead=" + rentPerHead + "]";
	}
	
	
	
	public SellerInformation getSellerInformation() {
		return sellerInformation;
	}


	public void setSellerInformation(SellerInformation sellerInformation) {
		this.sellerInformation = sellerInformation;
	}


	public ImagesLinks getImagesLinks() {
		return imagesLinks;
	}

	public void setImagesLinks(ImagesLinks imagesLinks) {
		this.imagesLinks = imagesLinks;
	}

	public int getRoomId() {
		return roomId;
	}

	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}

	public String getRoomType() {
		return roomType;
	}

	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getFoodAllowed() {
		return foodAllowed;
	}

	public void setFoodAllowed(String foodAllowed) {
		this.foodAllowed = foodAllowed;
	}

	public String getCoolingType() {
		return coolingType;
	}

	public void setCoolingType(String coolingType) {
		this.coolingType = coolingType;
	}

	public String getFacilities() {
		return facilities;
	}

	public void setFacilities(String facilities) {
		this.facilities = facilities;
	}

	public int getOverallCapacity() {
		return overallCapacity;
	}

	public void setOverallCapacity(int overallCapacity) {
		this.overallCapacity = overallCapacity;
	}

	public int getAlreadyFilled() {
		return alreadyFilled;
	}

	public void setAlreadyFilled(int alreadyFilled) {
		this.alreadyFilled = alreadyFilled;
	}

	public String getSpaceAvailable() {
		return spaceAvailable;
	}

	public void setSpaceAvailable(String spaceAvailable) {
		this.spaceAvailable = spaceAvailable;
	}

	public int getOverallRent() {
		return overallRent;
	}

	public void setOverallRent(int overallRent) {
		this.overallRent = overallRent;
	}

	public int getSecurityDeposit() {
		return securityDeposit;
	}

	public void setSecurityDeposit(int securityDeposit) {
		this.securityDeposit = securityDeposit;
	}

	public int getRentPerHead() {
		return rentPerHead;
	}

	public void setRentPerHead(int rentPerHead) {
		this.rentPerHead = rentPerHead;
	}

}
