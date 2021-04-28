package com.ant.gc.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public class MessageResponse {

	
	
	private boolean succes;
	private String message;
	private String detail ;
	public boolean isSucces() {
		return succes;
	}
	public void setSucces(boolean succes) {
		this.succes = succes;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public MessageResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MessageResponse(boolean succes, String message, String detail) {
		super();
		this.succes = succes;
		this.message = message;
		this.detail = detail;
	}
	
	
	
}
