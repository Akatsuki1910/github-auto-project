// ... (Existing code)
const currentTime24HButton = document.getElementById('current-time-24h') as HTMLButtonElement;
currentTime24HButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    display.value = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
});
// ... (Rest of existing code)