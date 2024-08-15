let display = document.getElementById("text");
let firstOperand = null;
let storedOperator = null;

function onNumber(number) {
    display.innerHTML += number;
}

function onOperator(operator) {
    firstOperand = parseFloat(display.innerHTML);
    
    display.innerHTML = "";
    storedOperator = operator;
}

function oneq() {
    let secondOperand = parseFloat(display.innerHTML);
    const finalResult = eval(`${firstOperand} ${storedOperator} ${secondOperand}`);

    display.innerHTML = finalResult;
    firstOperand = null;
    storedOperator = null;
}

function onDot() {
    if (display.innerHTML === ""){
        return;
    }
    display.innerHTML += ".";
}

function onClear() {
    display.innerHTML = "";
    firstOperand = NaN;
    storedOperator = NaN;
}