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

// Absolute Value function
const absBtn = document.getElementById("abs") as HTMLButtonElement;
absBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
      display.value = "Invalid input";
    } else {
      const result = Math.abs(num); 
      display.value = result.toString();
      addToHistory(`|${num}|`, result.toString());
    }
});

//Floor function
const floorBtn = document.getElementById("floor") as HTMLButtonElement;
floorBtn?.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if(isNaN(num)){
        display.value = "Invalid Input";
    }
    else{
        const result = Math.floor(num);
        display.value = result.toString();
        addToHistory(`floor(${num})`, result.toString());
    }
});

// Ceil function
const ceilBtn = document.getElementById("ceil") as HTMLButtonElement;
ceilBtn?.addEventListener("click", () => {
  const num = parseFloat(display.value);
  if (isNaN(num)) {
    display.value = "Invalid Input";
  } else {
    const result = Math.ceil(num);
    display.value = result.toString();
    addToHistory(`ceil(${num})`, result.toString());
  }
});

const randBtn = document.getElementById("rand") as HTMLButtonElement;
randBtn?.addEventListener("click", () => {
    const randNum = Math.random();
    display.value = randNum.toString();
    addToHistory("rand", randNum.toString());
});

});