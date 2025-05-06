// ... (Existing code)
const currentMinutesButton = document.getElementById('current-minutes') as HTMLButtonElement;
currentMinutesButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    const minutes = now.getMinutes();
    display.value = minutes.toString();
});
// ... (Rest of existing code)