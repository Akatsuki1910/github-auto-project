// ... (Existing code)
let memoryRecallValue: number | null = null;
const mrcButton = document.getElementById('mrc') as HTMLButtonElement;
mrcButton.addEventListener('click', () => {
    if (memoryRecallValue !== null) {
        display.value = memoryRecallValue.toString();
    }
});
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const result = math.evaluate(display.value);
        display.value = result.toString();
        memoryRecallValue = result; // Store the result for MRC
    } catch (error) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)