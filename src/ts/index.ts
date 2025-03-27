// ... (Existing code)
let memoryValue = 0;
const memoryPlusButton = document.getElementById('memory-plus');
if (memoryPlusButton) {
    memoryPlusButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                memoryValue += parseFloat(display.value);
            }
            catch (error) {
                // Handle error if display value is not a number
            }
        }
    });
}
const memoryRecallButton = document.getElementById('memory-recall');
if (memoryRecallButton) {
    memoryRecallButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            display.value = memoryValue.toString();
        }
    });
}