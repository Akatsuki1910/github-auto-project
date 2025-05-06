// ... (Existing code)
const currentDateTimeShortButton = document.getElementById('current-date-time-short') as HTMLButtonElement;
currentDateTimeShortButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    display.value = now.toLocaleString();
});
// ... (Rest of existing code)