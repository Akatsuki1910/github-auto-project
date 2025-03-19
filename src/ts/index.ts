// ... (Existing code)
const mrButton = document.getElementById('mr') as HTMLButtonElement;
let memory = 0;
mrButton.addEventListener('click', () => {
    display.value = memory.toString();
});
mcButton.addEventListener('click', () => {
    memory = 0;
    display.value = '0';
});
// ... (Existing code)