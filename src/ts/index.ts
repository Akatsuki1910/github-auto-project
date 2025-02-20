// ... (Existing code)

document.getElementById('cube-root')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            const currentValue = parseFloat(display.value);
            display.value = Math.cbrt(currentValue).toString();
        } catch (e) {
            display.value = "Error";
        }
    }
});

//Drop functionality (removes the last entered character)
document.getElementById('drop')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display && display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
});

//Duplicate functionality
document.getElementById('duplicate')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value += display.value;
    }
});

let ans = 0;

document.getElementById('ans')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = ans.toString();
    }
});

//Modulus
document.getElementById('mod')?.addEventListener('click', () => {
    performOperation('%');
});

//Base Conversion
document.getElementById('base-conversion')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        // Implement your base conversion logic here. This is just a placeholder.
        alert('Base conversion feature is coming soon!');
    }
});

function performOperation(operator: string): void {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            const currentExpression = display.value;
            if(currentExpression) {
                const result = eval(currentExpression + operator + currentExpression); //Simple eval, needs refinement for complex ops
                display.value = result.toString();
                ans = result;
            }
        } catch (error) {
            display.value = "Error";
        }
    }
}

document.getElementById('left-parenthesis')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value += '(';
    }
});

document.getElementById('right-parenthesis')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value += ')';
    }
});

//All Clear functionality
document.getElementById('clear-all')?.addEventListener('click', () => {
    (document.getElementById('display') as HTMLInputElement).value = '';
});

// Calculate expression button functionality
document.getElementById('calculate-expression')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
      try {
        ans = eval(display.value);
        display.value = ans.toString();
      } catch (e) {
        display.value = "Error";
      }
    }
  });

// Swap the last two characters entered
document.getElementById('swap')?.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  if (display && display.value.length >= 2) {
    display.value = display.value.slice(0, -2) + display.value.slice(-1) + display.value.slice(-2, -1);
  }
});

//Invert current value
document.getElementById('invert')?.addEventListener('click', () =>{
    const display = document.getElementById('display') as HTMLInputElement;
    if(display){
        try{
            const currentValue = parseFloat(display.value);
            display.value = (1/currentValue).toString();
        }catch(e){
            display.value = "Error";
        }
    }
});