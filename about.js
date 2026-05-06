document.getElementById('aboutContactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic Validation
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate sending email via mailto
    const targetEmail = "scroob9417@gmail.com";
    const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

    window.location.href = mailtoLink;
    alert("Form validated. Redirecting to your email client...");
    this.reset();
});