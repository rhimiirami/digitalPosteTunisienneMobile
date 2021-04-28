package com.ant.gc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.gc.entities.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {


	boolean existsByEmail(String email);
	boolean existsByEmailAndId(String email, Integer id);
	boolean existsByUsername(String username);
	boolean existsByUsernameAndId(String username, Integer id);
}
