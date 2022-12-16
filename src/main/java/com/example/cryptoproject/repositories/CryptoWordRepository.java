package com.example.cryptoproject.repositories;

import com.example.cryptoproject.models.CryptoWord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CryptoWordRepository extends JpaRepository<CryptoWord, Integer> {
}
