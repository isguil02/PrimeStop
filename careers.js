document.getElementById('careersForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Fetch form data
    const firstName = document.getElementById('appFirstName').value.trim();
    const lastName = document.getElementById('appLastName').value.trim();
    const email = document.getElementById('appEmail').value.trim();
    const phone = document.getElementById('appPhone').value.trim();
    const position = document.getElementById('appPosition').value;

    // Validation
    if (!firstName || !lastName || !email || !phone || !position) {
        alert("Please ensure all required fields are filled.");
        return;
    }

    // Prepare mailto link
    const targetEmail = "ex@gmail.com";
    const subject = `Job Application: ${position} - ${firstName} ${lastName}`;
    const bodyText = `Applicant: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nPosition Applied For: ${position}`;
    
    const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    
    window.location.href = mailtoLink;
    alert("Application valid. Opening your email client to send to HR...");
    this.reset();
});