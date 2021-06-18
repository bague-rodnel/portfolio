/*===== BACK TO TOP =====*/
const backToTop = document.getElementById('btnBackToTop');

backToTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// detect scrolling 
window.onscroll = () => {
  let bodyTop = document.body.scrollTop;
  let docElementTop = document.documentElement.scrollTop;
  let homeSection = document.getElementById('home');
  let topDistance = (bodyTop) ? bodyTop : docElementTop;

  if (topDistance > (homeSection.scrollHeight)){
    backToTop.classList.add('button--show');
  }
  else if (topDistance <= 0) {
    backToTop.classList.remove('button--show');
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