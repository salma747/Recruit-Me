package tn.iit.fod.login.repository;



import org.apache.catalina.User;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import tn.iit.fod.login.model.Candidat;

import java.util.Optional;

@Repository
public interface CandidatRepository extends ElasticsearchRepository<Candidat, String> {
    Optional<Candidat> findByNomUtilisateur(String nomUtilisateur);
}
