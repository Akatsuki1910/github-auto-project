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
// ... (Existing sin, cos, tan, log, exp, pow, abs, round button logic)
const cuberootButton = document.getElementById('cuberoot') as HTMLButtonElement;
cuberootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        display.value = Math.cbrt(parseFloat(display.value)).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of existing code)