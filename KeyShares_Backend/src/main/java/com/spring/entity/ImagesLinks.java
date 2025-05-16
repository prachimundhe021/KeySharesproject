package com.spring.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ImagesLinks")
public class ImagesLinks {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int imageLinkId;
	@Column(length = 3000)
	private String imageLink1;
	@Column(length = 3000)
	private String imageLink2;
	@Column(length = 3000)
	private String imageLink3;
	@Column(length = 3000)
	private String imageLink4;

	public ImagesLinks() {
		super();
	}

	public ImagesLinks(int imageLinkId, String imageLink1, String imageLink2, String imageLink3, String imageLink4) {
		super();
		this.imageLinkId = imageLinkId;
		this.imageLink1 = imageLink1;
		this.imageLink2 = imageLink2;
		this.imageLink3 = imageLink3;
		this.imageLink4 = imageLink4;
	}

	@Override
	public String toString() {
		return "ImagesLinks [imageLinkId=" + imageLinkId + ", imageLink1=" + imageLink1 + ", imageLink2=" + imageLink2
				+ ", imageLink3=" + imageLink3 + ", imageLink4=" + imageLink4 + "]";
	}

	public int getImageLinkId() {
		return imageLinkId;
	}

	public void setImageLinkId(int imageLinkId) {
		this.imageLinkId = imageLinkId;
	}

	public String getImageLink1() {
		return imageLink1;
	}

	public void setImageLink1(String imageLink1) {
		this.imageLink1 = imageLink1;
	}

	public String getImageLink2() {
		return imageLink2;
	}

	public void setImageLink2(String imageLink2) {
		this.imageLink2 = imageLink2;
	}

	public String getImageLink3() {
		return imageLink3;
	}

	public void setImageLink3(String imageLink3) {
		this.imageLink3 = imageLink3;
	}

	public String getImageLink4() {
		return imageLink4;
	}

	public void setImageLink4(String imageLink4) {
		this.imageLink4 = imageLink4;
	}

}
