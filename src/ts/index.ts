// ... (Existing code)
const currentTimeSecondsButton = document.getElementById('current-time-seconds') as HTMLButtonElement;
currentTimeSecondsButton.addEventListener('click', () => {
    const now = new Date();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = now.getSeconds().toString();
});
// ... (Rest of the code)