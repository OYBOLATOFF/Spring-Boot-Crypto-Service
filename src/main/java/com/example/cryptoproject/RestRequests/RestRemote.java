package com.example.cryptoproject.RestRequests;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Component
public class RestRemote {

    public static RestTemplate restTemplate = new RestTemplate();
    public static String URL = "http://25.68.200.115:8000/api/v1/xor_encrypt/";
    public static ObjectMapper objectMapper = new ObjectMapper();

    public String sendRequestToEncrypt(String sourceText, String key) throws JsonProcessingException {
        // Создание JSON для передачи инфы в запросе
        Map<String, String> json = new HashMap<>();
        json.put("input_text", sourceText);
        json.put("key", key);

        // Генерирую содержимое запроса, помещая в него BODY с инфой для шифрования
        HttpEntity< Map<String, String> > httpEntity = new HttpEntity<>(json);

        // Получаем ответ от сервера, принявшего POST запрос
        String response = restTemplate.postForObject(URL, httpEntity, String.class);

        // Парсим ответ в JSON
        JsonNode jsonNode = objectMapper.readTree(response);

        // Извлекаем зашифрованный текст - ответ
        String encryptedText = jsonNode.get("encrypted_text").textValue();

        return encryptedText;
    }

}
