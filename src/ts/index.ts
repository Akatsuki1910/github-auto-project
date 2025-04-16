// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    // Memory Recall Button Functionality (MR)
    const mrButton = document.getElementById('mr');
    if (mrButton) {
        mrButton.addEventListener('click', () => {
            const memory = localStorage.getItem('calculatorMemory') || '0';
            display.value = memory;
            console.log(`Memory recalled: ${memory}`);
        });
    }
    // Memory Minus Button Functionality (M-)
    const mMinusButton = document.getElementById('m-minus');
    if (mMinusButton) {
        mMinusButton.addEventListener('click', () => {
            const currentValue = display.value;
            const memory = localStorage.getItem('calculatorMemory') || '0';
            const newMemory = String(parseFloat(memory) - parseFloat(currentValue));
            localStorage.setItem('calculatorMemory', newMemory);
            console.log(`Memory updated: ${newMemory}`);
            display.value = newMemory; // Display the current memory value in the display
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