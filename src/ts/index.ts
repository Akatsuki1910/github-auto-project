// ... (Existing code)
const calculatePowerButton = document.getElementById('calculate-power') as HTMLButtonElement;
calculatePowerButton.addEventListener('click', () => {
    const base = parseFloat(prompt('Enter base:') || '0');
    const exponent = parseFloat(prompt('Enter exponent:') || '0');
    if (!isNaN(base) && !isNaN(exponent)) {
        display.value = Math.pow(base, exponent).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
const calculateLog10Button = document.getElementById('calculate-log10') as HTMLButtonElement;
calculateLog10Button.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for log10:') || '0');
    if (!isNaN(value)) {
        display.value = Math.log10(value).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
const calculateLog2Button = document.getElementById('calculate-log2') as HTMLButtonElement;
calculateLog2Button.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for log2:') || '0');
    if (!isNaN(value)) {
        display.value = Math.log2(value).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
const calculateNaturalLogButton = document.getElementById('calculate-natural-log') as HTMLButtonElement;
calculateNaturalLogButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for ln:') || '0');
    if (!isNaN(value)) {
        display.value = Math.log(value).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)