package com.iit.Recruitme.Repository;
import java.util.List;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import com.iit.FOD.Recruitme.Model.*;
public interface Candidatrepository extends ElasticsearchRepository<Candidat,String> {

	List<Candidat> findByFirstname(String firstName);

	
}
