// ... (Existing code)
const toggleKeypadButton = document.getElementById('toggle-keypad') as HTMLButtonElement;
const mainPad = document.querySelector('.main-pad') as HTMLDivElement;
toggleKeypadButton.addEventListener('click', () => {
    if (mainPad.style.display === 'none') {
        mainPad.style.display = 'grid';
    } else {
        mainPad.style.display = 'none';
    }
});
const mrButton = document.getElementById('mr') as HTMLButtonElement;
let memoryRecallValue = 0;
const msButton = document.getElementById('ms') as HTMLButtonElement;
msButton.addEventListener('click', () => {
    memoryRecallValue = parseFloat(display.value);
});
mrButton.addEventListener('click', () => {
    display.value = memoryRecallValue.toString();
});
// ... (Rest of existing code)