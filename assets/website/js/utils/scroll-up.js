const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show class to the a tag with the scroll
  if (window.pageYOffset >= 200) scrollUp.classList.add("show");
  else scrollUp.classList.remove("show");
};

window.addEventListener("scroll", scrollUp);
