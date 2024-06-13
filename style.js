// script.js

// Function to change the text content of the hero section
function changeHeroText() {
    const heroText = document.querySelector('.hero h2');
    heroText.textContent = "Explore the World of Ritesh Bastola";
}

// Function to handle file upload and add a new project to the Projects section
function addProject(event) {
    const fileInput = document.getElementById('file-input');
    fileInput.click();
    
    fileInput.addEventListener('change', (event) => {
        const files = event.target.files;
        const projectsSection = document.querySelector('.content');
        for (let i = 0; i < files.length; i++) {
            const newProject = document.createElement('p');
            newProject.textContent = `New Project: ${files[i].name}`;
            projectsSection.appendChild(newProject);
        }
    });
}

// Function to display contact information
function showContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    contactInfo.style.display = contactInfo.style.display === 'none' ? 'block' : 'none';
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('change-text-btn').addEventListener('click', changeHeroText);
    document.getElementById('add-project-btn').addEventListener('click', addProject);
    document.getElementById('contact-btn').addEventListener('click', showContactInfo);
});
