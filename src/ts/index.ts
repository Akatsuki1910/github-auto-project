// ... (Existing code)
//2^x
document.getElementById('two-power')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            const num = parseFloat(display.value);
            display.value = Math.pow(2, num).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});
//Cube Root
document.getElementById('cuberoot')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            const num = parseFloat(display.value);
            display.value = Math.cbrt(num).toString();
        }
        catch (error) {
            display.value = "Error";
        }
    }
});
//Random Number
document.getElementById('random')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = Math.random().toString();
    }
});