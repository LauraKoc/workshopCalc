const startButton = document.querySelector('.start-button'),
    firstScreen = document.querySelector('.first-screen'),
    mainForm = document.querySelector('.main-form'),
    formCalculate = document.querySelector('.form-calculate'),
    endButton = document.querySelector('.end-button'),
    total = document.querySelector('.total'),
    fastRange = document.querySelector('.fast-range');

function showElement(elem) {
    elem.style.display = 'block';
}

function hideElement(elem) {
    elem.style.display = 'none';
}

//основная функция
function handlerCallBackForm(event) {
    const target = event.target;

    if (target.classList.contains('want-faster')) {
        target.chacked ? showElement(fastRange) : hideElement(fastRange);
    }
}

startButton.addEventListener('click', function () {
    showElement(mainForm);
    hideElement(firstScreen);
});

endButton.addEventListener('click', function () {
    for (const elem of formCalculate.elements) {
        if (elem.tagName === 'FIELDSET') {
            hideElement(elem);
        }
    }

    showElement(total);
});

formCalculate.addEventListener('change', handlerCallBackForm)