import ScrollReveal from "scrollreveal";

const scrollAnimate = ScrollReveal({
  distance: "60px",
  duration: 2800,
  reset: true,
});

scrollAnimate.reveal(
  `.home__data,
   .home__social-link,
   .home__info,
   .discover__container,
   .experience__data,
   .experience__overlay,
   .place__card,
   .sponsor__content,
   .footer__data,
   .footer__rights`,
  {
    origin: "top",
    interval: 100,
  }
);

scrollAnimate.reveal(
  `.about__data,
   .video__description,
   .subscribe__description`,
  {
    origin: "left",
  }
);

scrollAnimate.reveal(
  `.about__img-overlay,
   .video__content,
   .subscribe__form`,
  {
    origin: "right",
  }
);

// scrollAnimate.reveal(".footer-copy", {
//   origin: "bottom",
// });
