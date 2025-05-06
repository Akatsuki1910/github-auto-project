// ... (Existing code)
const currentMonthButton = document.getElementById('current-month') as HTMLButtonElement;
currentMonthButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    const month = now.getMonth() + 1; // Month is 0-indexed
    display.value = month.toString();
});
// ... (Rest of existing code)