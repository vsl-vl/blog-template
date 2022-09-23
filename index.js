let navBar = document.querySelector('nav');
let navToggler = document.querySelector('.navbar-toggler');
let navMenu = document.querySelector('.navbar-menu');
let navShadow = document.querySelector('.navbar-shadow');
let togglerIcon = document.querySelector('.toggler-icon');


window.onscroll = function(){
    if(window.pageYOffset > navBar.offsetTop){
        navBar.classList.add("stickyNav");
    }else{
        navBar.classList.remove("stickyNav");
    }
};

navToggler.addEventListener('click', ()=>{
    navMenu.classList.toggle("opened-menu");
    navShadow.classList.toggle("opened-shadow");
    togglerIcon.classList.toggle("toggled-icon");
});