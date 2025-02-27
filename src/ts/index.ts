// ... (Existing code)
// ... (Existing functions)

// ... existing functions

// ... (Other existing functions)
// ... (Existing code)
// ... (Existing variables)

// ... (Existing Event Listeners)

// ... (Existing functions and event listeners)

// ... (Existing Functions)

//Squared Sum Functionality
// ... (Other existing functions)

// Add power of two functionality
// ... existing code

//Add ln functionality
// ... existing code

// Add e functionality
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton?.addEventListener('click', () => {
    display.value = Math.E.toString();
    currentExpression = display.value;
});

//Add Mod functionality
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton?.addEventListener('click', () => {
    currentExpression += '%';
    display.value = currentExpression;
});

// ... (Rest of the existing code)