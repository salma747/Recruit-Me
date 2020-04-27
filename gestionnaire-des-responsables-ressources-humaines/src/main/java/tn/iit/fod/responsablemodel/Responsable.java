package tn.iit.fod.responsablemodel;


import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "responsable", type = "default")
public class Responsable {

    @Id
    private String id;
    private String nomUtilisateur;
    private String adresseEmail;
    private String motpasse;
    private String nom;
    private String prenom;
    private String dateNaissance;
    private String adresse;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNomUtilisateur() {
        return nomUtilisateur;
    }

    public void setNomUtilisateur(String nomUtilisateur) {
        this.nomUtilisateur = nomUtilisateur;
    }

    public String getAdresseEmail() {
        return adresseEmail;
    }

    public void setAdresseEmail(String adresseEmail) {
        this.adresseEmail = adresseEmail;
    }

    public String getMotpasse() {
        return motpasse;
    }

    public void setMotpasse(String motpasse) {
        this.motpasse = motpasse;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(String dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }


//    public Responsable(String id, String nomUtilisateur, String adresseEmail, String motpasse, String nom, String prenom, String dateNaissance, String adresse) {
//        super();
//       this.id = id;
//        this.nomUtilisateur = nomUtilisateur;
//        this.adresseEmail = adresseEmail;
//        this.motpasse = motpasse;
//        this.nom = nom;
//        this.prenom = prenom;
//        this.dateNaissance = dateNaissance;
//        this.adresse = adresse;
//
//    }
    public Responsable(){}
}
