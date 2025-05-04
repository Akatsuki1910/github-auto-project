// ... (Existing code)
const flipSignButton = document.getElementById('flip-sign') as HTMLButtonElement;
flipSignButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        display.value = (parseFloat(display.value) * -1).toString();
    }
});
// ... (Rest of existing code)