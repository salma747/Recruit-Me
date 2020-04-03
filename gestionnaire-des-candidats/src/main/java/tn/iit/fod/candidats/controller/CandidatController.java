package tn.iit.fod.candidats.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tn.iit.fod.candidats.model.Candidat;
import tn.iit.fod.candidats.repository.CandidatRepository;

@RestController
public class CandidatController {

    @Autowired
    CandidatRepository repository;

    //@Bean
    //ElasticsearchTemplate template;


    @PostMapping("/candidat/add")
    public Candidat addCandidat(@RequestBody Candidat candidat ){
        return repository.save(candidat);
    }

    @GetMapping("/candidat/all")
    public List<Candidat> getCandidat(){
        Iterator<Candidat> iterator= repository.findAll().iterator();
        List<Candidat> candidats=new ArrayList<Candidat>();
        while(iterator.hasNext()){
            candidats.add(iterator.next());
        }
        return candidats;
    }


    @GetMapping("/candidat/{id}")
    public Optional<Candidat> getStudent(@PathVariable Integer id){
        return repository.findById(id);
    }


    @PutMapping("/candidat/{id}")
    public Candidat updateStudent(@PathVariable Integer id,@RequestBody Candidat candidat){
        Optional<Candidat> std= repository.findById(id);
        if(std.isPresent()){
            Candidat s=std.get();
            s.setNom(candidat.getNom());
            return repository.save(s);
        }
        else
            return null;
    }

    @DeleteMapping("/candidat/{id}")
    public String deleteCandidat(@PathVariable Integer id){
        repository.deleteById(id);
        return "Document Deleted";
    }






}
