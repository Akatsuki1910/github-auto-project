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
mrButton.addEventListener('click', () => {
    display.value = memoryRecallValue.toString();
});
// ... (Rest of existing code)