// ... (Existing code)
const currentTime24hButton = document.getElementById('current-time-24h') as HTMLButtonElement;
currentTime24hButton.addEventListener('click', () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = `${hours}:${minutes}`;
});
// ... (Rest of the code)