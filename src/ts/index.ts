// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue = null;
    let lastAnswer = null;
    const history = [];
    const historyDiv = document.getElementById("history");
    const display = document.getElementById("display");
    // ... existing code ...
    const toggleHistoryButton = document.getElementById("toggle-history");
    toggleHistoryButton.addEventListener("click", () => {
        if (historyDiv.style.display === "none" || historyDiv.style.display === "") {
            historyDiv.style.display = "block";
        }
        else {
            historyDiv.style.display = "none";
        }
    });

    const updateHistory = (value) => {
        history.push(value);
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    };

    // ... existing code ...
    // Memory buttons
    const memoryStoreButton = document.getElementById("memory-store");
    const memoryRecallButton = document.getElementById("memory-recall");
    const memoryClearButton = document.getElementById("memory-clear");

    memoryStoreButton.addEventListener("click", () => {
        memoryValue = parseFloat(display.value);
    });

    memoryRecallButton.addEventListener("click", () => {
        if (memoryValue !== null) {
            display.value = memoryValue.toString();
        }
    });

    memoryClearButton.addEventListener("click", () => {
        memoryValue = null;
    });
    // ... existing code ...
    const plusMinusButton = document.getElementById("plus-minus");
    plusMinusButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            const result = -num;
            display.value = result.toString();
            lastAnswer = result;
        }
        catch (error) {
            display.value = "Error";
        }
    });
        //sin button
    const sinButton = document.getElementById("sin");
    sinButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            const result = Math.sin(num);
            display.value = result.toString();
            lastAnswer = result; // Update last answer
            updateHistory(`sin(${num}) = ${result}`); // Update history
        } catch (error) {
            display.value = "Error";
        }
    });
//cos button
    const cosButton = document.getElementById("cos");
    cosButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            const result = Math.cos(num);
            display.value = result.toString();
            lastAnswer = result; // Update last answer
            updateHistory(`cos(${num}) = ${result}`); // Update history
        }
        catch (error) {
            display.value = "Error";
        }
    });
    // tan button
    const tanButton = document.getElementById("tan");
    tanButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            const result = Math.tan(num);
            display.value = result.toString();
            lastAnswer = result;
            updateHistory(`tan(${num}) = ${result}`);
        }
        catch (error) {
            display.value = "Error";
        }
    });
// log button
const logButton = document.getElementById("log");
logButton.addEventListener("click", () => {
    try {
        const num = parseFloat(display.value);
        const result = Math.log10(num);
        display.value = result.toString();
        lastAnswer = result;
        updateHistory(`log(${num}) = ${result}`);
    }
    catch (error) {
        display.value = "Error";
    }
});
// exp button
const expButton = document.getElementById("exp");
expButton.addEventListener("click", () => {
    try {
        const num = parseFloat(display.value);
        const result = Math.exp(num);
        display.value = result.toString();
        lastAnswer = result;
        updateHistory(`exp(${num}) = ${result}`);
    } catch (error) {
        display.value = "Error";
    }
});
// power button
const powerButton = document.getElementById("power");
powerButton.addEventListener("click", () => {
    try {
        const num = parseFloat(display.value);
        display.value = `${num}^`;
        const calculateButton = document.getElementById("calculate");
        calculateButton.addEventListener("click", () => {
          const exponent = parseFloat(display.value.split('^')[1]);
          const base = num;
          const result = Math.pow(base, exponent);
          display.value = result.toString();
          lastAnswer = result;
          updateHistory(`${base}^${exponent} = ${result}`);
        }, { once: true });
    } catch (error) {
        display.value = "Error";
    }
});
// Round button
const roundButton = document.getElementById("round");
roundButton.addEventListener("click", () => {
    try {
        const num = parseFloat(display.value);
        const result = Math.round(num);
        display.value = result.toString();
        lastAnswer = result;
        updateHistory(`round(${num}) = ${result}`);
    }
    catch (error) {
        display.value = "Error";
    }
});
    // ... (rest of the code)
});
