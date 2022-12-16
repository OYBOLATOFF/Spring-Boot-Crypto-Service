function editTextAreaPlaceholder(message = '') {
    sourceTextArea.placeholder = message
    encryptedTextArea.placeholder = message
}

var headerTitle = document.querySelector('.img_logo')
startAnimation(headerTitle, 'Проект-шифратор Рамазана и Алексея')

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

var errorMessage = document.querySelector('.error_message')
// startAnimation(errorMessage, 'Oh no! Something wet wrong!', false)

function startAnimation(headerTitle, exampleOfTitle, isInfinite=true, speed=50, currentIndex=0, isForward=true) {
    // Весь код внизу предназначен для анимации
    var animationLoop = setInterval(() => animateHeaderText(isInfinite), speed)
    async function animateHeaderText(isInfinite=true) {
        (isForward)? ++currentIndex: --currentIndex;
        headerTitle.textContent = exampleOfTitle.substring(0, currentIndex )+'_'
    
        if ( currentIndex == 0 || currentIndex == exampleOfTitle.length ) {
            isForward = !isForward
            clearInterval(animationLoop)
    
            if (isInfinite || currentIndex == exampleOfTitle.length) {
                setTimeout(() => {
                    animationLoop = setInterval(() => animateHeaderText(isInfinite), speed)
                }, 2000)
            } else {
                headerTitle.textContent = '';
                downloadButton.disabled = false;
            }
        }
    }
}