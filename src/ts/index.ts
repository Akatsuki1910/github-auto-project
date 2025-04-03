// ... (Existing code)
const currentDateLocalButton = document.getElementById('current-date-local') as HTMLButtonElement;
currentDateLocalButton.addEventListener('click', () => {
    const now = new Date();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = now.toLocaleDateString();
});
// ... (Rest of the code)