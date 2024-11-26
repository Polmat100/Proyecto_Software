package com.umarket.user_service.businesslogic.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class WebSecurityConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())  // Deshabilita CSRF si es necesario
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/register").permitAll()  // Ruta pública
                        .requestMatchers("/api/auth/list").permitAll()
                        .requestMatchers("/api/auth/delete/{id}").permitAll()
                        .requestMatchers("/api/auth/edit/{id}").permitAll()
                        .anyRequest().authenticated()  // Protege las demás rutas
                )
                .httpBasic(withDefaults());  // Nueva configuración para httpBasic

        return http.build();
    }
}
