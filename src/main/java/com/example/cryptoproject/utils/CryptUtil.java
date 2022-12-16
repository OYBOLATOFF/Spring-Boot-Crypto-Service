package com.example.cryptoproject.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

public class CryptUtil {

    public static String encrypt(String message, String key_word) {
        StringBuilder result = new StringBuilder();
        int key = key_word.hashCode();
        for (char symbol: message.toCharArray()) {
            result.append(
                    (char) (symbol ^ key)
            );
        }

        return result.toString();
    }

}
