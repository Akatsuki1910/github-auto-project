// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue = null;
    let lastAnswer = null;
    const history = [];
    const historyDiv = document.getElementById("history");
    const display = document.getElementById("display");
    // ... existing code ...
    const toggleHistoryButton = document.getElementById("toggle-history");
    toggleHistoryButton.addEventListener("click", () => {
        if (historyDiv.style.display === "none" || historyDiv.style.display === "") {
            historyDiv.style.display = "block";
        }
        else {
            historyDiv.style.display = "none";
        }
    });

    const updateHistory = (value) => {
        history.push(value);
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    };

// clear history button
const clearHistoryButton = document.getElementById("clear-history");
clearHistoryButton.addEventListener("click", () => {
  history.length = 0; //履歴配列をクリア
  historyDiv.innerHTML = ""; //履歴表示をクリア
});

 // copy history button
const copyHistoryButton = document.getElementById("copy-history");
copyHistoryButton.addEventListener("click", () => {
    const historyText = history.join('\n');
    navigator.clipboard.writeText(historyText)
        .then(() => {
            alert('History copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
});

    // ... existing code ...
    // Memory buttons
    // ... existing code ...

    // Sign Change button
    // ... (rest of the code)
    // ... (rest of the code)

    const openNewWindowButton = document.getElementById("open-new-window");
    openNewWindowButton.addEventListener("click", () => {
        window.open("https://www.google.com", "_blank");
    });
// Show Keyboard button
const showKeyboardButton = document.getElementById("show-keyboard");
const keyboardDiv = document.getElementById("keyboard");
showKeyboardButton.addEventListener("click", () => {
    if (keyboardDiv.style.display === "none" || keyboardDiv.style.display === "") {
        keyboardDiv.style.display = "block";
    }
    else {
        keyboardDiv.style.display = "none";
    }
});
const generateQrCodeButton = document.getElementById("generate-qrcode");
const qrcodeDiv = document.getElementById("qrcode");
generateQrCodeButton.addEventListener("click", () => {
    const displayValue = display.value;
    if (displayValue) {
      new QRCode(qrcodeDiv, {
          text: displayValue,
          width: 128,
          height: 128,
      });
  }
});

const currentDateButton = document.getElementById("current-date");
currentDateButton.addEventListener("click", () => {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    display.value = dateString;
    updateHistory(`Date: ${dateString}`);
});

const binaryConversionButton = document.getElementById("binary-conversion");
binaryConversionButton.addEventListener("click", () => {
  const displayValue = display.value;
  if (displayValue) {
    const binaryValue = parseInt(displayValue).toString(2);
    display.value = binaryValue;
    updateHistory(`Binary: ${binaryValue}`);
  }
});

const squareButton = document.getElementById("square");
squareButton.addEventListener("click", () => {
    const displayValue = display.value;
    if (displayValue) {
        const num = parseFloat(displayValue);
        const result = num * num;
        display.value = result.toString();
        updateHistory(`${num}² = ${result}`);
    }
});

const cubeButton = document.getElementById("cube");
cubeButton.addEventListener("click", () => {
    const displayValue = display.value;
    if (displayValue) {
        const num = parseFloat(displayValue);
        const result = num * num * num;
        display.value = result.toString();
        updateHistory(`${num}³ = ${result}`);
    }
});

const fibonacciButton = document.getElementById("fibonacci");
fibonacciButton.addEventListener("click", () => {
    const displayValue = display.value;
    if (displayValue) {
        const n = parseInt(displayValue);
        if (n >= 0) {
          const result = fibonacci(n);
          display.value = result.toString();
          updateHistory(`Fibonacci(${n}) = ${result}`);
        }
    }
});

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  const debugButton = document.getElementById("debug");
debugButton.addEventListener("click", () => {
    debugger;
});

const clearLastEntryButton = document.getElementById("clear-last-entry");
clearLastEntryButton.addEventListener("click", () => {
    display.value = "";
});

const numberOfDigitsButton = document.getElementById("number-of-digits");
numberOfDigitsButton.addEventListener("click", () => {
    const displayValue = display.value;
    if (displayValue) {
        const numDigits = displayValue.length;
        display.value = numDigits.toString();
        updateHistory(`Digits: ${numDigits}`);
    }
});

const tenToThePowerOfXButton = document.getElementById("ten-to-the-power-of-x");
tenToThePowerOfXButton.addEventListener("click", () => {
    const displayValue = display.value;
    if (displayValue) {
        const num = parseFloat(displayValue);
        const result = Math.pow(10, num);
        display.value = result.toString();
        updateHistory(`10^${num} = ${result}`);
    }
});

    // Number buttons
    for (let i = 0; i <= 9; i++) {
        const numberButton = document.getElementById(`number-${i}`);
        if (numberButton) {
          numberButton.addEventListener("click", () => {
              display.value += i.toString();
          });
        }
      }
});
