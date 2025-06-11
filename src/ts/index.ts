declare global {
  interface Window {
    math: {
      evaluate: (expression: string) => number;
    };
  }
}

class Calculator {
  private display: HTMLInputElement;
  private currentExpressionDisplay: HTMLDivElement;
  private currentInput = "";
  private expression = "";
  private memory = 0;
  private history: string[] = [];
  private isDarkTheme = false;

  constructor() {
    this.display = document.getElementById("display") as HTMLInputElement;
    this.currentExpressionDisplay = document.getElementById(
      "currentExpressionDisplay",
    ) as HTMLDivElement;
    this.initializeEventListeners();
    this.updateDisplay();
  }

  private initializeEventListeners() {
    // Number and operator buttons
    document.querySelectorAll(".digit").forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.getAttribute("data-key") || button.textContent;
        if (value) this.inputDigit(value);
      });
    });

    document.querySelectorAll(".operator").forEach((button) => {
      button.addEventListener("click", () => {
        const operator = button.getAttribute("data-key") || button.textContent;
        if (operator) this.inputOperator(operator);
      });
    });

    document.querySelector(".decimal")?.addEventListener("click", () => {
      this.inputDecimal();
    });

    document.querySelector(".equals")?.addEventListener("click", () => {
      this.calculate();
    });

    // Control buttons
    document.getElementById("clear-all")?.addEventListener("click", () => {
      this.clearAll();
    });

    document.getElementById("clear")?.addEventListener("click", () => {
      this.clearEntry();
    });

    document.getElementById("backspace")?.addEventListener("click", () => {
      this.backspace();
    });

    document.getElementById("negate")?.addEventListener("click", () => {
      this.negate();
    });

    document.getElementById("percentage")?.addEventListener("click", () => {
      this.percentage();
    });

    document.getElementById("square")?.addEventListener("click", () => {
      this.square();
    });

    document.getElementById("sqrt")?.addEventListener("click", () => {
      this.squareRoot();
    });

    // Memory functions
    document.getElementById("mc")?.addEventListener("click", () => {
      this.memoryClear();
    });

    document.getElementById("mrc")?.addEventListener("click", () => {
      this.memoryRecall();
    });

    document.getElementById("m-plus")?.addEventListener("click", () => {
      this.memoryAdd();
    });

    document.getElementById("m-minus")?.addEventListener("click", () => {
      this.memorySubtract();
    });

    document.getElementById("ms")?.addEventListener("click", () => {
      this.memoryStore();
    });

    // Scientific functions
    document.getElementById("sin")?.addEventListener("click", () => {
      this.scientificFunction("sin");
    });

    document.getElementById("cos")?.addEventListener("click", () => {
      this.scientificFunction("cos");
    });

    document.getElementById("tan")?.addEventListener("click", () => {
      this.scientificFunction("tan");
    });

    document.getElementById("log")?.addEventListener("click", () => {
      this.scientificFunction("log10");
    });

    document.getElementById("natural-log")?.addEventListener("click", () => {
      this.scientificFunction("log");
    });

    document.getElementById("exp")?.addEventListener("click", () => {
      this.scientificFunction("exp");
    });

    document.getElementById("pi")?.addEventListener("click", () => {
      this.inputPi();
    });

    document.getElementById("e")?.addEventListener("click", () => {
      this.inputE();
    });

    // Utility functions
    document.getElementById("toggle-theme")?.addEventListener("click", () => {
      this.toggleTheme();
    });

    document
      .getElementById("toggleScientific")
      ?.addEventListener("click", () => {
        this.toggleScientific();
      });

    document.getElementById("copy")?.addEventListener("click", () => {
      this.copyToClipboard();
    });

    document
      .getElementById("toggle-history-display")
      ?.addEventListener("click", () => {
        this.toggleHistory();
      });

    document.getElementById("clear-history")?.addEventListener("click", () => {
      this.clearHistory();
    });

    // Parentheses
    document.querySelectorAll("button").forEach((button) => {
      if (button.textContent === "(") {
        button.addEventListener("click", () => this.inputOperator("("));
      }
      if (button.textContent === ")") {
        button.addEventListener("click", () => this.inputOperator(")"));
      }
    });

    // Font change
    const changeFontButton = document.getElementById(
      "change-font",
    ) as HTMLButtonElement;
    let currentFont = "OpenDyslexic";

    changeFontButton?.addEventListener("click", () => {
      currentFont = currentFont === "OpenDyslexic" ? "Arial" : "OpenDyslexic";
      document.body.style.fontFamily = currentFont;
    });

    // Keyboard support
    document.addEventListener("keydown", (e) => {
      this.handleKeyboard(e);
    });
  }

  private inputDigit(digit: string) {
    if (this.currentInput === "0" && digit !== "0") {
      this.currentInput = digit;
    } else {
      this.currentInput += digit;
    }
    this.updateDisplay();
  }

  private inputOperator(operator: string) {
    if (this.currentInput !== "" || operator === "(" || operator === ")") {
      let normalizedOperator = operator;
      if (operator === "×") normalizedOperator = "*";
      if (operator === "÷") normalizedOperator = "/";

      if (this.currentInput !== "") {
        this.expression += this.currentInput;
        this.currentInput = "";
      }
      this.expression += normalizedOperator;
      this.updateDisplay();
    }
  }

  private inputDecimal() {
    if (this.currentInput.indexOf(".") === -1) {
      if (this.currentInput === "") {
        this.currentInput = "0.";
      } else {
        this.currentInput += ".";
      }
      this.updateDisplay();
    }
  }

  private calculate() {
    try {
      const fullExpression = this.expression + this.currentInput;
      if (fullExpression) {
        // Use math.js for safe evaluation
        const result = window.math.evaluate(fullExpression);
        this.addToHistory(`${fullExpression} = ${result}`);
        this.currentInput = result.toString();
        this.expression = "";
        this.updateDisplay();
      }
    } catch (error) {
      this.display.value = "Error";
      this.currentInput = "";
      this.expression = "";
    }
  }

  private clearAll() {
    this.currentInput = "";
    this.expression = "";
    this.updateDisplay();
  }

  private clearEntry() {
    this.currentInput = "";
    this.updateDisplay();
  }

  private backspace() {
    if (this.currentInput.length > 0) {
      this.currentInput = this.currentInput.slice(0, -1);
      this.updateDisplay();
    }
  }

  private negate() {
    if (this.currentInput !== "" && this.currentInput !== "0") {
      if (this.currentInput.startsWith("-")) {
        this.currentInput = this.currentInput.substring(1);
      } else {
        this.currentInput = `-${this.currentInput}`;
      }
      this.updateDisplay();
    }
  }

  private percentage() {
    if (this.currentInput !== "") {
      const value = parseFloat(this.currentInput) / 100;
      this.currentInput = value.toString();
      this.updateDisplay();
    }
  }

  private square() {
    if (this.currentInput !== "") {
      const value = parseFloat(this.currentInput);
      this.currentInput = (value * value).toString();
      this.updateDisplay();
    }
  }

  private squareRoot() {
    if (this.currentInput !== "") {
      const value = parseFloat(this.currentInput);
      if (value >= 0) {
        this.currentInput = Math.sqrt(value).toString();
        this.updateDisplay();
      } else {
        this.display.value = "Error";
      }
    }
  }

  private scientificFunction(func: string) {
    if (this.currentInput !== "") {
      try {
        const value = parseFloat(this.currentInput);
        let result: number;

        switch (func) {
          case "sin":
            result = Math.sin(value);
            break;
          case "cos":
            result = Math.cos(value);
            break;
          case "tan":
            result = Math.tan(value);
            break;
          case "log10":
            result = Math.log10(value);
            break;
          case "log":
            result = Math.log(value);
            break;
          case "exp":
            result = Math.exp(value);
            break;
          default:
            result = value;
        }

        this.currentInput = result.toString();
        this.updateDisplay();
      } catch (error) {
        this.display.value = "Error";
      }
    }
  }

  private inputPi() {
    this.currentInput = Math.PI.toString();
    this.updateDisplay();
  }

  private inputE() {
    this.currentInput = Math.E.toString();
    this.updateDisplay();
  }

  private memoryClear() {
    this.memory = 0;
  }

  private memoryRecall() {
    this.currentInput = this.memory.toString();
    this.updateDisplay();
  }

  private memoryAdd() {
    if (this.currentInput !== "") {
      this.memory += parseFloat(this.currentInput);
    }
  }

  private memorySubtract() {
    if (this.currentInput !== "") {
      this.memory -= parseFloat(this.currentInput);
    }
  }

  private memoryStore() {
    if (this.currentInput !== "") {
      this.memory = parseFloat(this.currentInput);
    }
  }

  private toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.className = this.isDarkTheme ? "dark-scheme" : "light-scheme";
  }

  private toggleScientific() {
    const scientificPad = document.getElementById("scientific-pad");
    if (scientificPad) {
      const isHidden = scientificPad.style.display === "none";
      scientificPad.style.display = isHidden ? "grid" : "none";
    }
  }

  private copyToClipboard() {
    if (this.currentInput !== "") {
      navigator.clipboard.writeText(this.currentInput);
    }
  }

  private addToHistory(entry: string) {
    this.history.push(entry);
    this.updateHistoryDisplay();
  }

  private toggleHistory() {
    const historyDisplay = document.getElementById("history-display");
    if (historyDisplay) {
      const isHidden = historyDisplay.style.display === "none";
      historyDisplay.style.display = isHidden ? "block" : "none";
      this.updateHistoryDisplay();
    }
  }

  private clearHistory() {
    this.history = [];
    this.updateHistoryDisplay();
  }

  private updateHistoryDisplay() {
    const historyDisplay = document.getElementById("history-display");
    if (historyDisplay) {
      historyDisplay.innerHTML = this.history
        .map((entry) => `<div>${entry}</div>`)
        .join("");
    }
  }

  private handleKeyboard(e: KeyboardEvent) {
    const key = e.key;

    if ("0123456789".includes(key)) {
      this.inputDigit(key);
    } else if ("+-*/".includes(key)) {
      this.inputOperator(key);
    } else if (key === ".") {
      this.inputDecimal();
    } else if (key === "Enter" || key === "=") {
      this.calculate();
    } else if (key === "Escape") {
      this.clearAll();
    } else if (key === "Backspace") {
      this.backspace();
    } else if (key === "(" || key === ")") {
      this.inputOperator(key);
    }

    e.preventDefault();
  }

  private updateDisplay() {
    this.display.value = this.currentInput || "0";
    this.currentExpressionDisplay.textContent = this.expression;
  }
}

// Initialize calculator when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new Calculator();
});
