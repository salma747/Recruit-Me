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
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("responsableRH")
public class ResponsableController {


    @Autowired
    ResponsableRepository repository;


    @PostMapping("add")
    public Responsable addResponsableRH(@RequestBody Responsable responsableRH ){

        return repository.save(responsableRH);
    }

    @GetMapping("all")
    public List<Responsable> getAllResponsable(){
        Iterator<Responsable> iterator= repository.findAll().iterator();
        List<Responsable> responsables=new ArrayList<Responsable>();
        while(iterator.hasNext()){
            responsables.add(iterator.next());
        }
        return responsables;
    }


    @GetMapping("{id}")
    public Optional<Responsable> getResponsable(@PathVariable Integer id){
        return repository.findById(id);
    }


    @PutMapping("{id}")
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

    @DeleteMapping("{id}")
    public String deleteResponsable(@PathVariable Integer id){
        repository.deleteById(id);
        return "Document Deleted";
    }






}


