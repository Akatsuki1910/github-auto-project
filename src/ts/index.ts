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

function gcd(a: number, b: number): number {
    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const gcdBtn = document.getElementById("gcd") as HTMLButtonElement;

gcdBtn.addEventListener("click", () => {
    const num1 = parseInt(prompt("Enter the first number for GCD:", "0")!, 10);
    const num2 = parseInt(prompt("Enter the second number for GCD:", "0")!, 10);
    if (isNaN(num1) || isNaN(num2)) {
        display.value = "Invalid input";
    } else {
        const result = gcd(num1, num2);
        display.value = result.toString();
        addToHistory(`gcd(${num1}, ${num2})`, result.toString());
    }
});

// Add LCM functionality
function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

const lcmBtn = document.getElementById("lcm") as HTMLButtonElement;

lcmBtn.addEventListener("click", () => {
    const num1 = parseInt(prompt("Enter the first number for LCM:", "0")!, 10);
    const num2 = parseInt(prompt("Enter the second number for LCM:", "0")!, 10);
    if (isNaN(num1) || isNaN(num2)) {
        display.value = "Invalid input";
    } else {
        const result = lcm(num1, num2);
        display.value = result.toString();
        addToHistory(`lcm(${num1}, ${num2})`, result.toString());
    }
});

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

// ... (Rest of the existing event listeners)

// ... Existing code

// Add fibonacci functionality
const fibonacciBtn = document.getElementById("fibonacci") as HTMLButtonElement;

function fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

fibonacciBtn.addEventListener("click", () => {
  try {
    const num = parseInt(prompt("Enter the value of n for fibonacci(n):", "0")!,10); // Use prompt to get n
    if (isNaN(num)) {
      display.value = "Error: Invalid input for fibonacci";
    } else {
      const result = fibonacci(num);
      display.value = result.toString();
      addToHistory(`fibonacci(${num})`, result.toString());
    }
  } catch (error) {
    display.value = "Error";
  }
});

// isPrime function
const isPrimeBtn = document.getElementById("isPrime") as HTMLButtonElement;

function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

isPrimeBtn.addEventListener("click", () => {
        const num = parseInt(prompt("Enter a number to check if it's prime:", "0")!, 10);
        if (isNaN(num)){
            display.value = "Invalid input";
        } else {
            const result = isPrime(num);
            display.value = result.toString();
            addToHistory(`isPrime(${num})`, result.toString());
        }
});

});
