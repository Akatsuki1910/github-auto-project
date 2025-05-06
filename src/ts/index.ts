// ... (Existing code)
const currentHoursButton = document.getElementById('current-hours') as HTMLButtonElement;
currentHoursButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    const hours = now.getHours();
    display.value = hours.toString();
});
// ... (Rest of existing code)