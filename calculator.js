let displayValue = "";
let calcValue = undefined;
let operator = "";

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener('click', () => {
    displayValue = "";
    calcValue = undefined;
    operator = "";
    resultScreenDiv.textContent = "0";
});

const correctBtn = document.querySelector("#correct-btn");
correctBtn.addEventListener('click', () => {
    if (displayValue === "") {
        displayValue = "";
        calcValue = undefined;
        operator = "";
        resultScreenDiv.textContent = "0";
    } else {
        displayValue = displayValue.slice(0, -1);
        resultScreenDiv.textContent = displayValue;
    }
});

const moduloBtn = document.querySelector("#modulo-btn");
moduloBtn.addEventListener('click', () => {
    enterOperator("%");
});

const divideBtn = document.querySelector("#divide-btn");
divideBtn.addEventListener('click', () => {
    enterOperator("/");
});

const num7Btn = document.querySelector("#num7-btn");
num7Btn.addEventListener('click', () => {
    enterNumber("7");
});

const num8Btn = document.querySelector("#num8-btn");
num8Btn.addEventListener('click', () => {
    enterNumber("8");
});

const num9Btn = document.querySelector("#num9-btn");
num9Btn.addEventListener('click', () => {
    enterNumber("9");
});

const multiplyBtn = document.querySelector("#multiply-btn");
multiplyBtn.addEventListener('click', () => {
    enterOperator("*");
});

const num4Btn = document.querySelector("#num4-btn");
num4Btn.addEventListener('click', () => {
    enterNumber("4");
});

const num5Btn = document.querySelector("#num5-btn");
num5Btn.addEventListener('click', () => {
    enterNumber("5");
});

const num6Btn = document.querySelector("#num6-btn");
num6Btn.addEventListener('click', () => {
    enterNumber("6");
});

const subtractBtn = document.querySelector("#subtract-btn");
subtractBtn.addEventListener('click', () => {
    enterOperator("-");
});

const num1Btn = document.querySelector("#num1-btn");
num1Btn.addEventListener('click', () => {
    enterNumber("1");
});

const num2Btn = document.querySelector("#num2-btn");
num2Btn.addEventListener('click', () => {
    enterNumber("2");
});

const num3Btn = document.querySelector("#num3-btn");
num3Btn.addEventListener('click', () => {
    enterNumber("3");
});

const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener('click', () => {
    enterOperator("+");
});

const num0Btn = document.querySelector("#num0-btn");
num0Btn.addEventListener('click', () => {
    enterNumber("0");
});

const pointBtn = document.querySelector("#point-btn");
pointBtn.addEventListener('click', () => {
    if (!displayValue.includes(".") && displayValue !== "") {
        enterNumber(".");
    }
});

const equalBtn = document.querySelector("#equal-btn");
equalBtn.addEventListener('click', () => {
    updateCalValues();
});

const resultScreenDiv = document.querySelector("#result-screen-div");

function roundToDecimal(num, dec) {
    return Math.round(num * 10 ** dec) / (10 ** dec);
}

function updateCalValues() {
    if (calcValue === undefined) {
        calcValue = Number(displayValue);
        displayValue = "";
        operator = "";
    } else if (operator !== "" && displayValue !== "") {
        calcValue = operate(operator, calcValue, Number(displayValue));
        displayValue = "";
        operator = "";
    }
    returnTextContent(calcValue);
}

function returnTextContent(inputValue) {
    let splitAtDecimal = String(inputValue).split(".");
    if (splitAtDecimal[0].length > 12) {
        inputValueTransform = inputValue.toExponential(6);
        resultScreenDiv.textContent = inputValueTransform;
    } else if (String(inputValue).length > 12) {
        let maxDecimal = 12 - 1 - splitAtDecimal[0].length;
        inputValueTransform = roundToDecimal(calcValue, maxDecimal);
        resultScreenDiv.textContent = inputValueTransform;
    } else {
        resultScreenDiv.textContent = inputValue;
    }
}

function enterNumber(value) {
    if (displayValue === "" && operator === "") {
        calcValue = undefined
    }
    if (displayValue.length <= 12) {
        displayValue += value;
        resultScreenDiv.textContent = displayValue;
    }
}

function enterOperator(entryOperator) {
    updateCalValues();
    operator = entryOperator;
}

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

function modulo(a, b) {
    return a % b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else if (operator === "%") {
        return modulo(a, b);
    }
}