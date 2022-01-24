function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return Math.round((a / b) * 100) / 100;
}

function operate(operator, a, b) {
    if(operator === '+') return add(a, b);
    else if(operator === '-') return subtract(a, b);
    else if(operator === 'x') return multiply(a, b);
    else if(operator === '/') return divide(a, b);
}

let buttonContainer = document.querySelector('.button-container');
let calcButtons = Array.from(buttonContainer.children);
let display = document.querySelector('.display');
let firstValue = '';
let secondValue = '';
let firstNumber = true;
let calcOperation = '';

calcButtons.forEach(element => element.addEventListener('click', () => {
    

    if(element.textContent === '+' || element.textContent === '-' || element.textContent === 'x' || element.textContent === '/') {
        display.textContent = '';
        firstNumber = false;
        calcOperation = element.textContent;
    } else if(element.textContent === '=' && firstValue !== '' && secondValue !== ''){
        firstValue = operate(calcOperation, firstValue, secondValue);
        display.textContent = firstValue;
        secondValue = '';
    } else if(!firstNumber) {
        secondValue += element.textContent;
        display.textContent = secondValue;
        console.log(secondValue);
    } else if(firstNumber) {
        firstValue += element.textContent;
        display.textContent = firstValue;
        console.log(firstValue);
        console.log(firstNumber)
    } 
    
}));

