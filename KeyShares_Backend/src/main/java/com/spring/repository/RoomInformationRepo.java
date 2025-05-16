package com.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.spring.entity.RoomInformation;

public interface RoomInformationRepo extends JpaRepository<RoomInformation, Integer>{

}
