// ... (Existing code)
const currentMillisecondButton = document.getElementById('current-millisecond') as HTMLButtonElement;
currentMillisecondButton.addEventListener('click', () => {
    const today = new Date();
    const millisecond = today.getMilliseconds();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = millisecond.toString();
});
// ... (Rest of the code)