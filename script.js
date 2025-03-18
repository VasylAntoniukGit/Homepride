document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector("nav ul");
  const navLinksLi = document.querySelectorAll("nav ul li");

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
  navLinksLi.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});

var divisor = document.getElementById("divisor"),
  slider = document.getElementById("slider");
function moveDivisor() {
  divisor.style.width = slider.value + "%";
}

document.addEventListener("DOMContentLoaded", function () {
  const benefitsSection = document.getElementById("benefits");
  const benefitsVideo = document.getElementById("benefitsVideo");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!/Mobi|Android/i.test(navigator.userAgent)) {
            benefitsVideo.play();
          }
        } else {
          benefitsVideo.pause();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(benefitsSection);
});

const close_buttons = document.querySelectorAll(".close-button");
const preview_imgs = document.querySelectorAll(".preview-img");
const carousel_container = document.querySelectorAll(".carousel-container");

preview_imgs.forEach((item, index) => {
  item.addEventListener("click", () => {
    carousel_container[index].classList.toggle("overlay");
  });
});

close_buttons.forEach((item, index) => {
  item.addEventListener("click", () => {
    carousel_container[index].classList.remove("overlay");
  });
});
