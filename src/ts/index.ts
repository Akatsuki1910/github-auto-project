// ... (Existing code)

// ... (Existing functions)

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

const display = document.getElementById('display') as HTMLInputElement;
document.querySelectorAll('.digit, .operator, .decimal, #parenthesis-open, #parenthesis-close').forEach(button => {
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

// ... (Existing PI, sqrt, exponent, factorial, log functionality)

// ... existing functions

document.getElementById('e')?.addEventListener('click', () => {
    if (display) {
        display.value += Math.E.toString();
    }
});

document.getElementById('clear-entry')?.addEventListener('click', () => {
  if (display) {
    display.value = '';
  }
});

document.getElementById('square')?.addEventListener('click', () => {
  if (display) {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue).toString();
        addToHistory(`sqr(${currentValue}) = ${display.value}`);
    }
  }
});

document.getElementById('cube')?.addEventListener('click', () => {
  if (display) {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = (currentValue * currentValue * currentValue).toString();
      addToHistory(`cube(${currentValue}) = ${display.value}`);
    }
  }
});