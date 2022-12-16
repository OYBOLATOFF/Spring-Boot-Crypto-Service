# CryptoProject
 Spring Boot сервис-приложение для шифрования текста. Специальный Rest API контроллер перехватывает запросы, шифрует полученный в JSON исходный текст и возвращает его зашифрованный вид, который далее посредством JavaScript отображается на странице. Сама схема проекта выглядит так. Изначальная версия взаимодействовала со сторонним Django Rest API приложением, однако впоследствие от реализации пришлось отказаться (тем не менее код удалять не стал, я лишь его закомментировал)

![Image alt](https://raw.githubusercontent.com/OYBOLATOFF/Spring-Boot-Crypto-Service/main/src/main/resources/static/images/scheme.jpg)
Поскольку скрипт для создания БД я выгружать не стал (а значит и приложение не запустится), продемонстрирую пример работы в .gif формате:
![Gid Example](./src/main/resources/static/images/encrypt_example.gif?raw=true)
