// ... (Existing code)
const calculateFibonacciButton = document.getElementById('calculate-fibonacci') as HTMLButtonElement;
calculateFibonacciButton.addEventListener('click', () => {
    const n = parseInt(prompt('Enter the number of terms:') || '0');
    if (!isNaN(n) && n >= 0) {
        let a = 0, b = 1, nextTerm;
        let result = '';
        for (let i = 1; i <= n; ++i) {
            result += a + ', ';
            nextTerm = a + b;
            a = b;
            b = nextTerm;
        }
        display.value = result.slice(0, -2);
    }
});
const calculatePrimeButton = document.getElementById('calculate-prime') as HTMLButtonElement;
calculatePrimeButton.addEventListener('click', () => {
    const num = parseInt(prompt('Enter a number:') || '0');
    if (!isNaN(num) && num > 1) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); ++i) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        display.value = isPrime ? 'Prime' : 'Not Prime';
    } else {
        display.value = 'Invalid input';
    }
});
const calculateCombinationButton = document.getElementById('calculate-nCr') as HTMLButtonElement;
calculateCombinationButton.addEventListener('click', () => {
    const n = parseInt(prompt('Enter n:') || '0');
    const r = parseInt(prompt('Enter r:') || '0');
    if (!isNaN(n) && !isNaN(r) && n >= r && r >=0) {
      const fact = (num) => {
          let res = 1;
          for (let i = 2; i <= num; i++)
              res = res * i;
          return res;
      }
      display.value = (fact(n) / (fact(r) * fact(n - r))).toString();
    } else {
      display.value = "Invalid input";
    }
});
// ... (Rest of existing code)