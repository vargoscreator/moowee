document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header__burger");
    const header = document.querySelector(".header");
    const menuItems = document.querySelectorAll(".header__menu li a");
    function resetMenu() {
        gsap.set(menuItems, { y: 0, opacity: 1 });
        header.classList.remove("header-menu-show");
        burger.classList.remove("active");
    }
    function toggleMenu() {
        if (window.innerWidth > 1024) return;
        const isOpen = header.classList.contains("header-menu-show");
        if (!isOpen) {
            header.classList.add("header-menu-show");
            burger.classList.add("active");
            gsap.to(menuItems, {
                y: 0,
                opacity: 1,
                duration: 0.2,
                delay: 0.2
            });
        } else {
            gsap.to(menuItems, {
                y: 100,
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                    header.classList.remove("header-menu-show");
                    burger.classList.remove("active");
                }
            });
        }
    }
    burger.addEventListener("click", toggleMenu);
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
            resetMenu();
        } else {
            gsap.set(menuItems, { y: 100, opacity: 0 });
        }
    });
    if (window.innerWidth > 1024) {
        resetMenu();
    } else {
        gsap.set(menuItems, { y: 100, opacity: 0 });
    }
});
if(document.querySelector('.cookiesPopup')){
    document.querySelector('.cookiesPopup__close').addEventListener('click', () => {
        document.querySelector('.cookiesPopup').classList.remove('show');
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const userBlock = document.querySelector(".header__user");
  const menu = document.querySelector(".header__menu");
  const headerInner = document.querySelector(".header__inner");
  function moveUserBlock() {
    if (window.innerWidth < 769) {
      menu.appendChild(userBlock);
    } else {
      headerInner.appendChild(userBlock);
    }
  }
  moveUserBlock();
  window.addEventListener("resize", moveUserBlock);
});
