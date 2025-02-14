// ... (Existing code)
//Inverse function
document.getElementById('inverse')?.addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (num === 0) {
        currentInput = "Error: Division by zero";
    }
    else {
        currentInput = (1 / num).toString();
    }
    display.value = currentInput;
});
// ... (Rest of the code)