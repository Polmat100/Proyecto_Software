package com.umarket.user_service.repository;


import com.umarket.user_service.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
public User findByEmail(String email);
}
