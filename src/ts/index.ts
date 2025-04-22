// ... (Existing code)
const cubeButton = document.getElementById('cube');
cubeButton?.addEventListener('click', () => {
    const input = display.value;
    display.value = Math.pow(Number(input), 3).toString();
});
// ... (Rest of existing code)