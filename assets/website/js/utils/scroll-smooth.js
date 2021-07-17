const anchors = document.querySelectorAll("a[href*='#']");

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const hash = e.currentTarget.hash;
    const offsetTop = document.querySelector(hash).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});
