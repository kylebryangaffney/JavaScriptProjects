// Create and Store the current status, inputs, and selected operator for the calculator
const Calculator = {
    DisplayValue: "0",
    FirstOperand: null,
    WaitSecondOperand: false,
    operator: null,
};

// used to input digits into the calculator then updates the display and determines to overwrite or append digits.
function InputDigit(digit) {
    const { DisplayValue, WaitSecondOperand } = Calculator;

    if (WaitSecondOperand === true) {
        Calculator.DisplayValue = digit;
        Calculator.WaitSecondOperand = false;
    } else {
        Calculator.DisplayValue = DisplayValue === "0" ? digit : DisplayValue + digit;
    }
}

// used to read only  one decimal point as an input
function InputDecimal(dot) {
    if (Calculator.WaitSecondOperand === true) return;
    if (!Calculator.DisplayValue.includes(dot)) {
        Calculator.DisplayValue += dot;
    }
}

// mathematical operations function. Chains calculations and setting up the calculator to take in the next input
function HandleOperator(nextOperator) {
    const { FirstOperand, DisplayValue, operator } = Calculator;
    const valueOfInput = parseFloat(DisplayValue);

    // If an operator is clicked after another operator, update to the new one
    if (operator && Calculator.WaitSecondOperand) {
        Calculator.operator = nextOperator;
        return;
    }

    if (FirstOperand == null) {
        Calculator.FirstOperand = valueOfInput;
    } else if (operator) {
        const valueNow = FirstOperand || 0;
        let result = PerformCalculation[operator](valueNow, valueOfInput);
        
        // float to string conversion 
        result = Number(result).toFixed(9);
        result = (result * 1).toString(); 
        
        Calculator.DisplayValue = parseFloat(result);
        Calculator.FirstOperand = parseFloat(result);
    }
    
    Calculator.WaitSecondOperand = true;
    Calculator.operator = nextOperator;
}

// A lookup table for the mathematical functions
const PerformCalculation = {
    "/": (FirstOperand, SecondOperand) => FirstOperand / SecondOperand,
    "*": (FirstOperand, SecondOperand) => FirstOperand * SecondOperand,
    "+": (FirstOperand, SecondOperand) => FirstOperand + SecondOperand,
    "-": (FirstOperand, SecondOperand) => FirstOperand - SecondOperand,
    "=": (FirstOperand, SecondOperand) => SecondOperand
};

// Clears the calculator state back to its initial values
function CalculatorReset() {
    Calculator.DisplayValue = "0";
    Calculator.FirstOperand = null;
    Calculator.WaitSecondOperand = false;
    Calculator.operator = null;
}

// sets display to the Calculator state
function UpdateDisplay() {
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.DisplayValue;
}

UpdateDisplay();

// Listen for clicks on the calculator keys and calls the appropriate arithmatic function
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