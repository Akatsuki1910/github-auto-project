// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    // Memory Minus Button Functionality (M-)
    const mMinusButton = document.getElementById('m-minus');
    if (mMinusButton) {
        mMinusButton.addEventListener('click', () => {
            const currentValue = display.value;
            const memory = localStorage.getItem('calculatorMemory') || '0';
            const newMemory = String(parseFloat(memory) - parseFloat(currentValue));
            localStorage.setItem('calculatorMemory', newMemory);
            console.log(`Memory updated: ${newMemory}`);
            // Display the current memory value in the display
            display.value = newMemory;
        });
    }
    // Memory Clear Button Functionality (MC)
    const mcButton = document.getElementById('mc');
    if (mcButton) {
        mcButton.addEventListener('click', () => {
            localStorage.removeItem('calculatorMemory');
            console.log('Memory cleared');
            display.value = '0'; // Clear the display
        });
    }
});