const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      //style 값으로 수정가능
      //badgeEl.style.display = "none";
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });

      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //badgeEl.style.display = "block";
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });

      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
//_.throttle(func(),millsec)
//gsap.to(요소,지속시간,옵션)

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
// forEach에서 index는 zero based number
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    //delay는 gsap에서 제공하는 기능
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  //  default -> direction: "horizontal",
  slidesPerView: 3, // 한번에 보여주는 슬라이드 갯수
  spaceBetween: 10, // 슬라이드 사이 여뱍
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    //default 3000ms
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", // page number element select
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // -1 무한
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 설정
    triggerHook: 0.8, // 뷰포트의 위에서 부터의 감시되는 위치 0 - 1
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

