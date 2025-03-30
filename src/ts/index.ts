// ... (Existing code)
const modeButton = document.getElementById('mode') as HTMLButtonElement;
modeButton.addEventListener('click', () => {
    const currentValue = display.value;
    const numbers = currentValue.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input for mode";
        return;
    }
    const counts = {};
    let mode = [];
    let maxCount = 0;
    for (const num of numbers) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            mode = [num];
            maxCount = counts[num];
        }
        else if (counts[num] === maxCount) {
            mode.push(num);
        }
    }
    display.value = mode.join(',');
});