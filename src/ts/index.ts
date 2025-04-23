// ... (Existing code)
const lcmButton = document.getElementById('lcm');
lcmButton?.addEventListener('click', () => {
    const values = prompt("Enter comma-separated values for lcm:", "12,18").split(',').map(Number);
    display.value = math.lcm(values).toString();
});
//rest of code