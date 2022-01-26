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
    return a / b;
}

function operate(operator, a, b) {
    if(operator === '+') return add(a, b);
    else if(operator === '-') return subtract(a, b);
    else if(operator === 'x') return multiply(a, b);
    else if(operator === '/') return divide(a, b);
}

let buttonContainer = document.querySelector('.button-container');
let calcButtons = Array.from(buttonContainer.children);
let display = document.querySelector('#display-text');
let decimalButton = document.querySelector('.decimal');

let firstValue = '';
let secondValue = '';
let firstNumber = true;
let calcOperation = '';
let lastButtonPressed = false;

calcButtons.forEach(element => element.addEventListener('click', () => {
    
    if(element.textContent === '.' && !(display.textContent.includes('.'))) {
        decimalButton.disabled = true;
    }

    if((element.textContent === '=' || element.textContent === '+' || element.textContent === '-' || element.textContent === 'x' || element.textContent === '/') && firstValue !== '' && secondValue !== ''){
        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);
        
        if(secondValue == 0 && calcOperation === '/') {
            clearCalc();
            display.textContent = 'lol'; 
        } 
        else {
            display.textContent = Math.round(operate(calcOperation, firstValue, secondValue) * 100000) / 100000;
            firstValue = display.textContent;
            calcOperation = element.textContent;
            decimalButton.disabled = false;
            
            if(element.textContent === '=') {
                lastButtonPressed = true;
            }
        }
        secondValue = '';
    } 
    else if(element.textContent === '=' && secondValue === '') {
        
    } 
    else if(element.textContent === '-' && calcOperation != '') {
        secondValue += element.textContent;
        display.textContent = secondValue;
    } 
    else if(firstValue !== '' && (element.textContent === '+' || element.textContent === '-' || element.textContent === 'x' || element.textContent === '/')) {
        lastButtonPressed = false;
        firstNumber = false;
        decimalButton.disabled = false;
        calcOperation = element.textContent;
    }  
    else if(!firstNumber) {
        if(lastButtonPressed && element.textContent === 'Delete') {
            firstValue = display.textContent.slice(0, -1);
            display.textContent = firstValue;
        } 
        else if(lastButtonPressed) {
            clearCalc();
            firstValue = element.textContent;
            display.textContent = firstValue;
        }
        else if(element.textContent === 'Delete'){
            display.textContent = display.textContent.slice(0, -1);
            secondValue = display.textContent;
        } 
        else {
            secondValue += element.textContent;
            display.textContent = secondValue;
            console.log(secondValue); 
        }    
    } 
    else if(firstNumber) {
        if(element.textContent === '+' || element.textContent === 'x' || element.textContent === '/' || element.textContent === '=') {
            
        } 
        else if(element.textContent === '-' && firstValue === '') {
            firstValue += element.textContent;
            display.textContent = firstValue;
        } 
        else if(element.textContent === 'Delete') {
            display.textContent = display.textContent.slice(0, -1);
            firstValue = display.textContent;
        }
        else {
            firstValue += element.textContent;
            display.textContent = firstValue;
        }
    }  
}));

function clearCalc() {
    decimalButton.disabled = false;
    firstValue = '';
    firstNumber = true;
    secondValue = '';
    calcOperation = '';
    display.textContent = 'Enter a number:';
}

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearCalc);

