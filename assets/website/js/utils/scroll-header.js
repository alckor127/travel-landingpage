const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  console.log("scroll header", window.pageYOffset);

  if (window.pageYOffset >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);
