package com.spring.restControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entity.ImagesLinks;
import com.spring.entity.RoomInformation;
import com.spring.entity.SellerInformation;
import com.spring.repository.ImagesLinksRepo;
import com.spring.repository.RoomInformationRepo;
import com.spring.repository.SellerInformationRepo;


@RestController
@CrossOrigin("http://localhost:4200")
public class InformationController {

	@Autowired
	SellerInformationRepo repo;

	@Autowired
	RoomInformationRepo repo2;
	
	@Autowired
	ImagesLinksRepo repo3;

	
//	Seller Controllers
	@PostMapping("/sellerInformation/{emailId}/{gender}")
	public int addSellerInformation(@RequestBody SellerInformation sellerInformation, @PathVariable String emailId, @PathVariable String gender) {
		System.out.println(sellerInformation);

		sellerInformation.setEmailId(emailId);
		sellerInformation.setGender(gender);
		
		repo.save(sellerInformation);
		
		System.out.println(sellerInformation.getSellerId());
		return sellerInformation.getSellerId();
	}
	
	
	@GetMapping("/sellerInformation")
	public List<SellerInformation> showAllSellerInformation() {
		return repo.findAll();
	}
	
	
	@GetMapping("/sellerInformation/{sellerId}")
	public SellerInformation getSellerInformationById(@PathVariable int roomId){
		return repo.findById(roomId).orElse(new SellerInformation());
	}
	
	
	@PutMapping("/sellerInformation/{roomId}/{emailId}/{gender}/{sellerId}")
	public void updateSellerInformation(@RequestBody SellerInformation sellerInformation,@PathVariable int roomId, @PathVariable String emailId, @PathVariable String gender, @PathVariable int sellerId) {
		RoomInformation roomInformation = repo2.findById(roomId).orElse(new RoomInformation());
		
		sellerInformation.setSellerId(sellerId);
		sellerInformation.setEmailId(emailId);
		sellerInformation.setGender(gender);
		
		roomInformation.setSellerInformation(sellerInformation);
		repo2.save(roomInformation);
	}
 
	
	
	
//	Room Controller
	@PostMapping("/roomInformation/{sellerId}")
	public int addRoomInformation(@RequestBody RoomInformation roomInformation, @PathVariable int sellerId) {
		System.out.println(sellerId);
		System.out.println(roomInformation);

		SellerInformation sellerInformation = repo.findById(sellerId).orElse(new SellerInformation());
		
		sellerInformation.setRoomInformation(roomInformation);
		roomInformation.setSellerInformation(sellerInformation);
		
		repo2.save(roomInformation);
		
		return roomInformation.getRoomId();
	}
	
	
	@GetMapping("/roomInformation")
	public List<RoomInformation> showAllRoomInformation(){
		return repo2.findAll();
	}
	
	
	@GetMapping("/roomInformation/{roomId}")
	public RoomInformation showRoomInformationById(@PathVariable int roomId) {
		return repo2.findById(roomId).orElse(new RoomInformation());
	}
	
	
	@PutMapping("/roomInformation/{roomId}")
	public void updateRoomInformation(@RequestBody RoomInformation updatedRoomInformation, @PathVariable int roomId) {
		
		RoomInformation roomInformation = repo2.findById(roomId).orElse(new RoomInformation());
		    
		    roomInformation.setRoomType(updatedRoomInformation.getRoomType());
		    roomInformation.setAddress(updatedRoomInformation.getAddress());
		    roomInformation.setCity(updatedRoomInformation.getCity());
		    roomInformation.setFoodAllowed(updatedRoomInformation.getFoodAllowed());
		    roomInformation.setCoolingType(updatedRoomInformation.getCoolingType());
		    roomInformation.setFacilities(updatedRoomInformation.getFacilities());
		    roomInformation.setOverallCapacity(updatedRoomInformation.getOverallCapacity());
		    roomInformation.setAlreadyFilled(updatedRoomInformation.getAlreadyFilled());
		    roomInformation.setSpaceAvailable(updatedRoomInformation.getSpaceAvailable());
		    roomInformation.setOverallRent(updatedRoomInformation.getOverallRent());
		    roomInformation.setSecurityDeposit(updatedRoomInformation.getSecurityDeposit());
		    roomInformation.setRentPerHead(updatedRoomInformation.getRentPerHead());
		    
		    repo2.save(roomInformation);
	}
	
	
//	Pending Update Room Information By SellerId
//	@PutMapping("/roomInformation/{sellerId}")
//	public void updateRoomInformationbySellerId(@RequestBody RoomInformation roomInformation, @PathVariable int sellerId) {
//		System.out.println(sellerId);
//		System.out.println(roomInformation);
//
//		SellerInformation sellerInformation = repo.findById(sellerId).orElse(new SellerInformation());
//		
//		sellerInformation.setSellerId(sellerId);
//		roomInformation.setSellerInformation(sellerInformation);
//		sellerInformation.setRoomInformation(roomInformation);
//		
//		repo2.save(roomInformation);
//	}
	
	
	
	
//	Image Controller
	@PostMapping("/imageInformation/{roomId}")
	public int addRoomInformation(@RequestBody ImagesLinks imagesLinks, @PathVariable int roomId) {
		System.out.println(roomId);
		System.out.println(imagesLinks);

		RoomInformation roomInformation = repo2.findById(roomId).orElse(new RoomInformation());
		
		roomInformation.setImagesLinks(imagesLinks);
		
		repo3.save(imagesLinks);
		
		return roomInformation.getRoomId();
	}
	
	@GetMapping("/imageInformation")
	public List<ImagesLinks> showAllImageInformation() {
		return repo3.findAll();
	}
	
	
	@GetMapping("/imageInformation/{imageId}")
	public ImagesLinks showImageInformationById(@PathVariable int imageId) {
		return repo3.findById(imageId).orElse(new ImagesLinks());
	}
	
	
	@PutMapping("/imageInformation/{roomId}")
	public void updateImageInformation(@RequestBody ImagesLinks imagesLinks,@PathVariable int roomId) {
		RoomInformation roomInformation = repo2.findById(roomId).orElse(new RoomInformation());
		
		roomInformation.setImagesLinks(imagesLinks);
		
		repo3.save(imagesLinks);
	}
	
	
	
//	All Information Show
	@GetMapping("/allInformation/{roomId}")
	public RoomInformation showAllInformation(@PathVariable int roomId) {
		System.out.println(repo2.findById(roomId));
		return repo2.findById(roomId).orElse(new RoomInformation());
	}
	
	
	
//	Finding Room ID
	@GetMapping("/findingRoomId/{emailId}")
	public int findingByRoomId(@PathVariable String emailId) {
		System.out.println(emailId);
		int roomId = repo.findRoomIdsByEmailId(emailId);
		System.out.println(roomId);
		return roomId;
	}

}
