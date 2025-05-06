// ... (Existing code)
const currentDateTimeFullButton = document.getElementById('current-date-time-full') as HTMLButtonElement;
currentDateTimeFullButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    display.value = now.toString();
});
// ... (Rest of existing code)