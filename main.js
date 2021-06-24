const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const navLink = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click',()=>{
    navMenu.classList.toggle('show-menu');
})

navLink.forEach(nav =>{
    nav.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
})

function scrollTop(){
    const scrollTop = document.querySelector("#scroll-top");
    if(this.scrollY >=200){
        scrollTop.classList.add('show-scroll');
    }else{
        scrollTop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollTop);



/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

function scaleCv(){
    document.body.classList.add('scale-cv');
}

function removeScale(){
    document.body.classList.remove('scale-cv');
}

let areaCv = document.querySelector('#area-cv')

let resumeBtn = document.querySelector('#resume-btn');

let opt = {
    margin: 0,
    filename: 'myResume.pdf',
    image: {type: 'jpeg', quality: 0.98},
    html2canvas: {scale: 4},
    jsPDF: {format: 'a4', orientation: 'potrait'}
}

function generateResume(){
    html2pdf(areaCv,opt);
}

resumeBtn.addEventListener('click',()=>{
    scaleCv();
    generateResume();
    setTimeout(removeScale,5000)
})
















