document.addEventListener('DOMContentLoaded', init());

function init() {
    var display = document.querySelector('.display');
    let sumString = "";
    let numberButtons = document.querySelectorAll('.button.number');
    let operatorButtons = document.querySelectorAll('.button.operator');

    numberButtons.forEach(numberButton => {
        numberButton.addEventListener('click', handleNumberButtonClick);
    });
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', handleOperatorButtonClick);
    });


    function handleNumberButtonClick() {
        let selectedButtons = document.querySelectorAll('.clicked');
        selectedButtons.forEach(selectedButton => {
            selectedButton.classList.remove('clicked');
        });
        let textAddition = this.innerText;
        updateDisplay(textAddition);
    }

    function handleOperatorButtonClick() {
        this.classList.add('clicked');
        updateSumString();
        updateDisplay("", true);
    }

    function updateDisplay(textAddition, overwrite) {
        let displayText = "";

        if (overwrite) {
            displayText = textAddition;
        } else {
            displayText = display.innerText;
            displayText = displayText + textAddition;
        }
        display.innerText = displayText;
    }

    function updateSumString() {
        let displayString = display.innerText;
        console.log(displayString);
        sumString += displayString;
        console.log(sumString);
    }

}

// iPhone calculator behaviour
// If 2 +- in a row, display initial answer once 2nd +- pressed
// Same for x/
// Same for x/ followed by -+
// +- followed by a x/ --> do not evaluate until the next +- or = is pressed
    // nb - if multiple x/ are pressed, evaluate the x/ string as you go (but only include the
    // preceding +- once the next +- or = ae pressed