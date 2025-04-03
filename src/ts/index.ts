// ... (Existing code)
const currentDateUTCButton = document.getElementById('current-date-utc') as HTMLButtonElement;
currentDateUTCButton.addEventListener('click', () => {
    const now = new Date();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = now.toUTCString();
});
// ... (Rest of the code)