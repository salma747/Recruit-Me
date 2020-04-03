package tn.iit.fod.gestionnaire.test.techniques.testrespository;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import tn.iit.fod.candidats.model.Candidat;
import tn.iit.fod.gestionnaire.test.techniques.testmodel.Test;


@Repository
public interface TestRepository extends ElasticsearchRepository<Test, Integer> {
}
