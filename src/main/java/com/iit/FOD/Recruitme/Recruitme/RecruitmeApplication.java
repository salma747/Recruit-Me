package com.iit.FOD.Recruitme.Recruitme;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iit.FOD.Recruitme.Model.Candidat;
import com.iit.Recruitme.Repository.Candidatrepository;

import java.util.*;
@SpringBootApplication
@RestController
public class RecruitmeApplication {

	
	//@Autowired(required=true)
	private Candidatrepository repository;
	@PostMapping("/saveCandidat")
	public int saveCandidat(@RequestBody List<Candidat> candidats) {
		repository.saveAll(candidats);
		return candidats.size();
	}
	@PostMapping("/findAll")
	public Iterable<Candidat> findAllCandidats(){
		return repository.findAll();
	}
	
	@PostMapping("/findByName/{firstName}")
	public List<Candidat> findByFirstName(@PathVariable String firstName){
		return repository.findByFirstname(firstName);
	}
	
	
	
	public static void main(String[] args) {
		SpringApplication.run(RecruitmeApplication.class, args);
	}

}
