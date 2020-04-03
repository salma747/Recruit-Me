package tn.iit.fod.candidats.controller;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import tn.iit.fod.candidats.model.Candidat;
import tn.iit.fod.candidats.repository.CandidatRepository;

@RestController
public class CandidatController {

    @Autowired
    CandidatRepository repository;

    //@Bean
    //ElasticsearchTemplate template;


    @PostMapping("recruteur/candidat/add")
    public Candidat addStudent(@RequestBody Candidat candidat ){
        return repository.save(candidat);
    }

    @GetMapping("recruteur/candidat/all")
    public List<Candidat> getCandidat(){
        Iterator<Candidat> iterator= repository.findAll().iterator();
        List<Candidat> candidats=new ArrayList<Candidat>();
        while(iterator.hasNext()){
            candidats.add(iterator.next());
        }
        return candidats;
    }


    @GetMapping("recruteur/candidat/{id}")
    public Optional<Candidat> getStudent(@PathVariable Integer id){
        return repository.findById(id);
    }


    @PutMapping("recruteur/candidat/{id}")
    public Candidat updateCandidat(@PathVariable Integer id,@RequestBody Candidat candidat){
        Optional<Candidat> std= repository.findById(id);
        if(std.isPresent()){
            Candidat s=std.get();
            s.setNom(candidat.getNom());
            return repository.save(s);
        }
        else
            return null;
    }

    @DeleteMapping("recruteur/candidat/{id}")
    public String deleteCandidat(@PathVariable Integer id){
        repository.deleteById(id);
        return "Document Deleted";
    }






}
