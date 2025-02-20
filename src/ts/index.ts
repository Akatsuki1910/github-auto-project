// ... (Existing code)
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