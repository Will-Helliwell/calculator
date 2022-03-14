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
    updateDisplay(textAddition);
}

function handleOperatorButtonClick() {
    console.log('operator clicked');
    let textAddition = this.innerText;
    updateDisplay(textAddition, true);
}

function updateDisplay(textAddition, overwrite) {
    let display = document.querySelector('.display');
    let displayText = "";

    if(overwrite){
        displayText = textAddition;
    } else {
        displayText = display.innerText;
        displayText = displayText + textAddition;
    }
    display.innerText = displayText;
}
