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

    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    fetch("https://script.google.com/macros/s/AKfycbyN9HBLtENQp70c0xxxtgALAhJZ0v5Gu0rfxHsR7jeqaAEhPkPsxAlT0VDfQnTsRwT43A/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors"
    }).then(() => {
        alert("Your message has been sent successfully!");
        this.reset();
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    }).catch(error => {
        alert("There was an error sending your message. Please try again later.");
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    });
});