// ... (Existing code)

// Sign change
document.getElementById('sign-change')?.addEventListener('click', () => {
    let display = document.getElementById('display') as HTMLInputElement;
    let currentValue = display.value;
    currentValue = (parseFloat(currentValue) * -1).toString();
    updateDisplay(currentValue);
});

//Added Feature: Clear History Button
document.getElementById('clear-history')?.addEventListener('click', () => {
    const historyDiv = document.getElementById('history');
    if (historyDiv) {
        historyDiv.innerHTML = '';
    }
});

// Add feature: Open a new window
document.getElementById('open-new-window')?.addEventListener('click', () => {
    window.open('https://www.example.com', '_blank');
});

// ... (Rest of the code)