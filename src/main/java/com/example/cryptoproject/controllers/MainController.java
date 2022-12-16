package com.example.cryptoproject.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping
    public String mainPage() {
        return "main_page";
    }

    @GetMapping("/info")
    public String infoPage() {
        return "info_page";
    }

}
