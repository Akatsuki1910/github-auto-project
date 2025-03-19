// ... (Existing code)
const mrButton = document.getElementById('mr') as HTMLButtonElement;
const msButton = document.getElementById('ms') as HTMLButtonElement;
const mcButton = document.getElementById('mc') as HTMLButtonElement;
const mPlusButton = document.getElementById('m-plus') as HTMLButtonElement;
let memory = 0;
mrButton.addEventListener('click', () => {
    display.value = memory.toString();
});
msButton.addEventListener('click', () => {
    memory = parseFloat(display.value);
});
mcButton.addEventListener('click', () => {
    memory = 0;
    display.value = '0';
});
mPlusButton.addEventListener('click', () => {
    memory += parseFloat(display.value);
});
// ... (Existing code)