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

// ... (rest of the code)

const evaluateButton = document.getElementById("evaluate");
evaluateButton.addEventListener("click", () => {
    try {
        const result = eval(display.value);
        display.value = result;
        updateHistory(`${display.value} = ${result}`);
    } catch (error) {
        display.value = "Error";
        updateHistory(`Error: ${error.message}`);
    }
});

const calculateExpressionButton = document.getElementById("calculate-expression");
calculateExpressionButton.addEventListener("click", () => {
  try {
    const result = eval(display.value);
    display.value = result;
    updateHistory(`Expression: ${display.value} = ${result}`);
  }
  catch (error) {
    display.value = "Error";
    updateHistory(`Expression Error: ${error.message}`);
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
const openGithubButton = document.getElementById("open-github");
if (openGithubButton) {
  openGithubButton.addEventListener("click", () => {
    window.open("https://github.com", "_blank");
  });
}
const sqrtButton = document.getElementById("sqrt");
if (sqrtButton) {
    sqrtButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const result = Math.sqrt(currentValue);
            display.value = result;
            updateHistory(`√(${currentValue}) = ${result}`);
        }
    });
}    const percentageButton = document.getElementById("percentage");
if (percentageButton) {
    percentageButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const result = currentValue / 100;
            display.value = result;
            updateHistory(`${currentValue}% = ${result}`);
        }
    });
}
const deleteLastCharButton = document.getElementById("delete-last-char");

// ... rest of the code
deleteLastCharButton.addEventListener("click", () => {
    display.value = display.value.slice(0,-1);
});

// Memory Recall/Clear button
const mrcButton = document.getElementById("mrc");
mrcButton.addEventListener("click", () => {
    if (memoryValue !== null) {
        display.value = memoryValue;
        memoryValue = null; // Clear memory after recall
        updateHistory(`MRC: ${display.value}`);
    } else {
        // If memory is empty, clear the display
        display.value = '';
    }
});

const inverseSineButton = document.getElementById("inverse-sine");
inverseSineButton.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const result = Math.asin(currentValue);
    display.value = result;
    updateHistory(`asin(${currentValue}) = ${result}`);
  }
});

const currentTimeButton = document.getElementById("current-time");
currentTimeButton.addEventListener("click", () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  display.value = timeString;
  updateHistory(`Time: ${timeString}`);
});

const roundUpButton = document.getElementById("round-up");
roundUpButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.ceil(currentValue);
        display.value = result;
        updateHistory(`Round Up(${currentValue}) = ${result}`);
    }
});
});
