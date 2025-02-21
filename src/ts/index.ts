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

// Added PI functionality
const piButton = document.getElementById('pi');
if (piButton && display) {
    piButton.addEventListener('click', () => {
        display.value += Math.PI;
    });
}

//Added square root functionality
document.getElementById('sqrt')?.addEventListener('click', () => {
    if (display) {
        try {
            display.value = Math.sqrt(parseFloat(display.value)).toString();
        } catch (e) {
            display.value = 'Error';
        }
    }
});

// Added exponent functionality
document.getElementById('exponent')?.addEventListener('click', () => {
    if (display) {
        display.value += '**';
    }
});

//Added factorial functionality
document.getElementById('factorial')?.addEventListener('click', () => {
    if (display) {
        try {
            const num = parseFloat(display.value);
            if (Number.isInteger(num) && num >= 0) {
                let result = 1;
                for (let i = 2; i <= num; i++) {
                    result *= i;
                }
                display.value = result.toString();
            } else {
                display.value = 'Error';
            }
        } catch (e) {
            display.value = 'Error';
        }
    }
});
