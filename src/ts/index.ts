// ... (Existing code)
const powerOfTwoButton = document.getElementById('powerOfTwo');
powerOfTwoButton?.addEventListener('click', () => {
    const value = Number(prompt("Enter a value for 2^x", "2"));
    display.value = math.pow(2, value).toString();
});
//rest of code