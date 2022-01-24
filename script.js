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
    return Math.round((a / b) * 100000) / 100000;
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
    // operators and equals break equation if input before first number
    // equals breaks if input before both numbers are entered (wording here might mess you up)

    if(element.textContent === '+' || element.textContent === '-' || element.textContent === 'x' || element.textContent === '/') {
        
        firstNumber = false;
        calcOperation = element.textContent;
    } else if(element.textContent === '=' && firstValue !== '' && secondValue !== ''){
        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);
        if(secondValue == 0 && calcOperation === '/') {
            clearCalc();
            display.textContent = 'lol'; 
        } else {
            display.textContent = operate(calcOperation, firstValue, secondValue);
            firstValue = display.textContent;   
        }
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

function clearCalc() {
    firstValue = '';
    firstNumber = true;
    secondValue = '';
    calcOperation = '';
    display.textContent = 'Enter a number:';
}

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearCalc);

