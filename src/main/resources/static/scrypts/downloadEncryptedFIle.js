// Функция генерирует дату формата '[Дата] [Время]' для названия файла
function getDayForFileName() {
    var curDate = new Date();
    return curDate.toLocaleDateString()+' '+curDate.toLocaleTimeString()
}

// Кнопка для скачивания файла
var downloadButton = document.getElementById('download_encrypted_text_btn')
downloadButton.addEventListener('click', () => {
    if (encryptedTextArea.value == '') {
        downloadButton.disabled = true;
        startAnimation(errorMessage, 'Текстовые окна не должны быть пусты', false, 30);
        return null;
    } else if (key_input.value == '') {
        downloadButton.disabled = true;
        startAnimation(errorMessage, 'Необходимо выбрать ключ для шифрования', false, 30);
        return null;
    }
    var downloadFileURL = new URL('http://25.12.237.67:8080/downloadEncryptedText')

    var key = key_input.value;
    downloadFileURL.searchParams.set('text', sourceTextArea.value);
    downloadFileURL.searchParams.set('key', key);
    download(downloadFileURL, getDayForFileName()+'.txt')
})

const download = (path, filename) => {
    // Create a new link
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = filename;

    // Append to the DOM
    document.body.appendChild(anchor);

    // Trigger `click` event
    anchor.click();

    // Remove element from DOM
    document.body.removeChild(anchor);
};