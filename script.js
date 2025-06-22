// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Slider logic (simple, demo)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
document.querySelector('.slider-btn.next').onclick = () => moveSlide(1);
document.querySelector('.slider-btn.prev').onclick = () => moveSlide(-1);

function moveSlide(dir) {
  slides[currentSlide].classList.remove('slide-active');
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  slides[currentSlide].classList.add('slide-active');
  document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// News banner marquee restarts
const newsMarquee = document.getElementById('newsMarquee');
newsMarquee.addEventListener('animationiteration', () => {
  // Optionally, update news content dynamically here
});

// Newsletter & Cookie popups
function showPopup(id) {
  document.getElementById(id).style.display = 'block';
}
function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}
document.querySelectorAll('.close-popup').forEach(btn => {
  btn.onclick = (e) => closePopup(btn.parentNode.id);
});
document.querySelector('.accept-cookies').onclick = () => closePopup('cookies-popup');

// Demo: show newsletter on load, cookies after 2s
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => showPopup('cookies-popup'), 2000);
  setTimeout(() => showPopup('newsletter-popup'), 4000);
});

// Canvas noise effect
const canvas = document.getElementById('noise-canvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.getElementById('hero').offsetHeight;
}
function noise() {
  const w = canvas.width, h = canvas.height;
  const idata = ctx.createImageData(w, h);
  for (let i = 0; i < idata.data.length; i += 4) {
    const shade = Math.random() * 255;
    idata.data[i] = idata.data[i+1] = idata.data[i+2] = shade;
    idata.data[i+3] = 25 + Math.random() * 20;
  }
  ctx.putImageData(idata, 0, 0);
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
setInterval(noise, 70);

// Global site color effect
let colorStep = 0;
function colorizeBg() {
  colorStep += 0.005;
  const phase = Math.sin(colorStep);
  const colors = [
    {from: '#181818', to: '#ff5f13'},
    {from: '#222', to: '#fb3640'},
    {from: '#232133', to: '#a259ff'},
    {from: '#181818', to: '#f06'},
  ];
  const idx = Math.floor((colorStep/2)%colors.length);
  document.body.style.background = `linear-gradient(135deg, ${colors[idx].from}, ${colors[idx].to} ${Math.abs(phase)*100}%)`;
  requestAnimationFrame(colorizeBg);
}
colorizeBg();

// Artistic glitch (hero h1)
function glitchText() {
  document.querySelectorAll('.artistic').forEach(el => {
    if (Math.random() < 0.03) {
      el.style.transform = `translate(${Math.random()*6-3}px,${Math.random()*4-2}px) skew(${Math.random()*8-4}deg)`;
    } else {
      el.style.transform = "";
    }
  });
  setTimeout(glitchText, 120);
}
glitchText();
