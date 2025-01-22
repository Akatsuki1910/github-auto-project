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
let isInverse = false; // Flag for inverse mode

function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    updateHistoryDisplay();
    lastAnswer = parseFloat(result); // Store the last answer
}

function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}
// ... other existing buttons

// ... existing code

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code
 // ... existing code ...

// ... existing functions for calculations (sum)
const averageBtn = document.getElementById("average") as HTMLButtonElement;

averageBtn.addEventListener("click", () => {
    const numStr = display.value;
    const nums = numStr.split("+").map(Number); // Split by '+' and convert to numbers
    if (nums.some(isNaN)) {
        display.value = "Invalid input";
    } else {
        const sum = nums.reduce((a, b) => a + b, 0);
        const average = sum / nums.length;
        display.value = average.toString();
        addToHistory(nums.join(" + "), average.toString());
    }
});

// ... other functions
const medianBtn = document.getElementById("median") as HTMLButtonElement;

medianBtn.addEventListener("click", () => {
    const numStr = display.value;
    const nums = numStr.split(",").map(Number).sort((a, b) => a - b);

    if (nums.some(isNaN)) {
        display.value = "Invalid input";
        return;
    }

    const mid = Math.floor(nums.length / 2);
    const median = nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;

    display.value = median.toString();
    addToHistory(`median(${nums.join(", ")})`, median.toString());
});

// ... Existing Code

// ... (Existing code)
const toggleHistoryBtn = document.getElementById("toggleHistory") as HTMLButtonElement;

toggleHistoryBtn.addEventListener("click", () => {
  if (historyDisplay.style.display === "none" || historyDisplay.style.display === "") {
    historyDisplay.style.display = "block";
  } else {
    historyDisplay.style.display = "none";
  }
});

// ... (rest of the existing code)
const localstorageBtn = document.getElementById("localstorage") as HTMLButtonElement;
localstorageBtn.addEventListener("click", () => {
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
    display.value = "History saved to localStorage!";
});

const loadHistoryBtn = document.getElementById("loadHistory") as HTMLButtonElement;
loadHistoryBtn.addEventListener("click", () => {
    const storedHistory = localStorage.getItem("calculatorHistory");
    if (storedHistory) {
        history = JSON.parse(storedHistory);
        updateHistoryDisplay();
        display.value = "History loaded from localStorage!";
    } else {
        display.value = "No history found in localStorage.";
    }
});

const geoMeanBtn = document.getElementById("geoMean") as HTMLButtonElement;
geoMeanBtn.addEventListener("click", () => {
  const numStr = display.value;
  const nums = numStr.split(",").map(Number);

  if (nums.some(isNaN)) {
    display.value = "Invalid input";
    return;
  }

  const product = nums.reduce((a, b) => a * b, 1);
  const geoMean = Math.pow(product, 1 / nums.length);

  display.value = geoMean.toString();
  addToHistory(`geoMean(${nums.join(", ")})`, geoMean.toString());
});
const clearAllBtn = document.getElementById("clearAll") as HTMLButtonElement;

clearAllBtn.addEventListener("click", () => {
    history = []; // This line clears the history array
    updateHistoryDisplay(); // Update the display to reflect the empty history
    display.value = ""; // Optionally clear the current display value
});

const parenthesesCheckBtn = document.getElementById("parenthesesCheck") as HTMLButtonElement;
parenthesesCheckBtn.addEventListener("click", () => {
  const expression = display.value;
  let openCount = 0;
  let closeCount = 0;

  for (let char of expression) {
    if (char === '(') {
      openCount++;
    } else if (char === ')') {
      closeCount++;
    } 
  }

  if (openCount === closeCount) {
    display.value = "Parentheses are balanced.";
  } else {
    display.value = "Parentheses are NOT balanced.";
  }
});

const currentDateBtn = document.getElementById("current-date") as HTMLButtonElement;
currentDateBtn.addEventListener("click", () => {
    const today = new Date();
    const dateString = today.toLocaleDateString();
    display.value = dateString;
});

const calculateBtn = document.getElementById("calculate") as HTMLButtonElement;
const display = document.getElementById("display") as HTMLInputElement;
calculateBtn.addEventListener('click', () => {
    try {
        const result = eval(display.value);
        display.value = result.toString();
        addToHistory(display.value, result);
    } catch (error) {
        display.value = "Error";
    }
});
const exp10Btn = document.getElementById("exp10") as HTMLButtonElement;
exp10Btn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = 10 ** currentValue;
        display.value = result.toString();
        addToHistory(`10^${currentValue}`, result.toString());
    }
});

const squareRootBtn = document.getElementById("squareRoot") as HTMLButtonElement;
squareRootBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >=0) {
      const result = Math.sqrt(currentValue);
      display.value = result.toString();
      addToHistory(`√(${currentValue})`, result.toString());
    }else{
        display.value = "Invalid Input";
    }
});

const cubeRootBtn = document.getElementById("cubeRoot") as HTMLButtonElement;
cubeRootBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      const result = Math.cbrt(currentValue);
      display.value = result.toString();
      addToHistory(`∛(${currentValue})`, result.toString());
    } else {
        display.value = "Invalid Input";
    }
});

const ansBtn = document.getElementById("ans") as HTMLButtonElement;
ansBtn.addEventListener('click', () => {
    display.value = lastAnswer.toString();
});
//Modulus button event listener
const modulusBtn = document.getElementById("modulus") as HTMLButtonElement;
modulusBtn.addEventListener('click', () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const result = currentValue / 100; // Calculate modulus (remainder after division by 100)
    display.value = result.toString();
    addToHistory(`${currentValue}%`, result.toString());
  } else {
    display.value = "Invalid Input";
  }
});
});
