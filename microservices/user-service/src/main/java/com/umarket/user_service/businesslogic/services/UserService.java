package com.umarket.user_service.businesslogic.services;

import com.umarket.user_service.businesslogic.models.User;
import com.umarket.user_service.dataaccess.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    public User registerUser(User user) {
        // Verificar si el email ya está registrado
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("El email ya está registrado");
        }

        // Cifrar la contraseña antes de guardarla
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Establecer la fecha de creación
        user.setDateCreation(LocalDateTime.now());

        return userRepository.save(user);
    }


}
