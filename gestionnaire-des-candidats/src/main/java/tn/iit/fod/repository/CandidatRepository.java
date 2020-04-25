package tn.iit.fod.repository;



import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import tn.iit.fod.model.Candidat;
@Repository
//@RepositoryRestResource(path = "candidats", collectionResourceRel = "candidats")
public interface CandidatRepository extends ElasticsearchRepository<Candidat, String> {
}
