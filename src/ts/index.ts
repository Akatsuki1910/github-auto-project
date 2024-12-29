// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // ... (Existing Code)
    // ... existing code
    const equalButton = document.getElementById("=") as HTMLButtonElement;
    let lastAnswer: number | null = null;
     const lastAnswerButton = document.getElementById("last-answer") as HTMLButtonElement;

    equalButton.addEventListener("click", () => {
            try {
                const result = eval(display.value);
                display.value = result.toString();
                lastAnswer = result;
                addToHistory(display.value);
            }
            catch (error) {
                display.value = "Error";
                addToHistory("Error");

            }
    });

     lastAnswerButton.addEventListener("click", () => {
      if (lastAnswer !== null) {
          display.value = lastAnswer.toString();
      } else {
          display.value = "No previous answer";
      }
    });
    const decimalButton = document.getElementById("decimal") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
        decimalButton.addEventListener('click', () => {
        if (!display.value.includes('.')) {
            display.value += '.';
        }
    });
const openNewWindowButton = document.getElementById("open-new-window") as HTMLButtonElement;
openNewWindowButton.addEventListener("click", () => {
    window.open("https://www.example.com", "_blank");
});

    const currentDateButton = document.getElementById("current-date") as HTMLButtonElement;
    currentDateButton.addEventListener("click", () => {
        const currentDate = new Date();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        display.value = currentDate.toLocaleDateString(undefined, options);
    });

  const deleteLastDigitButton = document.getElementById("delete-last-digit") as HTMLButtonElement;
        deleteLastDigitButton.addEventListener("click", () => {
                display.value = display.value.slice(0, -1);
        })
    const signChangeButton = document.getElementById("sign-change") as HTMLButtonElement;
    signChangeButton.addEventListener("click", () => {
        if (display.value) {
            if (display.value.startsWith("-")) {
                display.value = display.value.slice(1);
            }
            else {
                display.value = "-" + display.value;
            }
        }
    });
        const historyDiv = document.getElementById("history") as HTMLDivElement;
        const toggleHistoryButton = document.getElementById("toggleHistory") as HTMLButtonElement;

        function addToHistory(entry: string) {
                const p = document.createElement("p");
                p.textContent = entry;
                historyDiv.appendChild(p);
        }

        toggleHistoryButton.addEventListener("click", () => {
                if (historyDiv.style.display === "none") {
                    historyDiv.style.display = "block";
                }
                else {
                    historyDiv.style.display = "none";
                }
        });
        const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;
        clearHistoryButton.addEventListener("click", () => {
                historyDiv.innerHTML = ""; //履歴削除
        });
    const calculateTaxButton = document.getElementById("calculate-tax") as HTMLButtonElement;
    calculateTaxButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const tax = currentValue * 0.08;
            display.value = (currentValue + tax).toString();
            addToHistory(display.value);   
        } catch (error) {
            display.value = "Error";
            addToHistory("Error");
        }
    });

        const log2Button = document.getElementById("log2") as HTMLButtonElement;
        log2Button.addEventListener("click", () => {
          try {
              const num = parseFloat(display.value);
              display.value = Math.log2(num).toString();
              addToHistory(display.value);
            } catch (error) {
                display.value = "Error";
                addToHistory("Error");
            }
        });
        //10のx乗ボタン
        const powerOfTenButton = document.getElementById("power-of-ten") as HTMLButtonElement;
        powerOfTenButton.addEventListener("click", () => {
            try{
                const num = parseFloat(display.value);
                display.value = Math.pow(10, num).toString();
                addToHistory(display.value);
            } catch (error) {
                display.value = "Error";
                addToHistory("Error");
            }
        });
    // expm1ボタンの追加
    const expm1Button = document.getElementById("expm1") as HTMLButtonElement;
    expm1Button.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            display.value = Math.expm1(num).toString();
            addToHistory(display.value);
        }
        catch (error) {
            display.value = "Error";
            addToHistory("Error");
        }
    });
        // 立方根ボタンの追加
    const cbrtButton = document.getElementById("cbrt") as HTMLButtonElement;
    cbrtButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            display.value = Math.cbrt(num).toString();
            addToHistory(display.value);
        } catch (error) {
            display.value = "Error";
            addToHistory("Error");
        }
    });
    // 切り捨てボタンの追加
    const roundDownButton = document.getElementById("round-down") as HTMLButtonElement;
    roundDownButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            display.value = Math.floor(num).toString();
            addToHistory(display.value);
        } catch (error) {
            display.value = "Error";
            addToHistory("Error");
        }
    });

        const randomIntButton = document.getElementById("random-int") as HTMLButtonElement;
        randomIntButton.addEventListener("click", () => {
          try {
            const min = parseFloat(prompt("Enter minimum value:", "0") || "0");
            const max = parseFloat(prompt("Enter maximum value:", "100") || "100");
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;   //乱数生成
            display.value = randomNumber.toString();
            addToHistory(display.value); //履歴に追加
          } catch (error) {
            display.value = "Invalid input";
            addToHistory("Invalid input");
          }
        });
    // 逆数ボタンの追加
    const reciprocalButton = document.getElementById("reciprocal") as HTMLButtonElement;
    reciprocalButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            if (num === 0) {
                display.value = "Error: Division by zero";
                addToHistory("Error: Division by zero");
            } else {
                display.value = (1 / num).toString();
                addToHistory(display.value);
            }
        }
        catch (error) {
            display.value = "Error";
            addToHistory("Error");
        }
    });

      // 指数関数ボタンの追加
    const exponentiationButton = document.getElementById("exponentiation") as HTMLButtonElement;
    exponentiationButton.addEventListener("click", () => {
      try {
        const num = parseFloat(display.value);
        display.value = Math.exp(num).toString();
        addToHistory(display.value);
      }
      catch (error) {
        display.value = "Error";
        addToHistory("Error");
      }
    });

 // copyボタンの追加
 const copyButton = document.getElementById("copy") as HTMLButtonElement;
 copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(display.value).then(() => {
        alert("Copied to clipboard: " + display.value);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert("Failed to copy");
    });
 });
});
