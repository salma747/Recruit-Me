package tn.iit.fod.candidats.repository;


import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import tn.iit.fod.candidats.model.Candidat;


@Repository
public interface CandidatRepository extends ElasticsearchRepository<Candidat, Integer> {
}
