// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const mPlusButton = document.getElementById('m-plus');
    if (mPlusButton) {
        mPlusButton.addEventListener('click', () => {
            const currentValue = display.value;
            const savedValue = localStorage.getItem('calculatorMemory') || '0';
            const newValue = parseFloat(savedValue) + parseFloat(currentValue);
            localStorage.setItem('calculatorMemory', newValue.toString());
            console.log(`Memory added to: ${newValue}`);
            display.value = newValue.toString();
        });
    }
    const mMinusButton = document.getElementById('m-minus');
    if (mMinusButton) {
        mMinusButton.addEventListener('click', () => {
            const currentValue = display.value;
            const savedValue = localStorage.getItem('calculatorMemory') || '0';
            const newValue = parseFloat(savedValue) - parseFloat(currentValue);
            localStorage.setItem('calculatorMemory', newValue.toString());
            console.log(`Memory subtracted from: ${newValue}`);
            display.value = newValue.toString();
        });
    }
    const msButton = document.getElementById('ms');
    if (msButton) {
        msButton.addEventListener('click', () => {
            const currentValue = display.value;
            localStorage.setItem('calculatorMemory', currentValue);
            console.log(`Memory saved: ${currentValue}`);
            display.value = currentValue;
        });
    }
    const mrButton = document.getElementById('mr');
    if (mrButton) {
        mrButton.addEventListener('click', () => {
            const savedValue = localStorage.getItem('calculatorMemory');
            if (savedValue !== null) {
                display.value = savedValue;
                console.log(`Memory recalled: ${savedValue}`);
            }
            else {
                console.log("Nothing saved in memory");
                display.value = "0";
            }
        });
    }
    const mcButton = document.getElementById('mc');
    if (mcButton) {
        mcButton.addEventListener('click', () => {
            localStorage.removeItem('calculatorMemory');
            console.log("Memory Cleared");
        });
    }
});