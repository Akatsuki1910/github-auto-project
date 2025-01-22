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

});