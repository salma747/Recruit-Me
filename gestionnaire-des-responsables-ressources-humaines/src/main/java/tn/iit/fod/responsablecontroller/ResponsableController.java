package tn.iit.fod.responsablecontroller;



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
import tn.iit.fod.responsablemodel.Responsable;
import tn.iit.fod.responsablerepository.ResponsableRepository;

@RestController
public class ResponsableController {


    @Autowired
    ResponsableRepository repository;

    //@Bean
    //ElasticsearchTemplate template;


    @PostMapping("/responsable/add")
    public Responsable addResponsable(@RequestBody Responsable responsable ){
        return repository.save(responsable);
    }

    @GetMapping("/responsable/all")
    public List<Responsable> getResponsable(){
        Iterator<Responsable> iterator= repository.findAll().iterator();
        List<Responsable> responsables=new ArrayList<Responsable>();
        while(iterator.hasNext()){
            responsables.add(iterator.next());
        }
        return responsables;
    }


    @GetMapping("/responsable/{id}")
    public Optional<Responsable> getResponsable(@PathVariable Integer id){
        return repository.findById(id);
    }


    @PutMapping("/responsable/{id}")
    public Responsable updateResponsable(@PathVariable Integer id,@RequestBody Responsable responsable){
        Optional<Responsable> std= repository.findById(id);
        if(std.isPresent()){
            Responsable s=std.get();
            s.setNom(responsable.getNom());
            return repository.save(s);
        }
        else
            return null;
    }

    @DeleteMapping("/responsable/{id}")
    public String deleteResponsable(@PathVariable Integer id){
        repository.deleteById(id);
        return "Document Deleted";
    }






}


