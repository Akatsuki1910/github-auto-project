// ... (Existing code)
const signDisplayButton = document.getElementById('sign-display') as HTMLButtonElement;
signDisplayButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = Math.sign(number).toString();
});