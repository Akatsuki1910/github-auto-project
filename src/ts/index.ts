// ... (Existing code)

document.querySelectorAll('.digit, .operator, .decimal').forEach(button => {
    button.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            display.value += button.textContent;
        }
    });
});

document.querySelector('.equals')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            display.value = eval(display.value).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});

//Exponetial function
document.getElementById('exp')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.exp(num).toString();
        }
    }
});

//Square Root Function
document.getElementById('sqrt')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if(display) {
        const num = parseFloat(display.value);
        if(!isNaN(num) && num >=0) {
            display.value = Math.sqrt(num).toString();
        } else {
            display.value = "Invalid Input";
        }
    }
});

// Percentage function
document.getElementById('percentage')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = (num / 100).toString();
        }
    }
});

//Clear function
document.getElementById('clear')?.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  if (display) {
    display.value = '';
  }
});

// Plus/Minus function
document.getElementById('plus-minus')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        let currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
          currentValue *= -1;
          display.value = currentValue.toString();
        }
      }
});

//Pi function
document.getElementById('pi')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value += Math.PI.toString();
    }
});

//Factorial function
document.getElementById('factorial')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseInt(display.value);
        if (!isNaN(num) && num >= 0) {
            let result = 1;
            for (let i = 1; i <= num; i++) {
                result *= i;
            }
            display.value = result.toString();
        } else {
          display.value = "Invalid Input for factorial";
        }
    }
});