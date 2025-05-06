// ... (Existing code)
const currentDayButton = document.getElementById('current-day') as HTMLButtonElement;
currentDayButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    const day = now.getDate();
    display.value = day.toString();
});
// ... (Rest of existing code)