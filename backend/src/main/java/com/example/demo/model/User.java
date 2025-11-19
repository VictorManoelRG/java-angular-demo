package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users") // nome da tabela no banco
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto incremento no Postgres
    private Long id;
    private String nome;
    private Integer idade;
    private String sexo;
    private Integer cpf;

    public User() {}

    public User(Long id, String nome, Integer idade, String sexo, Integer cpf){
        this.id = id;
        this.nome=nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cpf=cpf;
    }

    public Long getId() { return id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public Integer getIdade() { return idade; }
    public void setIdade(Integer idade) { this.idade = idade; }

    public String getSexo() { return sexo; }
    public void setSexo(String sexo) { this.sexo = sexo; }

    public Integer getCpf() { return cpf; }
    public void setCpf(Integer cpf) { this.cpf = cpf; }
}
