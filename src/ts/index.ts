// ... (Existing code)
const currentTimeLocalButton = document.getElementById('current-time-local') as HTMLButtonElement;
currentTimeLocalButton.addEventListener('click', () => {
    const now = new Date();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = now.toLocaleTimeString();
});

const currentTimeISOButton = document.getElementById('current-time-iso') as HTMLButtonElement;
currentTimeISOButton.addEventListener('click', () => {
    const now = new Date();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = now.toISOString().split('T')[1].split('.')[0];
});
// ... (Rest of the code)