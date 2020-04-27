package tn.iit.fod.responsablecontroller;



import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.web.bind.annotation.*;
import tn.iit.fod.responsablemodel.Responsable;
import tn.iit.fod.responsablerepository.ResponsableRepository;

@RestController
@RequestMapping("responsableRH")
public class ResponsableController {


    @Autowired
    ResponsableRepository repository;


    @PostMapping("add")
    public Responsable addResponsableRH(@RequestBody Responsable responsableRH ){

        return repository.save(responsableRH);
    }

    @GetMapping("all")
    public Iterable<Responsable> getAllResponsable(){
        return repository.findAll();
    }


    @GetMapping("{id}")
    public Optional<Responsable> getResponsable(@PathVariable String id){
        return repository.findById(id);
    }


    @PutMapping("{id}")
    public Responsable updateResponsable(@PathVariable String id, @RequestBody Responsable responsable) {
        responsable.setId(id);
        return repository.save(responsable);
    }

//    @PutMapping("{id}")
//    public Responsable updateResponsable(@PathVariable String id,@RequestBody Responsable responsable){
//        Optional<Responsable> std= repository.findById(id);
//        if(std.isPresent()){
//            Responsable s=std.get();
//            s.setNom(responsable.getNom());
//            return repository.save(s);
//        }
//        else
//            return null;
//    }

    @DeleteMapping("{id}")
    public String deleteResponsable(@PathVariable String id){
        repository.deleteById(id);
        return "Document Deleted";
    }






}


