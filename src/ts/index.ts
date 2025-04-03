// ... (Existing code)
const dayOfYearButton = document.getElementById('current-day-of-year') as HTMLButtonElement;
dayOfYearButton.addEventListener('click', () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = dayOfYear.toString();
});
// ... (Rest of the code)