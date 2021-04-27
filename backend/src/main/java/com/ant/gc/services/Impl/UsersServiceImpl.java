package com.ant.gc.services.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ant.gc.dto.MessageResponse;
import com.ant.gc.dto.PasswordDto;
import com.ant.gc.entities.Users;
import com.ant.gc.repositories.ContactRepository;
import com.ant.gc.repositories.UserRepository;
import com.ant.gc.services.UsersService;

@Service
public class UsersServiceImpl implements UsersService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ContactRepository contactRepository;
	@Autowired
	private PasswordEncoder passwordEncoder ;
   
	@Transactional
	@Override
	public MessageResponse save(Users user) {
		boolean exist = contactRepository.existsByEmail(user.getEmail());
		if (exist) {
			return new MessageResponse(false, "Attention", "Email existe déja !!");

		}

		exist = userRepository.existsByUsername(user.getUsername());
		if (exist) {
			return new MessageResponse(false, "Attention", "Nom d'utililsateur existe déja !!");

		}
		
		
		String cryptedpassword = passwordEncoder.encode(user.getPasword());
		user.setPasword(cryptedpassword);	
		userRepository.save(user);
		return new MessageResponse(true, "Succès", "Opération effectuée");
	}

	
	@Transactional
	@Override
	public MessageResponse update(Users user) {

		boolean exist = contactRepository.existsByEmailAndId(user.getEmail(), user.getId());
		if (!exist) {
			exist = contactRepository.existsByEmail(user.getEmail());
			if (exist) {
				return new MessageResponse(false, "Attention", "Email existe déja !!");
			}
		}
		exist = userRepository.existsByUsernameAndId(user.getUsername(), user.getId());
		if (!exist) {
			exist = userRepository.existsByUsername(user.getUsername());
			if (exist) {
				return new MessageResponse(false, "Attention", "Username existe déja !!");
			}
		}
		userRepository.save(user);
		return new MessageResponse(true, "Succès", "Opértion effectuée ");
	}

	
	@Transactional
	@Override
	public MessageResponse delete(Integer Id) {
		Users user = findById(Id);
        if (user == null) {
        return new MessageResponse(false ,"Attention", "Utilisateur introuvable !!");
        }
        userRepository.delete(user);
		return new MessageResponse(true, "Succès", "Opértion effectuée ");
	}

	
	@Transactional ( readOnly = true)
	@Override
	public List<Users> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	
	@Transactional ( readOnly = true)
	@Override
	public Users findById(Integer Id) {
		return userRepository.findById(Id).orElse(null);

	}


	@Override
	public MessageResponse changePassword(PasswordDto passwordDto) {
      Users user = findById(passwordDto.getId());
      if (user == null) {
    	  return new MessageResponse(false,"Attention","Utilisateur introuvable");
      }
      
      boolean valid = passwordEncoder.matches(passwordDto.getOldPassword(), user.getPasword());
      
      if (!valid) {
    	  return new MessageResponse(false,"Attention","Ancien mot de passe incorrect");
    	  
      }
      
      String cryptedPassword = passwordEncoder.encode(passwordDto.getNewPassword());
      user.setPasword(cryptedPassword);
      userRepository.save(user);
       return new MessageResponse(true,"Succès","Operation effectué");
	}

}
