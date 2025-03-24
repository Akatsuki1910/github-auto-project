// ... (Existing code)
const memoryPlusButton = document.getElementById('memory-plus');
let memoryValue = 0;
memoryPlusButton.addEventListener('click', () => {
    try {
        memoryValue += parseFloat(display.value);
    } catch (error) {
        display.value = "Error";
    }
});
const randomButton = document.getElementById('random');
randomButton.addEventListener('click', () => {
    display.value = Math.random().toString();
});