package com.umarket.user_service.models;

import jakarta.persistence.*;

import java.util.Collection;

@Entity
@Table(name = "users", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "lastname")
    private String lastname;

    private String cell;
    private String email;
    private String password;

    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id",referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id",referencedColumnName = "id")
    )
    private Collection<Role> roles;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getCell() {return cell;}

    public void setCell(String cell) {this.cell = cell;}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }

    public User (Long id, String name, String lastname, String cell, String email, String password, Collection<Role> roles)
    {
        super();
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.cell = cell;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
    public User(String name, String lastname, String cell, String email, String password, Collection<Role> roles)
    {
        super();
        this.name = name;
        this.lastname = lastname;
        this.cell = cell;
        this.email = email;
        this.password = password;
        this.roles = roles;

    }

    public User() {

    }
}
