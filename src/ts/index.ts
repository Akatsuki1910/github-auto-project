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
// ... (Existing sin, cos, tan, log, exp button logic)
const powButton = document.getElementById('pow') as HTMLButtonElement;
powButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const base = parseFloat(display.value);
        display.value += '**'; // Use ** for exponentiation
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of existing code)