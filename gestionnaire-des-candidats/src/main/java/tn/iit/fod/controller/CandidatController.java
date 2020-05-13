package tn.iit.fod.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.iit.fod.model.Candidat;
import tn.iit.fod.repository.CandidatRepository;
import tn.iit.fod.service.UploadService;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("candidats")
public class CandidatController {

    @Autowired
    CandidatRepository repository;

    @Autowired
    UploadService uploadService;

    @Autowired
    PasswordEncoder passwordEncoder;


    @PostMapping("add")
    public Candidat addCandidat(@RequestBody Candidat candidat) {
        candidat.setMotpasse(passwordEncoder.encode(candidat.getMotpasse()));
        return repository.save(candidat);
    }

    @GetMapping("all")
    public List<Candidat> getAllCandidat() {
        Iterator<Candidat> iterator = repository.findAll().iterator();
        List<Candidat> candidats = new ArrayList<Candidat>();
        while (iterator.hasNext()) {
            candidats.add(iterator.next());
        }
        return candidats;
    }


    @GetMapping("{id}")
    public Optional<Candidat> getCandidat(@PathVariable String id) {
        return repository.findById(id);
    }


    @PutMapping("{id}")
    public Candidat updateCandidat(@PathVariable String id, @RequestBody Candidat candidat) {
        repository.findById(id).ifPresent(old -> candidat.setMotpasse(old.getMotpasse()));
        candidat.setId(id);
        return repository.save(candidat);
    }

    @DeleteMapping("{id}")
    public String deleteCandidat(@PathVariable String id) {
        repository.deleteById(id);
        return "Document Deleted";
    }

    @PostMapping("upload")
    public String uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        return this.uploadService.save(file);
    }

    @GetMapping("file/{file}")
    public void get(@PathVariable("file") String file, HttpServletResponse res) throws IOException {
        this.uploadService.get(file, res);
    }


}
