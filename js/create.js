document.addEventListener("scroll", function () {
  document.querySelectorAll("section").forEach((section) => {
    if (section.getBoundingClientRect().top < window.innerHeight * 0.8) {
      section.classList.add("visible");
    }
  });
});
