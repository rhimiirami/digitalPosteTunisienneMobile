package com.ant.gc.services;

import java.util.List;

import com.ant.gc.dto.MessageResponse;
import com.ant.gc.dto.PasswordDto;
import com.ant.gc.entities.Users;


public interface UsersService {

	public MessageResponse save(Users user);
	public MessageResponse update(Users user);
	public MessageResponse delete(Integer Id);
	public List<Users> findAll();
	public Users findById(Integer Id);
	public MessageResponse changePassword(PasswordDto passwordDto);

	
}
