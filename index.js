let slider = document.querySelector(".recipe-container");
let sliderthumb = document.querySelectorAll(".recipe-thumb");

let maxscrollLeft = slider.scrollWidth - slider.clientWidth;

function autoplay() {
  if (slider.scrollLeft > maxscrollLeft - 1) {
    slider.scrollLeft -= maxscrollLeft;
  } else {
    slider.scrollLeft += 1;
  }
}

let play = setInterval(autoplay, 20);

for (i = 0; i < sliderthumb.length; i++) {
  sliderthumb[i].addEventListener("mouseover", () => {
    clearInterval(play);
  });
  sliderthumb[i].addEventListener("mouseout", () => {
    return (play = setInterval(autoplay, 20));
  });
}

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.logo,.home__info,.home__link,
           .pclass,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .info`,
  {
    origin: "top",
    interval: 100,
  }
);
sr.reveal(`.home__title,center,.sch`, {
  origin: "bottom",
  interval: 100,
});
sr.reveal(
  `.thumbs, 
           button,
           .subscribe__description`,
  {
    origin: "left",
  }
);

sr.reveal(
  `.details, 
           .video__content,
           .subscribe__form`,
  {
    origin: "right",
    interval: 100,
  }
);

function openslide() {
  let navmenu = document.querySelector(".nav-menu");
  navmenu.style.left = "-7%";
}

function closeslide() {
  let navmenu = document.querySelector(".nav-menu");
  navmenu.style.left = "-100%";
}

let navmenu = document.querySelectorAll(".home__link");

for (i = 0; i < navmenu.length; i++) {
  navmenu[i].addEventListener("click", closeslide);
}
