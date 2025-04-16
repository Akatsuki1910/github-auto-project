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
    const mrButton = document.getElementById('mr');
    if (mrButton) {
        mrButton.addEventListener('click', () => {
            const savedValue = localStorage.getItem('calculatorMemory');
            if (savedValue !== null) {
                display.value = savedValue;
                console.log(`Memory recalled: ${savedValue}`);
            }
            else{
                console.log("Nothing saved in memory");
                display.value = "0";
            }
        });
    }
    const mcButton = document.getElementById('mc');
    if(mcButton){
        mcButton.addEventListener('click', () => {
            localStorage.removeItem('calculatorMemory');
            console.log("Memory Cleared");
        });
    }
});