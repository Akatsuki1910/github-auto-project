// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    const mPlusButton = document.getElementById('m-plus');
    // ... (Existing M+, M-, MS, MR, MC code)

    const percentageButton = document.getElementById('percentage');
    if (percentageButton) {
        percentageButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const percentageValue = currentValue / 100;
            display.value = percentageValue.toString();
            console.log(`Percentage calculated: ${percentageValue}`);
        });
    }
});