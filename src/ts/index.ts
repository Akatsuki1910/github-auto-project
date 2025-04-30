// ... (Existing code)
const roundToNButton = document.getElementById('round-to-n') as HTMLButtonElement;
roundToNButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(prompt("Enter number of decimal places to round to:", "0") || "0");
    if (isNaN(n) || n < 0) {
        display.value = "Invalid input for n";
        return;
    }
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            throw new Error("Invalid number");
        }
        display.value = num.toFixed(n);
    }
    catch (e) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)