window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let bracketOpen = false;
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
        bracketOpen = false;
      } else if (value === "←" || value === "&larr;") {
        display.value = display.value.slice(0, -1);
        if (display.value.endsWith("(")) {
          bracketOpen = false;
        }
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
      } else if (value === "x²") {
        try {
          const num = parseFloat(display.value);
          display.value = String(Math.pow(num, 2));
        } catch (e) {
          display.value = "Error";
        }
      } else if (value === "( )") {
        if (!bracketOpen) {
          display.value += "(";
          bracketOpen = true;
        } else {
          display.value += ")";
          bracketOpen = false;
        }
      } else {
        display.value += value;
      }
    });
  });
});
