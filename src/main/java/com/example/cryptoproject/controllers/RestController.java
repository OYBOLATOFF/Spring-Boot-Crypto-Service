package com.example.cryptoproject.controllers;

import com.example.cryptoproject.RestRequests.RestRemote;
import com.example.cryptoproject.models.CryptoWord;
import com.example.cryptoproject.services.CryptoWordService;
import com.example.cryptoproject.utils.CryptUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @Autowired
    private CryptoWordService cryptoWordService;

    @Autowired
    private RestRemote restRemote;

    @GetMapping("/crypt")
    public String cryptText(@RequestParam("text") String sourceText, @RequestParam("key") String key) throws JsonProcessingException {
//        String encryptedText = restRemote.sendRequestToEncrypt(sourceText, key);
        String encryptedText = CryptUtil.encrypt(sourceText, key);
        CryptoWord word = new CryptoWord(sourceText, encryptedText, key);
        return word.getEncryptedText();
    }

    @GetMapping("/decrypt")
    public String decryptText(@RequestParam("text") String encryptedText, @RequestParam("key") String key) throws JsonProcessingException {
//        String sourceText = restRemote.sendRequestToEncrypt(encryptedText, key);
        String sourceText = CryptUtil.encrypt(encryptedText, key);
        CryptoWord word = new CryptoWord(sourceText, encryptedText, key);
        return word.getSourceText();
    }

    @GetMapping("/downloadEncryptedText")
    public String downloadEncryptedText(@RequestParam("text") String sourceText, @RequestParam("key") String key) throws JsonProcessingException {
//        String encryptedText = cryptText(sourceText, key);
        String encryptedText = cryptText(sourceText, key);
        CryptoWord word = new CryptoWord(sourceText, encryptedText, key);
        cryptoWordService.save(word);
        return word.toString();
    }

}
