document.addEventListener('DOMContentLoaded', init());

function init() {
    const operators = ["/", "*", "+", "-"];
    // const operatorsRegEx = new RegExp('\+|\-|\/|\*');
    const operatorsRegEx = new RegExp('(\\+|\\-|\\/|\\*|\\=)');
    let sumString = "";

    var display = document.querySelector('.display');
    let numberButtons = document.querySelectorAll('.button.number');
    let operatorButtons = document.querySelectorAll('.button.operator');
    let equalsButton = document.querySelector('#equals');

    numberButtons.forEach(numberButton => {
        numberButton.addEventListener('click', handleNumberButtonClick);
    });
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', handleOperatorButtonClick);
    });
    equalsButton.addEventListener('click', handleEqualsButtonClick);


    function handleNumberButtonClick() {
        deselectAllButtons();
        let textAddition = this.innerText;
        updateDisplay(textAddition);
    }

    function handleOperatorButtonClick() {
        this.classList.add('clicked');
        let displayString = display.innerText;
        let operator = document.querySelector('button.operator.clicked').innerText;
        sumString += (displayString + operator);
        updateDisplay("", true);
    }

    function handleEqualsButtonClick() {
        let displayString = display.innerText;
        console.log('sumString before' + sumString);
        sumString += displayString;
        console.log('sumString after' + sumString);
        result = calculateSumString(sumString);
        updateDisplay(result, true);
        sumString = "";
        console.log('sumString after calculation' + sumString);
    }

    function deselectAllButtons() {
        let selectedButtons = document.querySelectorAll('.clicked');
        selectedButtons.forEach(selectedButton => {
            selectedButton.classList.remove('clicked');
        });
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

    function calculateSumString(sumStr) {
        sumStr += '=';
        sumArr = sumStr.split(operatorsRegEx).filter(element => {return element != ""});
        console.log(sumArr);
        operators.forEach((operator) => {
            console.log(`operator = ` + operator);
            sumArrTemp = [];
            indexesProcessed = [];
            sumArr.forEach((element, index) => {
                console.log('element = ' + element);
                // for priority operator
                if (element === operator) {
                    console.log('operator match' + operator);
                    // if previous number has already been processed
                    if (indexesProcessed.includes(index - 1)) {
                        console.log('previous number processed');
                        lastIndex = sumArrTemp.length - 1;
                        console.log('last index = ' + lastIndex);
                        console.log('last index value = ' + sumArrTemp[lastIndex]);
                        console.log('sumArrTemp before = ' + sumArrTemp);
                        sumArrTemp[lastIndex] = calculate(sumArrTemp[lastIndex], operator, sumArr[index + 1]);
                        console.log('sumArrTemp after = ' + sumArrTemp);
                        indexesProcessed.push(index, index + 1);
                    } else {
                        let result = calculate(sumArr[index - 1], sumArr[index], sumArr[index + 1]);
                        sumArrTemp.push(result);
                        indexesProcessed.push(index - 1, index, index + 1);
                    }
                // for non-priority operators
                } else if (operators.includes(element) && element != operator) {
                    if (indexesProcessed.includes(index - 1)) {
                        sumArrTemp.push(sumArr[index]);
                        indexesProcessed.push(index);
                    } else {
                        sumArrTemp.push(sumArr[index - 1], sumArr[index]);
                        indexesProcessed.push(index - 1, index);
                    }
                } else if (element === "=") {
                    if (!indexesProcessed.includes(index - 1)) {
                        sumArrTemp.push(sumArr[index - 1]);
                        indexesProcessed.push(index);
                    };
                };
                console.log('sumArrTemp = ' + sumArrTemp);
                console.log(sumArrTemp);
            });
            sumArr = sumArrTemp;
            sumArr.push('=');
        });

        sumArr = sumArr.filter(element => {return element != '='});
        return sumArr.join("");
    }

}

function calculate(number1, operator, number2) {
    switch (operator) {
        case "+":
            return parseInt(number1) + parseInt(number2);
            break;
        case "-":
            return parseInt(number1) - parseInt(number2);
            break;
        case "/":
            return parseInt(number1) / parseInt(number2);
            break;
        case "*":
            return parseInt(number1) * parseInt(number2);
            break;
        default:
            break;
    }
}

// iPhone calculator behaviour
// If 2 +- in a row, display initial answer once 2nd +- pressed
// Same for x/
// Same for x/ followed by -+
// +- followed by a x/ --> do not evaluate until the next +- or = is pressed
    // nb - if multiple x/ are pressed, evaluate the x/ string as you go (but only include the
    // preceding +- once the next +- or = ae pressed


// 1+2*34*4-8