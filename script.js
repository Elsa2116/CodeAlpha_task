document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add active class to navigation based on scroll position
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                navLinks.forEach(link => link.classList.remove("active"));
                activeLink.classList.add("active");
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
});
