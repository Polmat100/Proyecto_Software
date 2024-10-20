package com.umarket.user_service.controller;


import com.umarket.user_service.controller.dto.UserRegisterDTO;
import com.umarket.user_service.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/register")
public class RegisterUserController {
    private UserService userService;
    public RegisterUserController(UserService userService) {
        super();
        this.userService = userService;
    }
    @ModelAttribute("user")
    public UserRegisterDTO returnNewUser() {
        return new UserRegisterDTO();
    }
    @GetMapping
    public String ShowRegisterForm()
    {
        return "register";
    }
    @PostMapping
    public String processRegisterForm(@ModelAttribute("user") UserRegisterDTO userRegisterDTO)
    {
        userService.save(userRegisterDTO);
        return "redirect:/register?congratulations";
    }
}
