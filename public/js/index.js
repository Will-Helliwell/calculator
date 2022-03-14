document.addEventListener('DOMContentLoaded', init());

function init() {
    let numberButtons = document.querySelectorAll('.button.number');
    numberButtons.forEach(numberButton => {
        numberButton.addEventListener('click', handleNumberButtonClick);
    });
    let operatorButtons = document.querySelectorAll('.button.operator');
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', handleOperatorButtonClick);
    });
}

function handleNumberButtonClick() {
    let textAddition = this.innerText;
    addToDisplay(textAddition);
}

function handleOperatorButtonClick() {
    console.log('operator clicked');
}

function addToDisplay(textAddition) {
    let display = document.querySelector('.display');
    let displayText = display.innerText;
    displayText = displayText + textAddition;
    display.innerText = displayText;
}