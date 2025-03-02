// ... (Existing code)

//Added feature: Toggle Error Messages
// ... existing code

// Add other functionalities
// ... existing code

//Added Scientific Notation Toggle
// ... existing code

// Added Deg/Rad toggle functionality
// ... existing code

const display = document.getElementById('display') as HTMLInputElement;

// ... other code

//Added Fixed Decimal Toggle
let fixedDecimal = false;
let decimalPlaces = 2; // Default decimal places
const toggleFixedDecimalButton = document.getElementById('toggle-fixed-decimal') as HTMLButtonElement;
toggleFixedDecimalButton.addEventListener('click', () => {
    fixedDecimal = !fixedDecimal;
    if (fixedDecimal) {
        if (display.value) {
            display.value = Number(display.value).toFixed(decimalPlaces);
        }
    } else {
        if (display.value) {
            display.value = Number(display.value).toString();
        }
    }
});