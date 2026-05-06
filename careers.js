document.getElementById('careersForm').addEventListener('submit', function (e) {
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

    const address = document.getElementById('appAddress').value.trim();
    const startDate = document.getElementById('appStartDate').value.trim();
    const location = document.getElementById('appLocation').value.trim();
    const reason = document.getElementById('appReason').value.trim();

    // Prepare data for Google Apps Script
    const formData = new URLSearchParams();
    formData.append('subject', `Job Application: ${position} - ${firstName} ${lastName}`);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('position', position);
    formData.append('startDate', startDate);
    formData.append('location', location);
    formData.append('reason', reason);

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Sending Application...";
    submitBtn.disabled = true;

    fetch("https://script.google.com/macros/s/AKfycbyN9HBLtENQp70c0xxxtgALAhJZ0v5Gu0rfxHsR7jeqaAEhPkPsxAlT0VDfQnTsRwT43A/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors"
    }).then(() => {
        alert("Your application has been submitted successfully! We will be in touch.");
        this.reset();
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    }).catch(error => {
        alert("There was an error sending your application. Please try again later.");
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    });
});