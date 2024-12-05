package com.umarket.user_service.controllers;

import com.umarket.user_service.businesslogic.dtos.EditUserRequestDTO;
import com.umarket.user_service.businesslogic.dtos.LoginRequestDTO;
import com.umarket.user_service.businesslogic.dtos.LoginResponseDTO;
import com.umarket.user_service.businesslogic.dtos.RegisterRequestDTO;
import com.umarket.user_service.businesslogic.models.User;
import com.umarket.user_service.businesslogic.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO request){
        try {
            LoginResponseDTO response = userService.login(request);
            return ResponseEntity.ok(response);
        }catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponseDTO("Unauthorized", "", "","","",""));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequestDTO request) {
        try {
            userService.register(request);
            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PutMapping("/{userId}/edit")
    public ResponseEntity<User> editUserProfile(@PathVariable int userId, @RequestBody EditUserRequestDTO request) {
        try {
            User updatedUser = userService.editUserProfile(userId, request);
            return ResponseEntity.ok(updatedUser);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable int userId) {
        try {
            userService.deleteUser(userId);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

//    @GetMapping("/list")
//    public List<User> getAllUsers() {
//        return userRepository.findAll();
//    }


}
