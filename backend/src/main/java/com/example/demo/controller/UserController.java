package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @GetMapping("/hello")
    public String hello() {
        return "Olá do back-end!";
    }
}
