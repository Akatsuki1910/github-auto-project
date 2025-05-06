// ... (Existing code)
const currentMillisecondsButton = document.getElementById('current-milliseconds') as HTMLButtonElement;
currentMillisecondsButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    display.value = milliseconds.toString();
});
// ... (Rest of existing code)