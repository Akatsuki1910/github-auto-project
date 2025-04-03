// ... (Existing code)
const currentTimeMinutesButton = document.getElementById('current-time-minutes') as HTMLButtonElement;
currentTimeMinutesButton.addEventListener('click', () => {
    const now = new Date();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = now.getMinutes().toString();
});
// ... (Rest of the code)