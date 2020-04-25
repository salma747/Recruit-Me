package tn.iit.fod.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.iit.fod.model.Candidat;
import tn.iit.fod.repository.CandidatRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("candidats")
public class CandidatController {

    @Autowired
    CandidatRepository repository;



    @PostMapping("add")
    public Candidat addCandidat(@RequestBody Candidat candidat ){
        return repository.save(candidat);
    }

    @GetMapping("all")
    public List<Candidat> getAllCandidat(){
        Iterator<Candidat> iterator= repository.findAll().iterator();
        List<Candidat> candidats=new ArrayList<Candidat>();
        while(iterator.hasNext()){
            candidats.add(iterator.next());
        }
        return candidats;
    }


    @GetMapping("{id}")
    public Optional<Candidat> getCandidat(@PathVariable String id){
        return repository.findById(id);
    }


    @PutMapping("{id}")
    public Candidat updateCandidat(@PathVariable String id,@RequestBody Candidat candidat){
        Optional<Candidat> std= repository.findById(id);
        if(std.isPresent()){
            Candidat s=std.get();
            s.setNom(candidat.getNom());
            return repository.save(s);
        }
        else
            return null;
    }

    @DeleteMapping("{id}")
    public String deleteCandidat(@PathVariable String id){
        repository.deleteById(id);
        return "Document Deleted";
    }






}
