package com.umarket.user_service.controller.dto;



public class UserRegisterDTO {
    private Long id;
    private String name;
    private String lastname;
    private String cell;
    private String email;
    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCell() {
        return cell;
    }

    public void setCell(String cell) {
        this.cell = cell;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public UserRegisterDTO(String password, String email, String cell, String lastname, String name, Long id) {
        super();
        this.password = password;
        this.email = email;
        this.cell = cell;
        this.lastname = lastname;
        this.name = name;
        this.id = id;
    }

    public UserRegisterDTO(String name, String lastname, String cell, String email, String password) {
        super();
        this.name = name;
        this.lastname = lastname;
        this.cell = cell;
        this.email = email;
        this.password = password;
    }

    public UserRegisterDTO(String email) {
        super();
        this.email = email;
    }
    public UserRegisterDTO() {}
}
