package com.ant.gc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.authentication.UserServiceBeanDefinitionParser;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.ant.gc.entities.Client;
import com.ant.gc.entities.Users;
import com.ant.gc.repositories.ClientRepository;
import com.ant.gc.services.UsersService;

import springfox.documentation.swagger2.annotations.EnableSwagger2;



@SpringBootApplication
@EnableAutoConfiguration(exclude = { SecurityAutoConfiguration.class })
public class GestionContactApplication implements CommandLineRunner {

	@Autowired
	private ClientRepository clientRepository;
	@Autowired
	private UsersService usersService;

	public static void main(String[] args) {
		SpringApplication.run(GestionContactApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Users user = new Users();
		user.setNom("mourad");
		user.setPrenom("bounassi");
		user.setEmail("mourad1@gmail.com");
		user.setAdress("Tunis");
		user.setUsername("admin1");
		user.setPasword("admin");
		user.setRole("ROLE_USER");
		usersService.save(user);

		/*
		 * Client clt =new Client(); clt.setNom("Rami"); clt.setPrenom("Rhimi");
		 * clt.setEmail("ramirhimi93@gmail.com");
		 * clt.setAdress("Nouvelle medina ben arous"); clientRepository.save(clt);
		 */
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
