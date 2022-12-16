// Блок отвечает за автоматическое обновление текста во втором окне
const sourceTextArea = document.getElementById('area')
const encryptedTextArea = document.getElementById('encrypted_text_result')
const key_input = document.getElementById('crypt_key_input')
sourceTextArea.addEventListener('input', () => sendQueryToEncryptText(true))
encryptedTextArea.addEventListener('input', () => sendQueryToEncryptText(false))

sourceTextArea.disabled = true;
encryptedTextArea.disabled = true;

// Если человек изменит ключ, то срабатывает проверка
key_input.addEventListener('input', () => {
    sourceTextArea.disabled = key_input.value == '';

    encryptedTextArea.disabled = key_input.value == '';
    if (key_input.value != '') {
        sendQueryToEncryptText(true)
    }
})

// Функция sendQueryToEncryptText отправляет запросы на получение шифра
const xhr = new XMLHttpRequest();
function sendQueryToEncryptText(isEncryption) {
    var key = key_input.value;
    var message = (isEncryption)? sourceTextArea.value: encryptedTextArea.value
    var queryURL = (isEncryption)? new URL('http://localhost:8080/crypt'): new URL('http://localhost:8080/decrypt')
    var functionToExecute = (isEncryption)? setEncryptedText: setDecryptedText

    queryURL.searchParams.set('text', message);
    queryURL.searchParams.set('key', key);
    xhr.open('GET', queryURL, true); xhr.send();
    functionToExecute()
}

// Функция setEncryptedText ждёт получения шифра и устанавливает его в правое поле
async function setEncryptedText() {
    xhr.onreadystatechange = function() {
        encryptedTextArea.value = xhr.responseText
    }
}

// Функция setDecryptedText() ждёт получение расшифрованного текста и устанавливает его в левое поле
async function setDecryptedText() {
    xhr.onreadystatechange = function() {
        sourceTextArea.value = xhr.responseText
    }
}