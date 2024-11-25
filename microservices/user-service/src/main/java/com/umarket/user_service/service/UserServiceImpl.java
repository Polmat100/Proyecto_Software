package com.umarket.user_service.service;



import com.umarket.user_service.controller.dto.UserRegisterDTO;
import com.umarket.user_service.models.Role;
import com.umarket.user_service.models.User;
import com.umarket.user_service.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class UserServiceImpl implements UserService  {

    private UserRepository userRepository;
    public UserServiceImpl(UserRepository userRepository)
    {
        super();
        this.userRepository = userRepository;
    }

    @Override
    public User save(UserRegisterDTO registerDTO) {
        User user = new User(registerDTO.getName(),
                registerDTO.getLastname(),
                registerDTO.getCell(),
                registerDTO.getEmail(),
                registerDTO.getPassword(), Arrays.asList(new Role("ROLE_USER")));
        return userRepository.save(user);
    }

}
