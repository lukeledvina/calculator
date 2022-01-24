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
    

    // Breaks when another number is input after operate is called, instead of immediatly being another operator

    if(element.textContent === '+' || element.textContent === '-' || element.textContent === 'x' || element.textContent === '/') {
        
        firstNumber = false;
        calcOperation = element.textContent;
    } else if(element.textContent === '=' && firstValue !== '' && secondValue !== ''){
        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);
        display.textContent = operate(calcOperation, firstValue, secondValue);
        firstValue = display.textContent;
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

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    firstValue = '';
    firstNumber = true;
    secondValue = '';
    calcOperation = '';
    display.textContent = 'Enter a number:';
})
