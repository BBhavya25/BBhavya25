
document.addEventListener('DOMContentLoaded', function() {
    // Toggle the more-info sections
    const toggleButtons = document.querySelectorAll('button[data-toggle]');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreInfoId = this.getAttribute('data-toggle');
            const moreInfoSection = document.getElementById(moreInfoId);
            moreInfoSection.classList.toggle('active');
        });
    });
    
    // Function to handle section navigation
    function navigateToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Attach the navigateToSection function to window so it can be called inline
    window.navigateToSection = navigateToSection;
});

function toggleDropdown() {
    var dropdown = document.getElementById('dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function toggleMainDropdown() {
    var dropdown = document.getElementById('main-dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}
