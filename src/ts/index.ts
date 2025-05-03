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
const mcButton = document.getElementById('mc') as HTMLButtonElement;
mcButton.addEventListener('click', () => {
    memoryRecallValue = 0;
});
const mmultiplyButton = document.getElementById('m-multiply') as HTMLButtonElement;
mmultiplyButton.addEventListener('click', () => {
    memoryRecallValue *= parseFloat(display.value);
    display.value = memoryRecallValue.toString();
});
const mdivideButton = document.getElementById('m-divide') as HTMLButtonElement;
mdivideButton.addEventListener('click', () => {
    memoryRecallValue /= parseFloat(display.value);
    display.value = memoryRecallValue.toString();
});
const mplusButton = document.getElementById('m-plus') as HTMLButtonElement;
mplusButton.addEventListener('click', () => {
    memoryRecallValue += parseFloat(display.value);
    display.value = memoryRecallValue.toString();
});
const mminusButton = document.getElementById('m-minus') as HTMLButtonElement;
mminusButton.addEventListener('click', () => {
    memoryRecallValue -= parseFloat(display.value);
    display.value = memoryRecallValue.toString();
});
const mrcButton = document.getElementById('mrc') as HTMLButtonElement;
mrcButton.addEventListener('click', () => {
    display.value = memoryRecallValue.toString();
    memoryRecallValue = 0;
});
// ... (Rest of existing code)