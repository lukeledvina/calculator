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

calcButtons.forEach(element => element.addEventListener('click', () => {
    let displayValue = element.textContent;
    display.textContent = displayValue;
}));

