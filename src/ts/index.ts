// ... (Existing code)

// ... (Existing functions)

// ... existing functions

//Fibonacci
document.getElementById('fibonacci')?.addEventListener('click', () => {
    if (display) {
        const n = parseInt(display.value);
        if (!isNaN(n)){
            display.value = fibonacci(n).toString();
        }
    }
});

function fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Greatest Common Divisor
document.getElementById('gcd')?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const numbers = currentValue.split(',').map(Number);
        if (numbers.length === 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])){
            display.value = gcd(numbers[0], numbers[1]).toString();
        } else {
            display.value = "Invalid Input";
        }
    }
});

function gcd(a: number, b: number): number {
    while(b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Least Common Multiple
document.getElementById('lcm')?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const numbers = currentValue.split(',').map(Number);
        if (numbers.length === 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])) {
            display.value = lcm(numbers[0], numbers[1]).toString();
        } else {
            display.value = "Invalid Input";
        }
    }
});

function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

//Base Conversion
document.getElementById('base-conversion')?.addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue) {
    const [number, base] = currentValue.split(',').map(s => s.trim());
    const parsedNumber = parseInt(number);
    const parsedBase = parseInt(base);
    if (!isNaN(parsedNumber) && !isNaN(parsedBase) && parsedBase >= 2 && parsedBase <= 36) {
      display.value = parsedNumber.toString(parsedBase);
    } else {
      display.value = 'Invalid input';
    }
  }
});

//Calculate Sum
document.getElementById('calculate-sum')?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const numbers = currentValue.split(',').map(Number);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        display.value = sum.toString();
    }
});

//nCr
document.getElementById('nCr')?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const [n, r] = currentValue.split(',').map(Number);
        if (!isNaN(n) && !isNaN(r)) {
            display.value = nCr(n, r).toString();
        }
    }
});

function factorial(n: number): number {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function nCr(n: number, r: number): number {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

//Base-10 Logarithm
document.getElementById('base-10-log')?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
      const num = parseFloat(currentValue);
      if (!isNaN(num)) {
        display.value = Math.log10(num).toString();
      }
    }
  });

// Binary Conversion
document.getElementById('binary-conversion')?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const num = parseInt(currentValue);
        if (!isNaN(num)) {
            display.value = num.toString(2);
        }
    }
});

//Octal Conversion
document.getElementById('octal-conversion')?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
      const num = parseInt(currentValue);
      if (!isNaN(num)) {
        display.value = num.toString(8);
      }
    }
});

//Square Root Function
document.getElementById('square-root')?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const num = parseFloat(currentValue);
        if (!isNaN(num)) {
            display.value = Math.sqrt(num).toString();
        }
    }
});
// ... (Other existing functions)
const display = document.getElementById('display') as HTMLInputElement;