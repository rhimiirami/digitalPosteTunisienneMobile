package com.ant.gc.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor 
@NoArgsConstructor
public class MessageResponse {

	
	private boolean succes;
	private String message;
	private String detail ;
	
}
