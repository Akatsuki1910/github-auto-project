// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const msButton = document.getElementById('ms');
    if (msButton) {
        msButton.addEventListener('click', () => {
            const currentValue = display.value;
            localStorage.setItem('calculatorMemory', currentValue);
            console.log(`Memory saved: ${currentValue}`);
            display.value = currentValue;
        });
    }
    // Memory Recall Button Functionality (MR)
    // ... existing code
});