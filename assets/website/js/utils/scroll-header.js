const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scrolling class to the header tag
  if (window.pageYOffset >= 100) header.classList.add("scrolling");
  else header.classList.remove("scrolling");
};

window.addEventListener("scroll", scrollHeader);
