// ... (Existing code)
const powButton = document.getElementById('pow');
powButton?.addEventListener('click', () => {
    const input = display.value;
    const base = parseFloat(input);
    const exponent = prompt("Enter the exponent:");
    if (exponent !== null && !isNaN(parseFloat(exponent))) {
        display.value = Math.pow(base, parseFloat(exponent)).toString();
    }
    else {
        display.value = 'Invalid input';
    }
});
const absButton = document.getElementById('abs');
absButton.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.abs(Number(input)).toString();
});
const medianButton = document.getElementById('median');
medianButton.addEventListener('click', () => {
    const input = display.value;
    const numbers = input.split(',').map(Number).sort((a, b) => a - b);
    if (numbers.some(isNaN)) {
        display.value = 'Invalid input';
    }
    else {
        const mid = Math.floor(numbers.length / 2);
        const median = numbers.length % 2 === 0 ? (numbers[mid - 1] + numbers[mid]) / 2 : numbers[mid];
        display.value = median.toString();
    }
});
const roundButton = document.getElementById('round');
roundButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.round(Number(input)).toString();
});
// ... (Rest of existing code)