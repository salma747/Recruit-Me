package tn.iit.fod.login.repository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import tn.iit.fod.login.model.Responsable;

@Component
public class UserInitializer implements CommandLineRunner {
    private final ResponsableRepository responsableRepository;
    private final PasswordEncoder passwordEncoder;

    public UserInitializer(ResponsableRepository responsableRepository, PasswordEncoder passwordEncoder) {
        this.responsableRepository = responsableRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public void run(String... args) {
        if (this.responsableRepository.count() == 0) {
            Responsable user = new Responsable(
                    "admin",
                    "admin@root.com",
                    passwordEncoder.encode("adminadmin"),
                    "admin",
                    "admin");
            this.responsableRepository.save(user);
        }
    }

}
