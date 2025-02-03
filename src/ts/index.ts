const historyArr: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;
let currentExpression = "";
const currentExpressionDisplay = document.getElementById(
	"currentExpressionDisplay",
) as HTMLDivElement;

const memoryValue = 0; // Initialize memory value

function addToHistory(expression: string, result: string) {
	historyArr.push(`${expression} = ${result}`);
	updateHistoryDisplay();
	lastAnswer = Number.parseFloat(result); // Store the last answer
}

function updateHistoryDisplay() {
	historyDisplay.innerHTML = historyArr
		.map((item) => `<div>${item}</div>`)
		.join("");
}
// ... other existing buttons

window.addEventListener("DOMContentLoaded", () => {
	// ... existing code
	// ... existing code and event listeners
	const messageContainer = document.getElementById(
		"message-container",
	) as HTMLDivElement;

	function showMessage(message: string) {
		const messageElement = document.createElement("div");
		messageElement.textContent = message;
		messageContainer.appendChild(messageElement);

		// Automatically remove the message after 3 seconds
		setTimeout(() => {
			messageElement.remove();
		}, 3000);
	}

	// ... (Existing code for other buttons)
	//Added Feature: get current time in seconds
	const currentTimeSecondsButton = document.getElementById(
		"current-time-seconds",
	) as HTMLButtonElement;

	currentTimeSecondsButton.addEventListener("click", () => {
		const now = new Date();
		const seconds = now.getSeconds();
		showMessage(`Current Time in seconds : ${seconds}`);
		addToHistory("Time in seconds", seconds.toString());
	});

	// ... existing buttons
	// ... other existing buttons
	// ... (Other existing event listeners)

	const toggleKeyboardButton = document.getElementById(
		"toggleKeyboard",
	) as HTMLButtonElement;
	const keyboardContainer = document.getElementById(
		"keyboard-container",
	) as HTMLDivElement;

	// Add exit button functionality
	const exitButton = document.getElementById("exit") as HTMLButtonElement;
	exitButton.addEventListener("click", () => {
		keyboardContainer.style.display = "none";
	});
	toggleKeyboardButton.addEventListener("click", () => {
		if (keyboardContainer.style.display === "none") {
			keyboardContainer.style.display = "block";
		} else {
			keyboardContainer.style.display = "none";
		}
	});

	const randomIntegerButton = document.getElementById(
		"random-integer",
	) as HTMLButtonElement;

	randomIntegerButton.addEventListener("click", () => {
		const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random integer between 1 and 100
		showMessage(`Random Integer: ${randomNumber}`);
		addToHistory("Random Integer", randomNumber.toString());
	});

	const randomNumberButton = document.getElementById(
		"random-number",
	) as HTMLButtonElement;

	randomNumberButton.addEventListener("click", () => {
		const randomNumber = Math.random();
		showMessage(`Random Number (0-1): ${randomNumber}`);
		addToHistory("Random Number (0-1)", randomNumber.toString());
	});

	const currentTimestampButton = document.getElementById(
		"current-timestamp",
	) as HTMLButtonElement;

	currentTimestampButton.addEventListener("click", () => {
		const timestamp = Date.now();
		showMessage(`Current Timestamp: ${timestamp}`);
		addToHistory("Timestamp", timestamp.toString());
	});

	const modButton = document.getElementById("mod") as HTMLButtonElement;
	modButton.addEventListener("click", () => {
		currentExpression += "%";
		currentExpressionDisplay.textContent = currentExpression;
	});

	const geoLocationButton = document.getElementById(
		"geoLocation",
	) as HTMLButtonElement;
	geoLocationButton.addEventListener("click", () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;
				showMessage(`Latitude: ${latitude}, Longitude: ${longitude}`);
				addToHistory("Geolocation", `Lat: ${latitude}, Lon: ${longitude}`);
			});
		} else {
			showMessage("Geolocation is not supported by this browser.");
		}
	});
});
