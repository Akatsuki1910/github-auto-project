// ... (Existing code)

// Add feature: Toggle Basic/Advanced Calculator View
document.getElementById('toggle-basic-advanced')?.addEventListener('click', () => {
    const scientificSection = document.querySelector('.scientific-section');
    const additionalFunctions = document.querySelector('.additional-functions');
    if (scientificSection && additionalFunctions) {
        const isHidden = scientificSection.style.display === 'none';
        scientificSection.style.display = isHidden ? 'grid' : 'none';
        additionalFunctions.style.display = isHidden ? 'grid' : 'none';    }
});

// ... (Rest of the code)