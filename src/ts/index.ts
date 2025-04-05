// ... (Existing code)
const logBaseButton = document.getElementById('logBase') as HTMLButtonElement;
logBaseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const base = parseFloat(prompt('Enter base:', '10'));
        const value = parseFloat(display.value);
        const result = Math.log(value) / Math.log(base);
        display.value = result.toString();
    } catch (error) {
        display.value = "Error";
    }
});
const minButton = document.getElementById('min') as HTMLButtonElement;
minButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const numbers = prompt('Enter numbers separated by commas:', '1,5,2,8').split(',').map(Number);
        numbers.sort((a, b) => a - b);
        const min = numbers[0];
        display.value = min.toString();
    } catch (error) {
        display.value = "Error";
    }
});
const pow10Button = document.getElementById('pow10') as HTMLButtonElement;
pow10Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const value = parseFloat(display.value);
        const result = Math.pow(10, value);
        display.value = result.toString();
    } catch (error) {
        display.value = "Error";
    }
});
const exp2Button = document.getElementById('exp2') as HTMLButtonElement;
exp2Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const value = parseFloat(display.value);
        const result = Math.pow(2, value);
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)