package tn.iit.fod.gestionnaire.des.tests.testmodel;




import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "test", type = "default")
public class Test {

    @Id
    private String id;
    private String candidatName;
    private String resultat;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCandidatName() {
        return candidatName;
    }

    public void setCandidatName(String candidatName) {
        this.candidatName = candidatName;
    }

    public String getResultat() {
        return resultat;
    }

    public void setResultat(String resultat) {
        this.resultat = resultat;
    }

    public Test(String id, String candidatName, String resultat) {
        super();
        this.id = id;
        this.candidatName = candidatName;
        this.resultat = resultat;
    }

    public Test(){}

}

