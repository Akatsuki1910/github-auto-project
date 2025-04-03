// ... (Existing code)
const currentSecondButton = document.getElementById('current-second') as HTMLButtonElement;
currentSecondButton.addEventListener('click', () => {
    const today = new Date();
    const second = today.getSeconds();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = second.toString();
});
// ... (Rest of the code)