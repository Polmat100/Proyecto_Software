package com.umarket.user_service.service;


import com.umarket.user_service.controller.dto.UserRegisterDTO;
import com.umarket.user_service.models.User;

public interface UserService{
    public User save(UserRegisterDTO registerDTO);
}
