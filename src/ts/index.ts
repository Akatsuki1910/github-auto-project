// ... (Existing code)

// ... (Existing functions)

// ... existing functions

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

// ... (Other existing functions)