package com.spring.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.spring.entity.SellerInformation;
import java.util.List;


public interface SellerInformationRepo extends JpaRepository<SellerInformation, Integer>{

//	@Query("FROM SellerInformation WHERE emailId = :emailId")
//	@Query("SELECT r.roomId FROM RoomInformation r JOIN r.sellerInformation s WHERE s.emailId = :emailId")
//	List<SellerInformation> findByEmailId(String emailId);
	
	@Query("SELECT r.roomId FROM RoomInformation r JOIN r.sellerInformation s WHERE s.emailId = :emailId")
	Integer findRoomIdsByEmailId(@Param("emailId") String emailId);
	
}	
