package com.example.cryptoproject.services;

import com.example.cryptoproject.models.CryptoWord;
import com.example.cryptoproject.repositories.CryptoWordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CryptoWordService {

    @Autowired
    private CryptoWordRepository cryptoWordRepository;

    public void save(CryptoWord cryptoWord) {
        cryptoWordRepository.save(cryptoWord);
    }

}
