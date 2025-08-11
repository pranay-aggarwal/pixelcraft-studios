document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById('menu-btn');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.querySelector('#side-menu .close-btn');
  const menuLinks = document.querySelectorAll('#side-menu ul li');

  gsap.set(sideMenu, { x: 300 });

  menuBtn.addEventListener('click', () => {
    gsap.to(sideMenu, { x: 0, duration: 0.6, ease: "power3.out" });
    gsap.from(menuLinks, { opacity: 0, x: 50, duration: 0.6, stagger: 0.1, delay: 0.2, ease: "power3.out" });
  });

  closeBtn.addEventListener('click', () => {
    gsap.to(sideMenu, { x: 300, duration: 0.5, ease: "power3.inOut" });
  });
});
