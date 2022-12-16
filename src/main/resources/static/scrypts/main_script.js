function editTextAreaPlaceholder(message = '') {
    sourceTextArea.placeholder = message
    encryptedTextArea.placeholder = message
}

// Настраиваю удаление placeholder при фокусе на textArea
sourceTextArea.addEventListener('focus', () => editTextAreaPlaceholder())
encryptedTextArea.addEventListener('focus', () => editTextAreaPlaceholder())

// Настраиваю восстанволение placeholder при отдалении фокуса, если поля пустые
sourceTextArea.addEventListener('blur', () => {
    ( sourceTextArea.value == '' )? editTextAreaPlaceholder('Начните что-то вводить...'): editTextAreaPlaceholder()
})
encryptedTextArea.addEventListener('blur', () => {
    ( encryptedTextArea.value == '' )? editTextAreaPlaceholder('Начните что-то вводить...'): editTextAreaPlaceholder()
})


// Весь код внизу предназначен для анимации
var headerTitle = document.querySelector('.img_logo')
var exampleOfTitle = 'Проект-шифратор Рамазана и Алексея'
var currentIndex = 0
var isForward = true

var animationLoop = setInterval(animateHeaderText, 50)
async function animateHeaderText() {
    (isForward)? ++currentIndex: --currentIndex;
    headerTitle.textContent = exampleOfTitle.substring(0, currentIndex )+'_'

    if ( currentIndex == 0 || currentIndex == exampleOfTitle.length ) {
        isForward = !isForward
        clearInterval(animationLoop)

        setTimeout(() => {
            animationLoop = setInterval(animateHeaderText, 50)
        }, 2000)
    }
}