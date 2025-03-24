// ... (Existing code)
const duplicateButton = document.getElementById('duplicate');
duplicateButton.addEventListener('click', () => {
    display.value = display.value + display.value;
});
const toggleSignButton = document.getElementById('toggleSign');
toggleSignButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = (-currentValue).toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
const memoryPlusButton = document.getElementById('memory-plus');
let memoryValue = 0;
memoryPlusButton.addEventListener('click', () => {
    try {
        memoryValue += parseFloat(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
});
const randomButton = document.getElementById('random');
randomButton.addEventListener('click', () => {
    display.value = Math.random().toString();
});
const memoryRecallButton = document.getElementById('memory-recall');
memoryRecallButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});