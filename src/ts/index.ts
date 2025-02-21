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

// New Feature: Calculate Square
const display = document.getElementById('display') as HTMLInputElement;
document.querySelectorAll('.digit, .operator, .decimal').forEach(button => {
    button.addEventListener('click', () => {
        if(display){
            display.value += button.textContent;
        }
    });
})

document.querySelector('.equals')?.addEventListener('click', () => {
    try{
        if(display){
            display.value = eval(display.value);
            addToHistory(`${display.value}`);
        }
    }
    catch (e) {
        if(display){
            display.value = 'Error';
        }
    }
});