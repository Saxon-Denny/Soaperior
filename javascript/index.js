

function showHome() {
    about = document.getElementById('about');
    shop = document.getElementById('shop');
    contact = document.getElementById('contact');
    homeNav = document.getElementById('home-nav');
    aboutNav = document.getElementById('about-nav');
    shopNav = document.getElementById('shop-nav');
    contactNav = document.getElementById('contact-nav');
    about.style.display = "none";
    shop.style.display = "none";
    contact.style.display = "none";
    aboutNav.style.border = "none";
    homeNav.style.border = "3px solid #555555";
    shopNav.style.border = "none";
    contactNav.style.border = "none";
}

function showAbout() {
    about = document.getElementById('about');
    shop = document.getElementById('shop');
    contact = document.getElementById('contact');
    homeNav = document.getElementById('home-nav');
    aboutNav = document.getElementById('about-nav');
    shopNav = document.getElementById('shop-nav');
    contactNav = document.getElementById('contact-nav');
    about.style.display = "block";
    shop.style.display = "none";
    contact.style.display = "none";
    aboutNav.style.border = "3px solid #555555"
    homeNav.style.border = "none"
    shopNav.style.border = "none"
    contactNav.style.border = "none"
}

function showShop() {
    about = document.getElementById('about');
    shop = document.getElementById('shop');
    contact = document.getElementById('contact');
    homeNav = document.getElementById('home-nav');
    aboutNav = document.getElementById('about-nav');
    shopNav = document.getElementById('shop-nav');
    contactNav = document.getElementById('contact-nav');
    about.style.display = "none";
    shop.style.display = "block";
    contact.style.display = "none";
    aboutNav.style.border = "none"
    homeNav.style.border = "none"
    shopNav.style.border = "3px solid #555555"
    contactNav.style.border = "none"
}


function showContact() {
    about = document.getElementById('about');
    shop = document.getElementById('shop');
    contact = document.getElementById('contact');
    homeNav = document.getElementById('home-nav');
    aboutNav = document.getElementById('about-nav');
    shopNav = document.getElementById('shop-nav');
    contactNav = document.getElementById('contact-nav');
    about.style.display = "none";
    shop.style.display = "none";
    contact.style.display = "block";
    aboutNav.style.border = "none";
    homeNav.style.border = "none";
    shopNav.style.border = "none";
    contactNav.style.border = "3px solid #555555";
}


function homeLoad() {
    homeNav = document.getElementById('home-nav');
    homeNav.style.border = "3px solid #555555";
}

var clicks = 0;
function linkClick() {
  
    menuIcon = document.getElementById('menu-icon');
    nav = document.getElementById('nav');
    menuIcon.value = ++clicks;
   
    if(clicks % 2 !== 0){
        nav.style.display = "inline-block";
    }else{ nav.style.display = "none"}
}

