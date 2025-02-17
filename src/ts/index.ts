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

// ... (Rest of the code)