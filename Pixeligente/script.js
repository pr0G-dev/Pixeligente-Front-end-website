document.body.style.overflowX = 'hidden';

let homeHeader = document.getElementById('home-header')
let aboutHeader = document.getElementById('about-header')
let blogHeader = document.getElementById('blog-header')
let contactHeader = document.getElementById('contact-header')
let asset2 = document.getElementById('asset2')
let asset3 = document.getElementById('asset3')
let asset4 = document.getElementById('asset4')
let heroText = document.getElementById('tagline');
let asset5 = document.getElementById('asset5')
let asset6 = document.getElementById('asset6')
let heroBtn = document.getElementById('explore-btn');
let asset7 = document.getElementById('asset7')
let asset8 = document.getElementById('asset8')


window.addEventListener('scroll', () => {
  if (window.scrollY >= window.innerHeight * 1.45) {
    homeHeader.classList.add('filled');
  } else {
    homeHeader.classList.remove('filled');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= window.innerHeight * 0.2) {
    aboutHeader.classList.add('filled');
  } else {
    aboutHeader.classList.remove('filled');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= window.innerHeight * 0.3) {
    blogHeader.classList.add('filled');
  } else {
    blogHeader.classList.remove('filled');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= window.innerHeight * 0.2) {
    contactHeader.classList.add('filled');
  } else {
    contactHeader.classList.remove('filled');
  }
});

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  let stopPositionVh = 150;
  let stopPosition = stopPositionVh * window.innerHeight / 100;
  if (value < stopPosition) {
    asset2.style.left = value * 0.25 + 'px';
    asset3.style.left = value * -0.5 + 'px';
    asset4.style.left = value * 0.6 + 'px';
    heroText.style.marginTop = value * 1.1 + 'px';
    asset5.style.marginTop = value * 0.2 + 'px';
    asset6.style.marginTop = value * 0.4 + 'px';
    asset6.style.left = value * -0.2 + 'px';
    heroBtn.style.marginTop = value * 1.3 + 'px';
    asset7.style.marginTop = value * 0.2 + 'px';
    asset8.style.marginTop = value * 0.15 + 'px';
  } else {
    asset2.style.left = (stopPosition * 0.25) + 'px';
    asset3.style.left = (stopPosition * -0.5) + 'px';
    asset4.style.left = (stopPosition * 0.6) + 'px';
    heroText.style.marginTop = (stopPosition * 1.1) + 'px';
    asset5.style.marginTop = (stopPosition * 0.2) + 'px';
    asset6.style.marginTop = (stopPosition * 0.4) + 'px';
    asset6.style.left = (stopPosition * -0.2) + 'px';
    heroBtn.style.marginTop = (stopPosition * 1.3) + 'px';
    asset7.style.marginTop = (stopPosition * 0.2) + 'px';
    asset8.style.marginTop = (stopPosition * 0.15) + 'px';
  }
});