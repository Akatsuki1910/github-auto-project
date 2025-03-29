// ... (Existing code)
const randomIntButton = document.getElementById('random-int') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
randomIntButton.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 101);
    display.value = randomNumber.toString();
});
//...(rest of the code)