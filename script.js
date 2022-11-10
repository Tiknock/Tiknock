AOS.init();

let lastScrollTop = 0;
navbar = document.getElementById("navbar")

window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop
})


var typed3 = new Typed('.typed', {
    strings: ["Après m'être perdue", "Après de nombreuses années à étudier les Sciences de l'Education, je me suis prise de passion pour le développement web et, n'ayant plus réussi à m'en décrocher, ai décidé de me former dans ce domaine."],
    typeSpeed: 20,
  });


const portfolioContainers = [...document.querySelectorAll('.portfolio-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

portfolioContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})