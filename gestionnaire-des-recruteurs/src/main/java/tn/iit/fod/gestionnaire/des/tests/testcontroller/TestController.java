package tn.iit.fod.gestionnaire.des.tests.testcontroller;

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
import tn.iit.fod.gestionnaire.des.tests.testmodel.Test;
import tn.iit.fod.candidats.repository.CandidatRepository;
import tn.iit.fod.gestionnaire.des.tests.testrepository.TestRepository;

@RestController
public class TestController {

    @Autowired
    TestRepository repository;

    //@Bean
    //ElasticsearchTemplate template;


    @PostMapping("recruteur/test/add")
    public Test addTest(@RequestBody Test test ){
        return repository.save(test);
    }

    @GetMapping("recruteur/test/all")
    public List<Test> getTest(){
        Iterator<Test> iterator= repository.findAll().iterator();
        List<Test> tests=new ArrayList<Test>();
        while(iterator.hasNext()){
            tests.add(iterator.next());
        }
        return tests;
    }


    @GetMapping("recruteru/test/{id}")
    public Optional<Test> getTest(@PathVariable Integer id){
        return repository.findById(id);
    }


    @PutMapping("recruteur/test/{id}")
    public Test updateTest(@PathVariable Integer id,@RequestBody Test test){
        Optional<Test> std= repository.findById(id);
        if(std.isPresent()){
            Test s=std.get();
            s.setCandidatName(test.getCandidatName());
            return repository.save(s);
        }
        else
            return null;
    }

    @DeleteMapping("recruteur/test/{id}")
    public String deleteTest(@PathVariable Integer id){
        repository.deleteById(id);
        return "Document Deleted";
    }






}
