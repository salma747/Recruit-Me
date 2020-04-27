package tn.iit.fod.responsablerepository;



import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import tn.iit.fod.responsablemodel.Responsable;


@Repository
public interface ResponsableRepository extends ElasticsearchRepository<Responsable, String> {
}
