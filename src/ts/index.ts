// ... (Existing code)
//Added Feature: Export History
// ... (Existing code for export history)
//Added Feature: Import History
// ... (Existing code for import history)
//Added Feature: Save State
// ... (Existing code for save state)
// Added Feature: Restore State
// ... (Existing code for restore state)
// ... (Existing code for clear entry)
//Added Feature: Squared, Cubed, Factorial, Inverse
// ... (Existing code for these features)
//Added Feature: Power (xʸ)
// ... (Existing code for power)
//Added Feature: Logarithm
// ... (Existing code for logarithm)
// ... (Rest of the existing code)
// Added Feature: Sine function
const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.sin(parseFloat(display.value)).toString();
});