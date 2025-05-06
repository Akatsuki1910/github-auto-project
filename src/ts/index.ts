// ... (Existing code)
const currentYearButton = document.getElementById('current-year') as HTMLButtonElement;
currentYearButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    const year = now.getFullYear();
    display.value = year.toString();
});
// ... (Rest of existing code)