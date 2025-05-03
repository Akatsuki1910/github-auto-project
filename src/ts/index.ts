// ... (Existing code)
const toggleDisplaySizeButton = document.getElementById('toggle-display') as HTMLButtonElement;
const calculatorContainer = document.getElementById('calculator') as HTMLDivElement;
toggleDisplaySizeButton.addEventListener('click', () => {
    if (calculatorContainer.classList.contains('large')) {
        calculatorContainer.classList.remove('large');
    } else {
        calculatorContainer.classList.add('large');
    }
});
const toggleKeypadButton = document.getElementById('toggle-keypad') as HTMLButtonElement;
const mainPad = document.querySelector('.main-pad') as HTMLDivElement;
toggleKeypadButton.addEventListener('click', () => {
    if (mainPad.style.display === 'none') {
        mainPad.style.display = 'grid';
    } else {
        mainPad.style.display = 'none';
    }
});
// ... (Rest of existing code)