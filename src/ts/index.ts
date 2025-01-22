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

// ... Existing Code

const fibonacciBtn = document.getElementById("fibonacci") as HTMLButtonElement;
fibonacciBtn.addEventListener("click", () => {
    const n = parseInt(display.value);
    if (isNaN(n) || n < 0) {
        display.value = "Invalid input";
    } else {
        const result = fibonacci(n);
        display.value = result.toString();
        addToHistory(`fibonacci(${n})`, result.toString());
    }
});

function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const gcdBtn = document.getElementById("gcd") as HTMLButtonElement;
gcdBtn.addEventListener("click", () => {
  const numStr = display.value;
  const nums = numStr.split(",").map(Number);
  if (nums.some(isNaN)) {
      display.value = "Invalid input";
  } else {
      const result = gcd(...nums);
      display.value = result.toString();
      addToHistory(`gcd(${nums.join(", ")})`, result.toString());
  }
});

function gcd(a: number, b: number): number {
    if (b === 0) {
        return Math.abs(a); // Handle negative inputs
    }
    return gcd(b, a % b);
}

const lcmBtn = document.getElementById("lcm") as HTMLButtonElement;
lcmBtn.addEventListener("click", () => {
    const numStr = display.value;
    const nums = numStr.split(",").map(Number);
    if (nums.some(isNaN)) {
        display.value = "Invalid input";
    } else {
        const result = lcm(...nums);
        display.value = result.toString();
        addToHistory(`lcm(${nums.join(", ")})`, result.toString());
    }
});

function lcm(a: number, b: number): number {
    return Math.abs(a * b) / gcd(a, b);
}

function lcm(...numbers: number[]): number {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = lcm(result, numbers[i]);
    }
    return result;
}
});