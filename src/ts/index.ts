// ... (Existing code)
const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
currentDateButton.addEventListener('click', () => {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    display.value = dateString;
});