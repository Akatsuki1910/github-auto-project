// ... (Existing code)
const modeButton = document.getElementById('mode') as HTMLButtonElement;
modeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Error';
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
        } else if (counts[num] === maxCount) {
            mode.push(num);
        }
    }
    display.value = mode.join(',');
});
// ... (Rest of the code)