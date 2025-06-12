package com.example.demo.controller;

import com.example.demo.entity.PurchaseRequest;
import com.example.demo.repository.PurchaseRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/purchase-requests")
public class PurchaseRequestController {

    @Autowired
    private PurchaseRequestRepository repo;

    @PostMapping
    public PurchaseRequest createRequest(@RequestBody PurchaseRequest request, Principal principal) {
        request.setFarmerUsername(principal.getName());
        request.setStatus("pending");
        request.setMiddlemanUsername(null);
        return repo.save(request);
    }

    @GetMapping
    public List<PurchaseRequest> getMyPendingRequests(Principal principal) {
        return repo.findByFarmerUsernameAndStatus(principal.getName(), "pending");
    }

    @DeleteMapping("/{id}")
    public void deleteRequest(@PathVariable Long id, Principal principal) {
        PurchaseRequest request = repo.findById(id).orElseThrow();
        if (request.getFarmerUsername().equals(principal.getName())) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Unauthorized deletion attempt");
        }
    }

    @GetMapping("/all-pending")
    public List<PurchaseRequest> allPendingRequests() {
        return repo.findByStatus("pending");
    }

//    @PutMapping("/{id}/status")
//    public PurchaseRequest updateStatus(@PathVariable Long id, @RequestParam String status) {
//        PurchaseRequest pr = repo.findById(id).orElseThrow();
//        pr.setStatus(status);
//        return repo.save(pr);
//    }

    @PutMapping("/{id}/status")
    public PurchaseRequest updateStatus(@PathVariable Long id, @RequestParam String status) {
        // Validate status (case-insensitive)
        String normalizedStatus = status.trim().toLowerCase();
        if (!normalizedStatus.equals("pending") && !normalizedStatus.equals("fulfilled")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Status must be 'pending' or 'fulfilled'");
        }

        // Find the PurchaseRequest
        PurchaseRequest pr = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "PurchaseRequest with id " + id + " not found"));

        // Get the authenticated middleman's username
        String middlemanUsername = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            middlemanUsername = ((UserDetails) principal).getUsername();
        }

        // Update status and middlemanUsername
        pr.setStatus(normalizedStatus);
        if (normalizedStatus.equals("fulfilled")) {
            pr.setMiddlemanUsername(middlemanUsername);
        } else {
            pr.setMiddlemanUsername(null); // Set to null for pending (unaccept)
        }

        return repo.save(pr);}


    @GetMapping("/pending")
    public List<PurchaseRequest> getAllPendingRequests() {
        return repo.findByStatus("pending");
    }
}