// ... (Existing code)
const currentMinuteButton = document.getElementById('current-minute') as HTMLButtonElement;
currentMinuteButton.addEventListener('click', () => {
    const today = new Date();
    const minute = today.getMinutes();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = minute.toString();
});
// ... (Rest of the code)