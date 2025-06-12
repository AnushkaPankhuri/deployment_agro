package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@Entity
public class PurchaseRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String farmerUsername;
    private String cropType;
    private double quantity; // in KG
    private double price;
    private LocalDate requestDate;
    private LocalDate neededDate;

    private String status = "pending"; // default
    private String middlemanUsername;  // null initially

    // Getters and setters


}

