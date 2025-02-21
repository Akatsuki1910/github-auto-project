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

//Calculate Circumference of Circle
document.getElementById('calculate-circumference')?.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius of the circle:') || '0');
    if(isNaN(radius)){
        alert('Invalid input. Please enter a number for the radius');
        return;
    }
    const circumference = 2 * Math.PI * radius;
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = circumference.toString();
        addToHistory(`Circumference of circle with radius ${radius}: ${circumference}`);
    }
});

//Calculate Volume of Sphere
document.getElementById('calculate-volume')?.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius of the sphere:') || '0');
    if (isNaN(radius)) {
        alert('Invalid input. Please enter a number for the radius.');
        return;
    }
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = volume.toString();
        addToHistory(`Volume of sphere with radius ${radius}: ${volume}`);
    }
});

// Calculate Cube Root
document.getElementById('calculate-cube-root')?.addEventListener('click', () => {
    const num = parseFloat(prompt('Enter a number:') || '0');
    if (isNaN(num)) {
        alert('Invalid input. Please enter a number.');
        return;
    }
    const cubeRoot = Math.cbrt(num);
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = cubeRoot.toString();
        addToHistory(`Cube root of ${num}: ${cubeRoot}`);
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