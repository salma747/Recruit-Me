package tn.iit.fod.recruteurscontroller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import tn.iit.fod.recruteurmodel.Recruteur;
import tn.iit.fod.recruteurrepository.RecruteurRepository;

@RestController
@RequestMapping("recruteur")
public class RecruteurController {

    @Autowired
    RecruteurRepository repository;

    @Autowired
    PasswordEncoder passwordEncoder;


    @PostMapping("add")
    public Recruteur addRecruteur(@RequestBody Recruteur recruteur ){
        recruteur.setMotpasse(passwordEncoder.encode(recruteur.getMotpasse()));
        return repository.save(recruteur);
    }

    @GetMapping("all")
    public List<Recruteur> getRecruteur(){
        Iterator<Recruteur> iterator= repository.findAll().iterator();
        List<Recruteur> recruteurs=new ArrayList<Recruteur>();
        while(iterator.hasNext()){
            recruteurs.add(iterator.next());
        }
        return recruteurs;
    }


    @GetMapping("{id}")
    public Optional<Recruteur> getRecruteur(@PathVariable String id){
        return repository.findById(id);
    }


    @PutMapping("{id}")
    public Recruteur updateRecruteur(@PathVariable String id, @RequestBody Recruteur recruteur) {
        recruteur.setId(id);
        recruteur.setMotpasse(passwordEncoder.encode(recruteur.getMotpasse()));

        return repository.save(recruteur);
    }
//    @PutMapping("{id}")
//    public Recruteur updateRecruteur(@PathVariable Integer id,@RequestBody Recruteur recruteur){
//        Optional<Recruteur> std= repository.findById(id);
//        if(std.isPresent()){
//            Recruteur s=std.get();
//            s.setNom(recruteur.getNom());
//            return repository.save(s);
//        }
//        else
//            return null;
//    }

    @DeleteMapping("{id}")
    public String deleteRecruterur(@PathVariable String id){
        repository.deleteById(id);
        return "Document Deleted";
    }






}
