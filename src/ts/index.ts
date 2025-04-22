// ... (Existing code)
const clampButton = document.getElementById('clamp');
clampButton?.addEventListener('click', () => {
    const input = parseFloat(display.value);
    const min = parseFloat(prompt("Enter the minimum value:", "0") || "0");
    const max = parseFloat(prompt("Enter the maximum value:", "1") || "1");
    display.value = math.clamp(input, min, max).toString();
});
//rest of code