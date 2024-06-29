
const heroSection = document.querySelector('.section--hero');
const images = ['url(img/fon1.svg)', 'url(img/fon2.svg)', 'url(img/fon3.svg)'];
const smallImages = ['url(img/fon-small1.svg)', 'url(img/fon-small2.svg)', 'url(img/fon-small3.svg)'];
let currentImageIndex = 0;

function changeBackgroundImage() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1280) {
        heroSection.style.background = smallImages[currentImageIndex];
    } else {
        heroSection.style.background = images[currentImageIndex];
    }
    heroSection.style.backgroundSize = 'cover';
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

function handleResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1280) {
        heroSection.style.background = smallImages[currentImageIndex];
    } else {
        heroSection.style.background = images[currentImageIndex];
    }
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundRepeat = 'no-repeat';
}

window.addEventListener('resize', handleResize);

// Show the initial background image immediately
changeBackgroundImage();

// Show the rest of the backgrounds every 10 seconds
setInterval(changeBackgroundImage, 10000);




const heroSectiontwo = document.querySelector('.section--hero');
const smallImagestwo = ['url(img/fonsmaller-1.svg)', 'url(img/fonsmaller-2.svg)', 'url(img/fonsmaller-3.svg)'];
let currentImageIndextwo = 0;

function changeBackgroundImageTwo() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 500) {
        heroSectiontwo.style.background = smallImagestwo[currentImageIndextwo];
    }
    heroSectiontwo.style.backgroundSize = 'cover';
    currentImageIndextwo = (currentImageIndextwo + 1) % smallImagestwo.length;
}

function handleResizeTwo() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 500) {
        heroSectiontwo.style.background = smallImagestwo[currentImageIndextwo];
    }
    heroSectiontwo.style.backgroundSize = 'cover';
    heroSectiontwo.style.backgroundRepeat = 'no-repeat';
}

window.addEventListener('resize', handleResizeTwo);

// Show the initial background image immediately
changeBackgroundImageTwo();

// Show the rest of the backgrounds every 10 seconds
setInterval(changeBackgroundImageTwo, 10000);


function toggleCheckbox(event) {
    event.preventDefault();
    const svg = event.currentTarget.querySelector('svg');
    svg.classList.toggle('checked');
}