// ... (Existing code)
const toggleKeypadButton = document.getElementById('toggleKeypad') as HTMLButtonElement;
const mainPad = document.querySelector('.main-pad') as HTMLDivElement;
toggleKeypadButton.addEventListener('click', () => {
    if (mainPad.style.display === 'none') {
        mainPad.style.display = 'grid';
    } else {
        mainPad.style.display = 'none';
    }
});
// ... (Existing sin, cos, tan, log, exp, pow button logic)
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        display.value = Math.abs(parseFloat(display.value)).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of existing code)