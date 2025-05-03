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
const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const result = math.sin(parseFloat(display.value));
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of existing code)