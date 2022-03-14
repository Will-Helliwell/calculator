document.addEventListener('DOMContentLoaded', init());

function init() {
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
}

function handleClick() {
    let textAddition = this.innerText;
    updateDisplay(textAddition);
}

function updateDisplay(textAddition) {
    let display = document.querySelector('.display');
    let displayText = display.innerText;
    displayText = displayText + " " + textAddition;
    display.innerText = displayText;
}