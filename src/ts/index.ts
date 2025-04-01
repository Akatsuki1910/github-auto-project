// ... (Existing code)
const modeButton = document.getElementById('mode') as HTMLButtonElement;
modeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);
    if (numbers.length < 1) {
        display.value = 'Error: Enter at least one number separated by commas.';
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
// ... (Rest of the code)