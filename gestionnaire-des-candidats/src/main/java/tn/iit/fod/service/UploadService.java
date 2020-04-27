package tn.iit.fod.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;
import java.util.UUID;

@Service
public class UploadService {

    @Value("${upload.dir}")
    private String uploadDirectory;

    public String save(MultipartFile multipartFile) throws IOException {
        UUID uuid = UUID.randomUUID();
        File file = new File(uploadDirectory, uuid.toString());
        file.mkdirs();
        file = new File(file, multipartFile.getOriginalFilename());
        multipartFile.transferTo(file);
        return uuid.toString();
    }

    public void get(String uuid, HttpServletResponse res) throws IOException {
        File file = new File(uploadDirectory, uuid);
        file = new File(file, file.list()[0]);
        res.setContentType(Files.probeContentType(file.toPath()));
        res.addHeader("Content-Disposition", String.format("attachment; filename=\"%s\"", file.getName()));
        Files.copy(file.toPath(), res.getOutputStream());
        res.getOutputStream().flush();
    }
}
