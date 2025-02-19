// ... (Existing code)

// ... (Existing Event Listeners)

// ... (Rest of the code)

//Factorial function
document.getElementById('factorial')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseInt(display.value);
        if (!isNaN(num)) {
            let result = 1;
            for (let i = 2; i <= num; i++) {
                result *= i;
            }
            display.value = result.toString();
        }
    }
});

// ... other functions

// Power of two function
document.getElementById('power-of-two')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.pow(num, 2).toString();
        }
    }
});

document.getElementById('backspace')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = display.value.slice(0, -1);
    }
});

document.getElementById('sign-change')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        let currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)){
            currentValue *= -1;
            display.value = currentValue.toString();
        }
    }
});

// ... (rest of the functions)

// Square root function
document.getElementById('sqrt')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.sqrt(num).toString();
        }
    }
});

// Cube root function
document.getElementById('cuberoot')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.cbrt(num).toString();
        }
    }
});

// Modulo operator function
document.getElementById('mod')?.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  if (display) {
    try {
      display.value = eval(display.value + '%').toString();
    } catch (error) {
      display.value = "Error";
    }
  }
});

// Duplicate function
document.getElementById('duplicate')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value += display.value;
    }
});