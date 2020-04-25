package tn.iit.fod.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "candidat", type = "default")
public class Candidat {

    @Id
    private String id;
    private String nomUtilisateur;
    private String adresseEmail;
    private String motpasse;
    private String nom;
    private String prenom;
    private String dateNaissance;
    private String adresse;
    private String diplome;
    private String nombreAnneeExperience;
    private String posteSouhaite;

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

    public String getDiplome() {
        return diplome;
    }

    public void setDiplome(String diplome) {
        this.diplome = diplome;
    }

    public String getNombreAnneeExperience() {
        return nombreAnneeExperience;
    }

    public void setNombreAnneeExperience(String nombreAnneeExperience) {
        this.nombreAnneeExperience = nombreAnneeExperience;
    }

    public String getPosteSouhaite() {
        return posteSouhaite;
    }

    public void setPosteSouhaite(String posteSouhaite) {
        this.posteSouhaite = posteSouhaite;
    }


    public Candidat(String id, String nomUtilisateur, String adresseEmail, String motpasse, String nom, String prenom, String dateNaissance, String adresse, String diplome, String nombreAnneeExperience, String posteSouhaite) {
        super();
        this.id = id;
        this.nomUtilisateur = nomUtilisateur;
        this.adresseEmail = adresseEmail;
        this.motpasse = motpasse;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.adresse = adresse;
        this.diplome = diplome;
        this.nombreAnneeExperience = nombreAnneeExperience;
        this.posteSouhaite = posteSouhaite;
    }

    public Candidat(){}

}

