// ... (Existing code)
const weekNumberButton = document.getElementById('current-week-number') as HTMLButtonElement;
weekNumberButton.addEventListener('click', () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - startOfYear.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    const weekNumber = Math.ceil(diff / oneWeek);
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = weekNumber.toString();
});
// ... (Rest of the code)