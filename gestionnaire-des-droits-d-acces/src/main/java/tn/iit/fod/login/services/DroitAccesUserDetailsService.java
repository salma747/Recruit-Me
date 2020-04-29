package tn.iit.fod.login.services;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tn.iit.fod.login.model.Candidat;
import tn.iit.fod.login.model.Recruteur;
import tn.iit.fod.login.model.Responsable;
import tn.iit.fod.login.repository.CandidatRepository;
import tn.iit.fod.login.repository.RecruteurRepository;
import tn.iit.fod.login.repository.ResponsableRepository;

import java.util.Optional;

@Service
@Qualifier("elasticSearchUsers")
public class DroitAccesUserDetailsService implements UserDetailsService {
    private final CandidatRepository candidatRepository;
    private final RecruteurRepository recruteurRepository;
    private final ResponsableRepository responsableRepository;

    public DroitAccesUserDetailsService(CandidatRepository candidatRepository, RecruteurRepository recruteurRepository, ResponsableRepository responsableRepository) {
        this.candidatRepository = candidatRepository;
        this.recruteurRepository = recruteurRepository;
        this.responsableRepository = responsableRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Candidat> candiadatOptional = candidatRepository.findByNomUtilisateur(username);
        if (candiadatOptional.isPresent()) {
            Candidat candidat = candiadatOptional.get();
            return User
                    .withUsername(candidat.getNomUtilisateur())
                    .password(candidat.getMotpasse())
                    .authorities("ROLE_CANDIDAT")
                    .build();
        }

        Optional<Recruteur> recruteurOptional = recruteurRepository.findByNomUtilisateur(username);
        if (recruteurOptional.isPresent()) {
            Recruteur recruteur = recruteurOptional.get();
            return User
                    .withUsername(recruteur.getNomUtilisateur())
                    .password(recruteur.getMotpasse())
                    .authorities("ROLE_RECRUTEUR")
                    .build();
        }

        Optional<Responsable> responsableOptional = responsableRepository.findByNomUtilisateur(username);
        if (responsableOptional.isPresent()) {
            Responsable responsable = responsableOptional.get();
            return User
                    .withUsername(responsable.getNomUtilisateur())
                    .password(responsable.getMotpasse())
                    .authorities("ROLE_RESPONSABLE")
                    .build();
        }


        throw new UsernameNotFoundException(username);
    }
}
