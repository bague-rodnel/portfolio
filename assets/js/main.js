const toolsDataJSON = '{"bootstrap":{"name":"Bootstrap","classification":"frontend","info":"quick prototyping"},"css3":{"name":"CSS3","classification":"frontend","info":"markup language for styling"},"expressjs":{"name":"Express JS","classification":"backend","info":"allows for quick restful API implementation"},"git":{"name":"Git","classification":"backend","info":"version control system - concurrent code contribution is made possible"},"gitlab":{"name":"GitLab","classification":"backend","info":"our chosen online repo for our React group project"},"heroku":{"name":"Heroku","classification":"backend","info":"where I deployed my ecommerce API"},"html5":{"name":"HTML5","classification":"frontend","info":"for semantic markup"},"javascript":{"name":"JavaScript","classification":"frontend","info":"core language for frontend scripting and node.js backend"},"mongodb":{"name":"MongoDB","classification":"backend","info":"quick and lightweight db, preferred store for our ecommerce products data"},"nodejs":{"name":"Node.js","classification":"backend","info":"backend environment for JavaScript which ran our Express API"},"postman":{"name":"Postman","classification":"backend","info":"API development and testing"},"reactjs":{"name":"React","classification":"frontend","info":"JavaScript library for component-based design approach"}}';
const toolsDataObj = JSON.parse(toolsDataJSON);

/*===== BACK TO TOP =====*/
const backToTop = document.getElementById('btnBackToTop');


/*====== TYPEWRITER =====*/
const typewriter = document.getElementById('typewriter');

function isScrolledIntoView(elem, requireFull) {
  let rect = elem.getBoundingClientRect();
  let elemTop = rect.top;
  let elemBottom = rect.bottom;  // distance from the top of window
  let elemHeight = rect.height;
  let isVisible = false;

  if (requireFull) {
    // assumes that element height is shorter than screen height
    // Only completely visible elements return true:
    isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  }
  else {
    // Partially visible elements return true: (im accepting 66% of element)
    // isVisible = (elemTop < (window.innerHeight - (elemHeight*0.66)) && (elemBottom >= 0));

    // partially visible accepting any height visible
    isVisible = (elemTop < (window.innerHeight) && (elemBottom >= 0));
  }

  return isVisible;
}


/*===== MENU SHOW =====*/
// bootstrap will handle this

/*=== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('navbarDropdown');
    // When we click on each nav__link, we remove the .show class bootstrap uses
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



$(document).ready(() => {
  
  AOS.init({offset: 80, duration: 950});


  skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
  });

  backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  window.onscroll = () => {
    // if home is not visible ...
    if ( !(isScrolledIntoView(document.getElementById('home'), false))) {
      backToTop.classList.add('button--show');
    } else {
      backToTop.classList.remove('button--show');
    }

    if (isScrolledIntoView(document.getElementById('contact'), false)) {
      typewriter.classList.add('run--animation');
    }
    else {
      typewriter.classList.remove('run--animation');
    }
  };

  $('#staticBackdrop').on('show.bs.modal', function (event) {
    $(this).find(".modal-image").html('<img src="'+ $(event.relatedTarget).data('img') + '" class="w-100 d-block">');
    $(this).find(".modal-title").text($(event.relatedTarget).data('title'));
    $(this).find(".modal-body").text($(event.relatedTarget).data('text'));
  });

  $('.tools__logo').each((index, el) => {
    let toolCaption = $('#toolCaption');
    let captionName = toolCaption.find('.name');
    let captionToolClass = toolCaption.find('.tool__class');
    let captionInfo = toolCaption.find('.info');

    $(el).hover(() => {
      let toolFocus = toolsDataObj[$(el).attr("alt")];

      toolCaption.visible();
      captionName.html(toolFocus["name"]);
      captionInfo.html(toolFocus["info"]);
      if (toolFocus["classification"] == "frontend") {
        captionToolClass.html('<i class="uil uil-window-grid skills__icon"></i>');
      } else {
        captionToolClass.html('<i class="uil uil-server-network-alt skills__icon"></i>');
      }
    }, () => {
      toolCaption.invisible();
    }); 
  });

  $('#contactForm').click(() => {
    typewriter.classList.add('run--animation');
  })

  $('[data-toggle="tooltip"]').tooltip({ container : '.page__wrapper' });
});