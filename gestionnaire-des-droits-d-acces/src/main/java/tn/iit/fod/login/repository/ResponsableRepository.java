package tn.iit.fod.login.repository;



import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import tn.iit.fod.login.model.Recruteur;
import tn.iit.fod.login.model.Responsable;

import java.util.Optional;


@Repository
public interface ResponsableRepository extends ElasticsearchRepository<Responsable, String> {
    Optional<Responsable> findByNomUtilisateur(String nomUtilisateur);

}
