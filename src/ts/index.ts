// ... (Existing code)
const currentWeekDayButton = document.getElementById('current-week-day') as HTMLButtonElement;
currentWeekDayButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
    display.value = weekday;
});
// ... (Rest of existing code)