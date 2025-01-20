// ... (Existing Code)

// Add factorial button

// Existing code ...

// ... (Existing event listeners and functions)

//Existing code ...

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;
let memory = 0;
let mode = "rad"; // Initialize mode to radians

function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    updateHistoryDisplay();
}

function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}
// ... other existing buttons

// ... existing code

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code
 // ... existing code ...

// ... existing functions for calculations (sum, average, product)

const toggleScientificBtn = document.getElementById("toggleScientific") as HTMLButtonElement;
let isScientificMode = false; // Flag to track scientific mode

toggleScientificBtn.addEventListener("click", () => {
  isScientificMode = !isScientificMode; // Toggle the mode

  // Select all scientific buttons (you'll need to add appropriate IDs or classes to these buttons)
  const scientificButtons = document.querySelectorAll('.scientific');

  // Toggle their visibility based on the mode
  scientificButtons.forEach((button) => {
    (button as HTMLButtonElement).style.display = isScientificMode ? 'inline-block' : 'none';
  });
});
//Base Conversion
const baseConverterBtn = document.getElementById("baseConverter") as HTMLButtonElement;
const base10Btn = document.getElementById("base10") as HTMLButtonElement;
const base2Btn = document.getElementById("base2") as HTMLButtonElement;

baseConverterBtn.addEventListener("click", () => {
    // Toggle visibility of the individual base buttons
    base10Btn.style.display = (base10Btn.style.display === 'none' || base10Btn.style.display === '') ? 'inline-block' : 'none';
    base2Btn.style.display = (base2Btn.style.display === 'none' || base2Btn.style.display === '') ? 'inline-block' : 'none';
});

base10Btn.addEventListener("click", () => {
    const num = parseInt(prompt("Enter a binary number", "0")!, 2);
    if(isNaN(num)) {
        display.value = "Invalid input";
    }
    else{
        display.value = num.toString(10);
        addToHistory(`base10(${num})`, num.toString());
    }
});

base2Btn.addEventListener("click", () => {
    const num = parseInt(prompt("Enter a decimal number", "0")!, 10);
    if(isNaN(num)){
        display.value = "Invalid input";
    }
    else{
        display.value = num.toString(2);
        addToHistory(`base2(${num})`, num.toString());
    }
});

const sinBtn = document.getElementById("sin") as HTMLButtonElement;
const cosBtn = document.getElementById("cos") as HTMLButtonElement;
const tanBtn = document.getElementById("tan") as HTMLButtonElement;
const display = document.getElementById("display") as HTMLInputElement;
const degRadBtn = document.getElementById("degRad") as HTMLButtonElement;
const inverseBtn = document.getElementById("inverse") as HTMLButtonElement;

sinBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
      display.value = "Invalid input";
    } else {
      display.value = (mode === "deg" ? Math.sin(num * Math.PI / 180) : Math.sin(num)).toString();
    }
  });

  cosBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
      display.value = "Invalid input";
    } else {
      display.value = (mode === "deg" ? Math.cos(num * Math.PI / 180) : Math.cos(num)).toString();
    }
  });

  tanBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
      display.value = "Invalid input";
    } else {
      display.value = (mode === "deg" ? Math.tan(num * Math.PI / 180) : Math.tan(num)).toString();
    }
  });

  degRadBtn.addEventListener("click", () => {
    mode = (mode === "rad") ? "deg" : "rad";
    degRadBtn.textContent = mode.toUpperCase();
  });

inverseBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if(isNaN(num) || num === 0) {
        display.value = "Invalid input";
    } else {
        display.value = (1/num).toString();
    }
});
});
