// ... (Existing code)
const gcdButton = document.getElementById('gcd') as HTMLButtonElement;
gcdButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input";
        return;
    }
    const gcd = (a, b) => (!b ? a : gcd(b, a % b));
    display.value = numbers.reduce(gcd).toString();
});
const lcmButton = document.getElementById('lcm') as HTMLButtonElement;
lcmButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const numbers = display.value.split(',').map(Number);
  if (numbers.some(isNaN)) {
      display.value = "Invalid input";
      return;
  }
  const gcd = (a, b) => (!b ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  display.value = numbers.reduce(lcm).toString();
});
const factButton = document.getElementById('fact') as HTMLButtonElement;
factButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(display.value);
    if (!isNaN(n) && n >= 0 && Number.isInteger(n)) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        display.value = result.toString();
    }
    else {
        display.value = "Invalid input for factorial";
    }
});
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    display.value = Math.sign(num).toString();
});
// ... (Rest of existing code)