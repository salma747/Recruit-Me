package tn.iit.fod.gestionnaire.des.tests.testrepository;



import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import tn.iit.fod.candidats.model.Candidat;
import tn.iit.fod.gestionnaire.des.tests.testmodel.Test;


@Repository
public interface TestRepository extends ElasticsearchRepository<Test, Integer> {
}
