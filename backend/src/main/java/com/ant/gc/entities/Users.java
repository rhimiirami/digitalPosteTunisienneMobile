package com.ant.gc.entities;

import javax.persistence.Entity;

import lombok.Data;

@Entity
@Data
public class Users extends Contact {
	
	private String username ;
	private String pasword ;
	private String role ;

}
