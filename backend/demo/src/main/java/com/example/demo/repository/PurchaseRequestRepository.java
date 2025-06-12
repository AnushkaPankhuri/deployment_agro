package com.example.demo.repository;

import com.example.demo.entity.PurchaseRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseRequestRepository extends JpaRepository<PurchaseRequest, Long> {
    List<PurchaseRequest> findByFarmerUsernameAndStatus(String farmerUsername, String status);
    List<PurchaseRequest> findByStatus(String status);
    List<PurchaseRequest> findByFarmerUsernameAndStatusIgnoreCase(String farmerUsername, String status);
    List<PurchaseRequest> findByMiddlemanUsernameAndStatus(String middlemanUsername, String status);

    List<PurchaseRequest> findByMiddlemanUsernameAndStatusIgnoreCase(String middlemanUsername, String fulfilled);
}
