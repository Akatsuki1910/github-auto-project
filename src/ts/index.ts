// ... (Existing code)
const currentTime12HButton = document.getElementById('current-time-12h') as HTMLButtonElement;
currentTime12HButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    display.value = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
});
// ... (Rest of existing code)