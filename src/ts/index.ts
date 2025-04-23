// ... (Existing code)
const changeSignButton = document.getElementById('changeSign');
changeSignButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        display.value = (Number(currentValue) * -1).toString();
    }
});
const flipButton = document.getElementById('flip');
flipButton?.addEventListener('click', () => {
    const num = Number(display.value);
    if (isNaN(num)) {
        display.value = "Invalid input";
        return;
    }
    display.value = (1 / num).toString();
});
const isPrimeButton = document.getElementById('isprime');
isPrimeButton?.addEventListener('click', () => {
    const num = Number(prompt("Enter a number to check if it's prime", "7"));
    if (isNaN(num) || !Number.isInteger(num) || num < 2) {
        display.value = "Invalid input";
        return;
    }
    function isPrime(num) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0)
                return false;
        return num > 1;
    }
    display.value = isPrime(num).toString();
});
//rest of code