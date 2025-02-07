// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Scroll to Top Button
let scrollTopBtn = document.getElementById('scroll-top-btn');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact Form Submission Alert
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent Successfully!");
});
