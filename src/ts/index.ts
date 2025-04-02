// ... (Existing code)
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    // Implement power functionality here (e.g., using math.js)
    display.value += '**'; // Placeholder - replace with actual power logic
});
// ... (Rest of the code)