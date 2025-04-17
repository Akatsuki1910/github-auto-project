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

    const cubeButton = document.getElementById('cuberoot');
    if (cubeButton) {
        cubeButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const cubeRootValue = Math.cbrt(currentValue);
            display.value = cubeRootValue.toString();
            console.log(`Cube root calculated: ${cubeRootValue}`);
        });
    }
    const reciprocalButton = document.getElementById('reciprocal');
    if (reciprocalButton) {
        reciprocalButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const reciprocalValue = 1 / currentValue;
            display.value = reciprocalValue.toString();
            console.log(`Reciprocal calculated: ${reciprocalValue}`);
        });
    }
    const signChangeButton = document.getElementById('sign-change');
    if (signChangeButton) {
        signChangeButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            display.value = (-currentValue).toString();
        });
    }
});