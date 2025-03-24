// ... (Existing code)
const memory = 0;
const memoryStoreButton = document.getElementById('memory-store');
const memoryRecallButton = document.getElementById('memory-recall');
const memoryClearButton = document.getElementById('memory-clear');
const memoryPlusButton = document.getElementById('memory-plus');
memoryStoreButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    memory = parseFloat(display.value);
});
memoryRecallButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    display.value = memory.toString();
});
memoryClearButton.addEventListener('click', () => {
    memory = 0;
});
memoryPlusButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    memory += parseFloat(display.value);
});
const sumAllButton = document.getElementById('sum-all');
sumAllButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    const numbers = display.value.split('+').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Invalid Input';
        return;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    display.value = sum.toString();
});