package com.ant.gc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ant.gc.dto.MessageResponse;
import com.ant.gc.dto.PasswordDto;
import com.ant.gc.entities.Users;
import com.ant.gc.services.UsersService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;



@Api(description="yyyyyyyyyyyyyyyyy")
@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UsersController {
	
	@Autowired
	private UsersService usersService;
	
	@ApiOperation(value="find all users")
	@GetMapping
	public List<Users>  findAll() {
		System.out.println("*****************************************************");
		return usersService.findAll();
	}
	
	
	@ApiOperation(value="save all param")
	@PostMapping
	public MessageResponse save(@RequestBody Users user) {
	return usersService.save(user);
	}

	
	@PutMapping
	public MessageResponse update(@RequestBody Users user) {
		return usersService.update(user);
	}
	
	
	@GetMapping("/{id}")
    public Users findById(@PathVariable Integer id) {
		return usersService.findById(id);
	}
	
	@DeleteMapping("/{id}")
	public MessageResponse delete(@PathVariable Integer id) {
		return usersService.delete(id);
	}
	
	@PatchMapping
	public MessageResponse changePassword(@RequestBody PasswordDto passwordDto) {
		return usersService.changePassword(passwordDto);	
}
	

}
