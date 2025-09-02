AOS.init({
	once: false,
    duration: 800
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.addreview__form');
    if (!form) return;
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;
        form.querySelectorAll('.addreview__form-input, .addreview__form-textarea').forEach(input => {
            if (input.value.trim() === '') {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });

        if (isValid) {
            console.log('Форма отправлена!');
            form.submit();
        }
    });
    form.querySelectorAll('.addreview__form-input, .addreview__form-textarea').forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('error');
        });
    });

    const reviewAddBtn = document.querySelector('.review__add');
    const addReviewBlock = document.querySelector('.addreview');
    const closeBtn = document.querySelector('.addreview__close');
    const addReviewInner = document.querySelector('.addreview__inner');
    reviewAddBtn.addEventListener('click', () => {
        addReviewBlock.classList.add('show');
    });
    closeBtn.addEventListener('click', () => {
        addReviewBlock.classList.remove('show');
    });
    document.addEventListener('click', (e) => {
        if (!addReviewInner.contains(e.target) && !reviewAddBtn.contains(e.target)) {
            addReviewBlock.classList.remove('show');
        }
    });
});


const reviewSlider = document.querySelector('.review__slider-block');
const reviewSlide = reviewSlider.querySelectorAll('.review__slide');
const reviewSliderNextBtn = document.querySelector('.review__next');
const reviewSliderPrevBtn = document.querySelector('.review__prev');
let activeIndex = 0;
const updateSlides = () => {
  reviewSlide.forEach((item, i) => {
    item.dataset.active = (i === activeIndex).toString();
    item.style.flexGrow = i === activeIndex ? '3' : '1';
    item.style.transition = 'flex-grow 0.5s ease';
  });
  reviewSlider.style.display = 'flex';
};
const setActiveSlide = (event) => {
  const closest = event.target.closest('.review__slide');
  if (!closest) return;
  activeIndex = [...reviewSlide].indexOf(closest);
  updateSlides();
};
reviewSliderNextBtn.addEventListener('click', () => {
  if (activeIndex < reviewSlide.length - 1) {
    activeIndex++;
    updateSlides();
  }
});
reviewSliderPrevBtn.addEventListener('click', () => {
  if (activeIndex > 0) {
    activeIndex--;
    updateSlides();
  }
});
reviewSlide.forEach((item) => {
  item.addEventListener('click', setActiveSlide);
  item.addEventListener('pointerenter', setActiveSlide);
});
updateSlides();


const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});
gsap.registerPlugin(ScrollTrigger);
const mainTl = gsap.timeline();
mainTl.to(".hero__title span span", { 
        opacity: 1,
        y: 0,
        rotateX: 0,
        transformPerspective: 1000,
        stagger: 0.075,
        duration: 0.6
});
gsap.utils.toArray(".hero__icons img").forEach((icon, i) => {
  gsap.fromTo(icon,
    {
      opacity: 0,
      scale: 0,
      yPercent: gsap.utils.random(10, 100)
    },
    {
      opacity: 1,
      scale: 1,
      yPercent: 0,
      duration: 1,
      delay: i * 0.15,
      ease: "back.out(1.7)",
      onComplete: () => {
        gsap.to(icon, {
          yPercent: gsap.utils.random(-10, 30),
          duration: gsap.utils.random(2, 4),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    }
  );
});
const heroBlock = document.querySelector(".hero__block");
gsap.from([
    heroBlock.querySelector(".hero__users"),
    heroBlock.querySelector(".hero__buttons")
], {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: heroBlock,
        start: "top 80%",
        toggleActions: "play none none none"
    }
});
const heroAction = document.querySelector(".hero__action");
gsap.fromTo(heroAction, 
    { y: 50, opacity: 0 },
    { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: heroAction,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse", 
        }
    }
);
