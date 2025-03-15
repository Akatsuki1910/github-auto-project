// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];
// ... (Other existing code and functions)
// ... existing filters
//Absolute Value
// ... (Existing functions)
//Floor function
// ... existing code
// ... (Existing functions)
// ... existing buttons
// ... existing toggle functions
// ... existing functions for month, year, day, second, millisecond, minute, hour, etc.
// ... existing functions
const currentScreenResolutionButton = document.getElementById('current-screen-resolution') as HTMLButtonElement;
currentScreenResolutionButton.addEventListener('click', () => {
    display.value = `${window.screen.width}x${window.screen.height}`;
});
const currentLanguageButton = document.getElementById('current-language') as HTMLButtonElement;
currentLanguageButton.addEventListener('click', () => {
    display.value = navigator.language;
});
const currentIPAddressButton = document.getElementById('current-ip-address') as HTMLButtonElement;
currentIPAddressButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        display.value = data.ip;
    } catch (error) {
        display.value = 'Error fetching IP address';
        console.error('Error fetching IP address:', error);
    }
});
const currentOnlineStatusButton = document.getElementById('current-online-status') as HTMLButtonElement;
currentOnlineStatusButton.addEventListener('click', () => {
  display.value = navigator.onLine ? 'Online' : 'Offline';
});
const currentGeolocationButton = document.getElementById('current-geolocation') as HTMLButtonElement;
currentGeolocationButton.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            display.value = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
        }, (error) => {
            display.value = `Error getting geolocation: ${error.message}`;
        });
    } else {
        display.value = 'Geolocation is not supported by this browser.';
    }
});
// ... (Rest of the existing code)