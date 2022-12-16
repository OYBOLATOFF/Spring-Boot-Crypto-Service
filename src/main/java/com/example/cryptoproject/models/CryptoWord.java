package com.example.cryptoproject.models;

import com.example.cryptoproject.utils.CryptUtil;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "downloadedfile")
@NoArgsConstructor
@AllArgsConstructor
@Setter @Getter
public class CryptoWord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "source_text")
    private String sourceText;

    @Column(name = "encrypted_text")
    private String encryptedText;
    @Column(name = "date")
    private Timestamp timestamp;

    @Column(name = "crypt_key")
    private String key;

    public CryptoWord(String sourceText, String encryptedText, String key) {
        this.sourceText = sourceText;
        this.encryptedText = encryptedText;
        this.timestamp = new Timestamp( System.currentTimeMillis() );
        this.key = key.toString();
    }

    @Override
    public String toString() {
        return String.format("Дата шифрования: %s\nИсходный текст: %s\nЗашифрованный XOR текст: %s\nКлюч шифрования: %s",
                getTimestamp().toLocaleString(), getSourceText(), getEncryptedText(), getKey());
    }
}
