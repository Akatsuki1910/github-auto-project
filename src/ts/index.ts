// ... (Existing Code)

// ... existing variables and buttons
// ... existing event listeners
// ... existing functions (cube, inverse, round, etc)

// ... (Existing Code)

// ... existing functions

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... (Existing buttons)
    // ... existing variables
    // ... existing code
 // Add factorial button
    // ... existing functions

// Add factorial button
    const calculateFactorialBtn = document.getElementById("factorial") as HTMLButtonElement;

    function factorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        } else if (n < 0) {
          return NaN; // Return NaN for negative numbers
        }
        return n * factorial(n - 1);
    }

    calculateFactorialBtn.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const result = factorial(currentValue);
            if (isNaN(result)){
              display.value = "Error: Factorial not defined for negative numbers";
            }else {
              display.value = result.toString();
              currentExpression = `${currentValue}!`;
              currentExpressionDisplay.textContent = currentExpression;
            }
        }
    });

// Existing code ...

// Plus/Minus button functionality
// ... existing plusMinusBtn code

//Sign Change button functionality
// ... existing signChangeBtn code

// ... existing squaredBtn, cubedBtn, base10LogBtn, naturalLogBtn code

const exp2Btn = document.getElementById("exp2") as HTMLButtonElement;
// ... existing exp2Btn code

const tenPowerXBtn = document.getElementById("tenPowerX") as HTMLButtonElement;
// ... existing tenPowerXBtn code

const sumNumbersBtn = document.getElementById("sumNumbers") as HTMLButtonElement;
// ... existing sumNumbersBtn code

const negateBtn = document.getElementById("negate") as HTMLButtonElement;
// ... existing negateBtn code

// Add percentage button functionality
  const percentBtn = document.getElementById("percent") as HTMLButtonElement;

  percentBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = (currentValue / 100).toString();
    }
  });

 //Fibonacci button
    const fibonacciBtn = document.getElementById("fibonacci") as HTMLButtonElement;

    function fibonacci(n: number): number {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    fibonacciBtn.addEventListener("click", () => {
      const currentValue = parseInt(display.value);
      if (!isNaN(currentValue) && currentValue >=0) {
        const result = fibonacci(currentValue);
        display.value = result.toString();
        currentExpression = `fibonacci(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
      } else{
        display.value = "Error: Input must be a non-negative integer";
      }
    });
//Add Random Integer button
 const randomIntegerBtn = document.getElementById("randomInteger") as HTMLButtonElement;

 randomIntegerBtn.addEventListener("click", () => {
  const minVal = parseFloat(prompt("Enter minimum value:", "0") || "0");
  const maxVal = parseFloat(prompt("Enter maximum value:", "100") || "100");

  if (!isNaN(minVal) && !isNaN(maxVal)) {
    const randomInt = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    display.value = randomInt.toString();
    currentExpression = `random(${minVal}, ${maxVal})`;
    currentExpressionDisplay.textContent = currentExpression;
  } else {
    display.value = "Invalid input";
  }
});

    // Add isPrime button
    const isPrimeBtn = document.getElementById("isPrime") as HTMLButtonElement;

    function isPrime(num: number): boolean {
      if (num <= 1) return false;
      if (num <= 3) return true;

      // This is checked so that we can skip
      // middle five numbers in below loop
      if (num % 2 === 0 || num % 3 === 0) return false;

      for (let i = 5; i * i <= num; i = i + 6)
        if (num % i === 0 || num % (i + 2) === 0)
          return false;

      return true;
  }

  isPrimeBtn.addEventListener("click", () => {
      const currentValue = parseInt(display.value);
          if (!isNaN(currentValue)) {
              const result = isPrime(currentValue);
              display.value = result.toString();
              currentExpression = `isPrime(${currentValue})`;
              currentExpressionDisplay.textContent = currentExpression;        
          }
  });
//Add gcd button
const gcdBtn = document.getElementById("gcd") as HTMLButtonElement;

function gcd(a: number, b: number): number {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  }

gcdBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    const nextValue = parseFloat(prompt("Enter the second number:") || "0");

    if(!isNaN(currentValue) && !isNaN(nextValue)){
        const result = gcd(currentValue,nextValue);
        display.value = result.toString();
        currentExpression = `gcd(${currentValue},${nextValue})`;
        currentExpressionDisplay.textContent = currentExpression;
    } else {
        display.value = "Invalid input";
    }
});

//Add lcm button
const lcmBtn = document.getElementById("lcm") as HTMLButtonElement;

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

lcmBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    const nextValue = parseFloat(prompt("Enter the second number:") || "0");

    if(!isNaN(currentValue) && !isNaN(nextValue)){
        const result = lcm(currentValue, nextValue);
        display.value = result.toString();
        currentExpression = `lcm(${currentValue},${nextValue})`;
        currentExpressionDisplay.textContent = currentExpression;
    }else{
        display.value = "Invalid Input";
    }
});

const absValueBtn = document.getElementById("absValue") as HTMLButtonElement;

absValueBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.abs(currentValue).toString();
        currentExpression = `|${currentValue}|`;
        currentExpressionDisplay.textContent = currentExpression;
    }
});

const signFlipBtn = document.getElementById("signFlip") as HTMLButtonElement;
signFlipBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = (-currentValue).toString();
    currentExpression = `-${currentValue}`;
    currentExpressionDisplay.textContent = currentExpression;
  }
});
//Add a square root button
const squaredRootBtn = document.getElementById("squaredRoot") as HTMLButtonElement;
squaredRootBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    if (currentValue < 0) {
      display.value = "Invalid input";
    } else {
      const result = Math.sqrt(currentValue);
      display.value = result.toString();
      currentExpression = `√(${currentValue})`;
      currentExpressionDisplay.textContent = currentExpression;
    }
  }
});

const roundToNearestBtn = document.getElementById("roundToNearest") as HTMLButtonElement;
roundToNearestBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const nearestValue = parseFloat(prompt("Round to nearest:") || "1");
    if(!isNaN(nearestValue)){
    const result = Math.round(currentValue / nearestValue) * nearestValue;
    display.value = result.toString();
    currentExpression = `round(${currentValue},${nearestValue})`;
    currentExpressionDisplay.textContent = currentExpression;  
    } else {
      display.value = "Invalid Input for nearest value";
    }
  }
});

// Existing Code ...
});
