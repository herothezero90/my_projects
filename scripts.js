document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const cardTitles = document.querySelectorAll(".card-title");

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

  cards.forEach((card) => observeElement(card));
  cardTitles.forEach((title) => observeElement(title));
});