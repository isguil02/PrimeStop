document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
    <footer class="site-footer">
        <div class="footer-content">
            <img src="logo.avif" alt="Prime Stop" class="footer-logo">
            <div class="footer-contact">
                <p>(402) 529-3562</p>
                <p>PO Box 739 &nbsp;|&nbsp; Wisner, NE 68791</p>
            </div>
            <div class="footer-links">
                QUICK LINKS &ndash; <a href="about.html">About Us</a> &nbsp; <a href="careers.html">Careers</a>
            </div>
            <div class="footer-social">
                <a href="https://www.facebook.com/PrimeStop/" target="_blank" class="social-icon-footer">f</a>
            </div>
            <p class="footer-copyright">© 2026 by Prime Stop</p>
            </div>
    </footer>
    `;

    // Remove existing footers to avoid duplicates
    const existingFooters = document.querySelectorAll("footer");
    existingFooters.forEach(f => f.remove());

    // Append the new perfect footer to the end of the body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
