package com.iit.fod.recruitme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * @author iabb@aprico-consult.com
 * @since 18/04/2020
 */
@SpringBootApplication
public class UIApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(UIApplication.class, args);
    }
}
