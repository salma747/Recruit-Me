package tn.iit.fod.recruteurscontroller;

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
import tn.iit.fod.recruteurmodel.Recruteur;
import tn.iit.fod.recruteurrepository.RecruteurRepository;

@RestController
public class RecruteurController {

    @Autowired
    RecruteurRepository repository;

    //@Bean
    //ElasticsearchTemplate template;

    @PostMapping("/recruteur/add")
    public Recruteur addRecruteur(@RequestBody Recruteur recruteur ){
        return repository.save(recruteur);
    }

    @GetMapping("/recruteur/all")
    public List<Recruteur> getRecruteur(){
        Iterator<Recruteur> iterator= repository.findAll().iterator();
        List<Recruteur> recruteurs=new ArrayList<Recruteur>();
        while(iterator.hasNext()){
            recruteurs.add(iterator.next());
        }
        return recruteurs;
    }


    @GetMapping("/recruteur/{id}")
    public Optional<Recruteur> getRecruteur(@PathVariable Integer id){
        return repository.findById(id);
    }


    @PutMapping("/recruteur/{id}")
    public Recruteur updateRecruteur(@PathVariable Integer id,@RequestBody Recruteur recruteur){
        Optional<Recruteur> std= repository.findById(id);
        if(std.isPresent()){
            Recruteur s=std.get();
            s.setNom(recruteur.getNom());
            return repository.save(s);
        }
        else
            return null;
    }

    @DeleteMapping("/recruteur/{id}")
    public String deleteRecruterur(@PathVariable Integer id){
        repository.deleteById(id);
        return "Document Deleted";
    }






}
