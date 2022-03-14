document.addEventListener('DOMContentLoaded', init());

function init() {
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
}

function handleClick() {
    let display = document.querySelector('.display');
    let displayText = display.innerText;
    let textAddition = this.innerText;
    displayText = displayText + " " + textAddition;
    display.innerText = displayText;
}