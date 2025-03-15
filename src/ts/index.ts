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
const currentUserAgentButton = document.getElementById('current-user-agent') as HTMLButtonElement;
currentUserAgentButton.addEventListener('click', () => {
    display.value = navigator.userAgent;
});
const currentNetworkSpeedButton = document.getElementById('current-network-speed') as HTMLButtonElement;
currentNetworkSpeedButton.addEventListener('click', () => {
    display.value = 'Estimating...';
        const image = new Image();
        const startTime = new Date().getTime();
        image.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_%285mb%29.jpg';
        image.onload = () => {
        const endTime = new Date().getTime();
        const downloadTime = (endTime - startTime) / 1000;
        const imageSize = 5245329;
        const speedInMbps = (imageSize / downloadTime / 1000000) * 8;
        display.value = `Network Speed: ${speedInMbps.toFixed(2)} Mbps`;
    }
});
const currentMemoryAvailableButton = document.getElementById('current-memory-available') as HTMLButtonElement;
currentMemoryAvailableButton.addEventListener('click', () => {
    if ('deviceMemory' in navigator) {
        display.value = `Available Memory: ${(navigator.deviceMemory as any).toFixed(2)} GB`;
    } else {
        display.value = 'Device memory information not available.';
    }
});
const currentBatteryLevelButton = document.getElementById('current-battery-level') as HTMLButtonElement;
currentBatteryLevelButton.addEventListener('click', () => {
if (navigator.getBattery) {
    navigator.getBattery().then(battery => {
        display.value = `Battery Level: ${battery.level * 100}%`;
    });
} else {
    display.value = 'Battery status not supported.';
}
});
// ... (Rest of the existing code)
