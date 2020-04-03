package tn.iit.fod.recruteurrepository;


import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import tn.iit.fod.recruteurmodel.Recruteur;


@Repository
public interface RecruteurRepository extends ElasticsearchRepository<Recruteur, Integer> {

}
