package com.umarket.user_service.dataaccess.repositories;

import com.umarket.user_service.businesslogic.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    boolean existsByEmail(String email);
}
