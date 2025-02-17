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

// Add feature: Toggle Fullscreen
document.getElementById('toggle-fullscreen')?.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});

// Add feature: Toggle Calculator Visibility
document.getElementById('toggle-calculator')?.addEventListener('click', () => {
    const calculatorDiv = document.getElementById('calculator');
    if (calculatorDiv) {
        calculatorDiv.style.display = calculatorDiv.style.display === 'none' ? 'block' : 'none';
    }
});

// ... (Rest of the code)