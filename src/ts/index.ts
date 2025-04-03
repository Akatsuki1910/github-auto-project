// ... (Existing code)
const currentTimeHoursButton = document.getElementById('current-time-hours') as HTMLButtonElement;
currentTimeHoursButton.addEventListener('click', () => {
    const now = new Date();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = now.getHours().toString();
});
// ... (Rest of the code)