let currentInput = '';
let operator = '';
let previousInput = '';

function sum(a, b) {
    return String(parseFloat(a) + parseFloat(b));
}

function sub(a, b) {
    return String(parseFloat(a) - parseFloat(b));
}

function mul(a, b) {
    return String(parseFloat(a) * parseFloat(b));
}

function div(a, b) {
    if (parseFloat(b) === 0) return 'Error';
    return String(parseFloat(a) / parseFloat(b));
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.onclick = () => {
        if(button.classList.contains('numButton')){
            handleNumber(button.textContent);
        } else if(button.classList.contains('operator')){
            handleOperator(button.textContent);
        } else if(button.classList.contains('equals')){
            handleEqual();
        } else if(button.classList.contains('clear')){
            handleClear();
        }
    }
});

function handleNumber(value){
    currentInput += value;
    updateDisplay(currentInput);
}

function updateDisplay(value){
    const display = document.querySelector('#result');
    display.textContent = value;
}

function handleOperator(value){
    operator = value;
    console.log(operator);
    updateDisplay(operator);
    previousInput = currentInput;
    currentInput = '';
}

function handleEqual() {
    if (operator === '+') {
        currentInput = sum(previousInput, currentInput);
    }
    else if (operator === '-') {
        currentInput = sub(previousInput, currentInput);
    }
    else if (operator === '×') {
        currentInput = mul(previousInput, currentInput);
    }
    else if (operator === '÷') {
        currentInput = div(previousInput, currentInput);
    }
    else if (operator === '±') {
        currentInput = String(-parseFloat(currentInput));
    }
    else if (operator === '%') {
        currentInput = String(parseFloat(previousInput) % parseFloat(currentInput));
    }
    updateDisplay(currentInput);
}

function handleClear(){
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0');
}

console.log(previousInput);
console.log(currentInput);
console.log(operator);
