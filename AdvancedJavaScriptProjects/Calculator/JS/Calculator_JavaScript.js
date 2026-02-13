const Calculator = {
    DisplayValue: "0",
    FirstOperand: null,
    WaitSecondOperand: false,
    operator: null,
};

function InputDigit(digit) {
    const { DisplayValue, WaitSecondOperand } = Calculator;

    if (WaitSecondOperand === true) {
        Calculator.DisplayValue = digit;
        Calculator.WaitSecondOperand = false;
    } else {
        Calculator.DisplayValue = DisplayValue === "0" ? digit : DisplayValue + digit;
    }
}

function InputDecimal(dot) {
    if (Calculator.WaitSecondOperand === true) return;
    if (!Calculator.DisplayValue.includes(dot)) {
        Calculator.DisplayValue += dot;
    }
}

function HandleOperator(nextOperator) {
    const { FirstOperand, DisplayValue, operator } = Calculator;
    const valueOfInput = parseFloat(DisplayValue);

    if (operator && Calculator.WaitSecondOperand) {
        Calculator.operator = nextOperator;
        return;
    }

    if (FirstOperand == null) {
        Calculator.FirstOperand = valueOfInput;
    } else if (operator) {
        const valueNow = FirstOperand || 0;
        let result = PerformCalculation[operator](valueNow, valueOfInput);
        result = Number(result).toFixed(9);
        result = (result * 1).toString();
        Calculator.DisplayValue = result;
        Calculator.FirstOperand = parseFloat(result);
    }
    Calculator.WaitSecondOperand = true;
    Calculator.operator = nextOperator;
}

const PerformCalculation = {
    "/": (FirstOperand, SecondOperand) => FirstOperand / SecondOperand,
    "*": (FirstOperand, SecondOperand) => FirstOperand * SecondOperand,
    "+": (FirstOperand, SecondOperand) => FirstOperand + SecondOperand,
    "-": (FirstOperand, SecondOperand) => FirstOperand - SecondOperand,
    "=": (FirstOperand, SecondOperand) => SecondOperand
};

function CalculatorReset() {
    Calculator.DisplayValue = "0";
    Calculator.FirstOperand = null;
    Calculator.WaitSecondOperand = false;
    Calculator.operator = null;
}

function UpdateDisplay() {
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.DisplayValue;
}

UpdateDisplay();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    const { target } = event;

    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        HandleOperator(target.value);
        UpdateDisplay();
        return;
    }
    if (target.classList.contains("decimal")) {
        InputDecimal(target.value);
        UpdateDisplay();
        return;
    }
    if (target.classList.contains("all-clear")) {
        CalculatorReset();
        UpdateDisplay();
        return;
    }
    InputDigit(target.value);
    UpdateDisplay();
})