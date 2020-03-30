package tn.iit.fod.login.controller;

import tn.iit.fod.login.model.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/login")
public class AuthController {

	@GetMapping(path = "/auth")
	public Authentication confirmation() {
		return new Authentication("Parfait! Vous avez authentifiés ");
	}	
}
