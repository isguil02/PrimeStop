document.addEventListener("DOMContentLoaded", function () {
    const navHTML = `
        <div class="nav-container">
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="app.html">App</a>
                <a href="about.html">About</a>
                <a href="careers.html">Careers</a>
            </nav>
            <div class="nav-right">
                <a href="https://www.facebook.com/PrimeStop/" class="social-icon" target="_blank">f</a>
                <a href="About.html" class="btn-call">Call Us</a>
                <div class="phone-numbers">
                    <p>(402) 529-3562 Wisner</p>
                    <p>(402) 371-7044 Norfolk North</p>
                    <p>(402) 375-1449 Wayne</p>
                    <p>(402) 371-7228 Norfolk South</p>
                </div>
            </div>
        </div>
    `;

    document.getElementById("nav-placeholder").innerHTML = navHTML;

    // Highlight the active link
    let currentPath = window.location.pathname.split("/").pop();
    if (currentPath === "") currentPath = "index.html";

    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").toLowerCase() === currentPath.toLowerCase()) {
            link.classList.add("active");
        }
    });
});
