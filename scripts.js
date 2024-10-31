document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const cardTitles = document.querySelectorAll(".card-title");
  const contactIcons = document.querySelectorAll(".contact-icon");
  const scrollDown = document.querySelector(".scroll-down");
  const projectsSection = document.querySelector("main");
  const heroImage = document.querySelector(".hero-image");

  const observeElement = (element) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(element);
  };

  // Apply observer to project cards and titles
  cards.forEach((card) => observeElement(card));
  cardTitles.forEach((title) => observeElement(title));

  // Apply observer to contact icons
  contactIcons.forEach((icon) => observeElement(icon));

  // Animate hero image on load
  heroImage.style.opacity = "1";
  heroImage.style.transform = "translateX(0)";

  // Hide scroll-down indicator when projects section is in view
  const hideScrollDown = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        scrollDown.style.display = entry.isIntersecting ? "none" : "block";
      });
    },
    {
      threshold: 0.1,
    }
  );

  hideScrollDown.observe(projectsSection);
});
