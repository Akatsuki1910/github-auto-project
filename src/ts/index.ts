// ... (Existing code)
const signChangeButton = document.getElementById('sign-change') as HTMLButtonElement;
signChangeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = (-currentValue).toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)