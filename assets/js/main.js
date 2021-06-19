/*===== BACK TO TOP =====*/
const backToTop = document.getElementById('btnBackToTop');

backToTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


/*====== TYPEWRITER =====*/
const typewriter = document.getElementById('typewriter');

function isScrolledIntoView(elem, requireFull) {
  let rect = elem.getBoundingClientRect();
  let elemTop = rect.top;
  let elemBottom = rect.bottom;
  let elemHeight = rect.height;
  let isVisible = false;

  if (requireFull) {
    // Only completely visible elements return true:
    isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  }
  else {
    // Partially visible elements return true: (im accepting 66% of element)
    isVisible = (elemTop < (window.innerHeight - (elemHeight*0.66)) && (elemBottom >= 0));
  }

  return isVisible;
}

// checks on scrolls
window.onscroll = () => {
  if (isScrolledIntoView(document.getElementById('home'), true)) {
    backToTop.classList.remove('button--show');
  } else {
    backToTop.classList.add('button--show');
  }

  if (isScrolledIntoView(document.getElementById('contact'), false)) {
    typewriter.classList.remove("run--animation");
    typewriter.classList.add('run--animation');
  }
  else {
    typewriter.classList.remove('run--animation');
  }
};

/*===== MENU SHOW =====*/
// bootstrap will handle this

/*=== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('navbarDropdown');
    // When we click on each nav__link, we remove the show class bootstrap uses
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__container');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i=0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__container skills__close';
  }

  if (itemClass === 'skills__container skills__close') {
    this.parentNode.className = 'skills__container skills__open';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});