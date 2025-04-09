// Select theme button and add event listener for theme toggle
const themeButton = document.getElementById('theme-button');
const body = document.body;

// Function to update theme icon
function updateThemeIcon() {
    if (document.body.classList.contains('dark-mode')) {
        themeButton.innerHTML = '<img src="icons/sun.png" alt="Sun Icon" width="24" height="24">'; // Sun icon for dark mode
    } else {
        themeButton.innerHTML = '<img src="icons/moon.png" alt="Moon Icon" width="24" height="24">'; // Moon icon for light mode
    }
}

// Load saved theme from localStorage if available
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }
    updateThemeIcon(); // Set the initial icon based on saved theme

    // Toggle theme on button click
    themeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(); // Update the icon when the theme changes
    });
});

// Tab functionality
function openTab(event, tabName) {
    document.getElementById("work-content").style.display = "none";
    document.getElementById("education-content").style.display = "none";

    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    document.getElementById(tabName + "-content").style.display = "block";
    event.currentTarget.classList.add("active");
}

// Form submission handling
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        try {
            const response = await fetch("send_email.php", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                window.location.href = "thank_you.html"; // Redirect on success
            } else {
                alert("There was an error sending your message. Please try again.");
            }
        } catch (error) {
            alert("Failed to send message. Please try again later.");
        }
    });
});
