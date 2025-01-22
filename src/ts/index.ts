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

const geoMeanBtn = document.getElementById("geoMean") as HTMLButtonElement;
geoMeanBtn.addEventListener("click", () => {
    const numStr = display.value;
    const nums = numStr.split(",").map(Number);

    if (nums.some(isNaN) || nums.some(x => x < 0)) {
        display.value = "Invalid input (positive numbers only)";
        return;
    }

    const product = nums.reduce((a, b) => a * b, 1);
    const geoMean = Math.pow(product, 1 / nums.length);

    display.value = geoMean.toString();
    addToHistory(`geoMean(${nums.join(", ")})`, geoMean.toString());
});

const harmonicMeanBtn = document.getElementById("harmonicMean") as HTMLButtonElement;
harmonicMeanBtn.addEventListener("click", () => {
    const numStr = display.value;
    const nums = numStr.split(",").map(Number);

    if (nums.some(isNaN) || nums.some(x => x <= 0)) {
        display.value = "Invalid input (positive numbers only)";
        return;
    }

    const sumOfReciprocals = nums.reduce((sum, num) => sum + (1 / num), 0);
    const harmonicMean = nums.length / sumOfReciprocals;

    display.value = harmonicMean.toString();
    addToHistory(`harmonicMean(${nums.join(", ")})`, harmonicMean.toString());
});

const calculateHistoryBtn = document.getElementById("calculateHistory") as HTMLButtonElement;
calculateHistoryBtn.addEventListener("click", () => {
    let total = 0;
    for (let i = 0; i < history.length; i++) {
        let result = history[i].split(" = ")[1];
        total += parseFloat(result); // Parse the result string to a number
    }
    display.value = total.toString();
    addToHistory("Calculate History", total.toString());
});
});
