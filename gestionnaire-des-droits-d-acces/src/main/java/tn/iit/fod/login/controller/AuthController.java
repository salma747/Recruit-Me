package tn.iit.fod.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import tn.iit.fod.login.model.Authentication;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/login")
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@GetMapping(path = "/auth")
	public Authentication confirmation() {
		return new Authentication("Parfait! Vous avez authentifiés ");
	}

	@GetMapping(path = "/me")
	public org.springframework.security.core.Authentication me() {
		return SecurityContextHolder.getContext().getAuthentication();
	}
}