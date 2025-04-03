// ... (Existing code)
const currentTimeMillisecondsButton = document.getElementById('current-time-milliseconds') as HTMLButtonElement;
currentTimeMillisecondsButton.addEventListener('click', () => {
    const now = new Date();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = now.getMilliseconds().toString();
});
// ... (Rest of the code)