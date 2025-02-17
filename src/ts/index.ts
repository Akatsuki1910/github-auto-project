// ... (Existing code)

// ... (Existing Event Listeners)

// ... (Rest of the code)
document.getElementById('pi')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value += Math.PI.toString();
    }
});