package com.project.springreact.vo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "guestbook")
public class GuestBookVo {
	
	@Id
	@Column(nullable = false , unique = true)
	private String name;
	
	@Column(nullable = false)
	private String message;
	
	public GuestBookVo() {
		
	}
	
	public GuestBookVo(String name, String message) {
        this.name = name;
        this.message = message;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "GuestBookVo [name=" + name + ", message=" + message + ", getName()=" + getName() + ", getMessage()="
				+ getMessage() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	
}
