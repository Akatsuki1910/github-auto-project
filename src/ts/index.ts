// ... (Existing code)

// ... (Existing functions: fibonacci, factorial, etc.)

// ... (Existing event listeners for floor, ceil, power, etc.)

// ... (Existing random, sin, cos, tan event listeners)

// ... (Existing ln, e, inverse event listeners)

// ... (Existing mod, trunc event listeners)

// ... (Existing max, min event listeners)

document.getElementById('hypot')?.addEventListener('click', () => {
  // ... existing hypot code ...
});

// ... existing sum, avg, median, duplicate event listeners

document.getElementById('clear-history')?.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText = '';
    }
});

document.getElementById('toggle-history')?.addEventListener('click', () => {
  const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
  if (historyDisplay) {
    historyDisplay.style.display = historyDisplay.style.display === 'none' ? 'block' : 'none';
  }
});

//Calculate Area of Circle
document.getElementById('calculate-area')?.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius of the circle:') || '0');
    if (isNaN(radius)){
        alert('Invalid input. Please enter a number for the radius.');
    }
    const area = Math.PI * radius * radius;
        const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = area.toString();
        addToHistory(`Area of circle with radius ${radius}: ${area}`);
    }
});

function addToHistory(message: string) {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        const p = document.createElement('p');
        p.textContent = message;
        historyDisplay.appendChild(p);
    }
}

document.getElementById('copy-history')?.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
      navigator.clipboard.writeText(historyDisplay.innerText)
        .then(() => {
          alert('History copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy history: ', err);
          alert('Failed to copy history.');
        });
    }
  });
