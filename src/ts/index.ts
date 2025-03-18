// ... (Existing code)
const randButton = document.getElementById('rand') as HTMLButtonElement;
randButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
});
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    if (display.value) {
        display.value += display.value;
    }
});
const signChangeButton = document.getElementById('sign-change') as HTMLButtonElement;
signChangeButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (-parseFloat(display.value)).toString();
    }
});