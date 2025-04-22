
function submitClick(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Form Submitted:\n\nName : ${name}\nEmail : ${email}\nMessage : ${message}\n`);
}
