window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;
      if (value === "=") {
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = "Error";
        }
      } else if (value === "C") {
        display.value = "";
      } else if (value === "←" || value === "&larr;") {
        display.value = display.value.slice(0, -1);
      } else if (value === "+/-") {
        display.value = String(parseFloat(display.value) * -1);
      } else if (value === "√") {
        try {
          const num = parseFloat(display.value);
          if (num < 0) {
            display.value = "Error";
          } else {
            display.value = String(Math.sqrt(num));
          }
        } catch (e) {
          display.value = "Error";
        }
      } else if (value === "%") {
        try {
          display.value = String(parseFloat(display.value) / 100);
        } catch (e) {
          display.value = "Error";
        }
      } else if (value === "π") {
        display.value += Math.PI;
      } else if (value === "!") {
        try {
          const num = parseInt(display.value);
          if (isNaN(num) || num < 0) {
            display.value = "Error";
          } else {
            let result = 1;
            for (let i = 1; i <= num; i++) {
              result *= i;
            }
            display.value = String(result);
          }
        } catch (error) {
          display.value = "Error";
        }

      } else {
        display.value += value;
      }
    });
  });
});
