package tn.iit.fod.login.repository;


import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import tn.iit.fod.login.model.Candidat;
import tn.iit.fod.login.model.Recruteur;

import java.util.Optional;


@Repository
public interface RecruteurRepository extends ElasticsearchRepository<Recruteur, String> {
    Optional<Recruteur> findByNomUtilisateur(String nomUtilisateur);
}
