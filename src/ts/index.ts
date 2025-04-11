// ... (Existing code)
const calculateEButton = document.getElementById('calculate-e') as HTMLButtonElement;
calculateEButton.addEventListener('click', () => {
    display.value = math.e.toString();
});
const calculateRandomButton = document.getElementById('calculate-random') as HTMLButtonElement;
calculateRandomButton.addEventListener('click', () => {
    display.value = math.random().toString();
});