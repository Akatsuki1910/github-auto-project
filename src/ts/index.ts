// ... (Existing code)
const calculateModeButton = document.getElementById('mode') as HTMLButtonElement;
calculateModeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numCount = parseInt(prompt('Enter the number of values:', '0') || '0', 10);
    if (isNaN(numCount) || numCount <= 0) {
        display.value = 'Error: Invalid input';
        return;
    }
    const numbers = [];
    for (let i = 0; i < numCount; i++) {
        const num = parseFloat(prompt(`Enter number ${i + 1}:`, '0') || '0');
        if (isNaN(num)) {
            display.value = 'Error: Invalid input';
            return;
        }
        numbers.push(num);
    }
    const counts = {};
    let mode = null;
    let maxCount = 0;
    for (const num of numbers) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            mode = num;
            maxCount = counts[num];
        }
    }
    display.value = mode.toString();
});
// ... (Rest of the code)