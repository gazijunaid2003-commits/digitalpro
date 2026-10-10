console.log("JavaScript is working!");

const form = document.querySelector("form");
const formMessage = document.getElementById("formMessage");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        formMessage.textContent = "Message Sent Successfully!";
        form.reset();
    });
}

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
        }
    });
}
alert("JavaScript is working!");