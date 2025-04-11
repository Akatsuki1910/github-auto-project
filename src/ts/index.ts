// ... (Existing code)
const calculateRandomButton = document.getElementById('calculate-random') as HTMLButtonElement;
calculateRandomButton.addEventListener('click', () => {
    display.value = math.random().toString();
});