const nav = {
  toggle: document.getElementsByClassName("nav__toggle")[0],
  links: document.getElementsByClassName("nav__links")[0],
  icon: (img) => document.getElementsByClassName(`nav__toggle--${img}`)[0],
  toggleNavIcon: function (link, open, close) {
    this.links.style.display = link;
    this.icon("open").style.display = open;
    this.icon("close").style.display = close;
  },
};

nav.toggle.onclick = () => {
  if (nav.links.style.display === "" || nav.links.style.display === "none") {
    nav.toggleNavIcon("flex", "none", "inline");
    nav.links.classList.add("nav__links--mobile");
  } else if (nav.links.style.display === "flex") {
    nav.toggleNavIcon("none", "inline", "none");
    nav.links.classList.remove("nav__links--mobile");
  }
};

const sliderImgMobile = document.getElementsByClassName("slider--mobile")[0];
const sliderImgDesktop = document.getElementsByClassName("slider--desktop")[0];
const sliderHeading = document.getElementsByClassName("top-blurb__heading")[0];
const sliderParagraph = document.getElementsByClassName(
  "top-blurb__paragraph"
)[0];

// mobile
const sliderBackMobile =
  document.getElementsByClassName("slider__container")[0];
const sliderFowardMobile =
  document.getElementsByClassName("slider__container")[1];

// desktop
const sliderBackDesktop =
  document.getElementsByClassName("slider__container")[2];
const sliderFowardDesktop =
  document.getElementsByClassName("slider__container")[3];

let imgNo = 1;

const headings = [
  `Discover innovative ways to decorate`,
  `We are available all across the 
globe`,
  `Manufactured
with the best materials`,
];

const paragraphs = [
  `We provide unmatched quality, comfort, and
style for property owners across the country.
 Our experts combine form and function in
  bringing
 your vision to life. Create a room in 
 your
  own style with our collection and make 
  your property 
 a reflection of you and what you love.`,
  `  With stores 
  all over the world, it's easy for you 
  to find furniture for your home or 
  place of business. 
  Locally, we’re in most major cities
   throughout the country. Find the
    branch nearest you using our store 
    locator. 
  Any questions? Don't hesitate to
   contact us today.`,
  ` Our modern 
  furniture store provide a high level 
  of quality. Our company has invested 
  in advanced technology to ensure 
  that every product is made as perfect 
  and as consistent as possible. With 
  three decades of experience in this
   industry, we understand what customers
    want for their home and office.`,
];

function setHeroImgs(screen, no) {
  return `${screen}-image-hero-${no}.jpg`;
}

const mobileImage = function (no) {
  return setHeroImgs("mobile", no);
};

const desktopImage = function (no) {
  return setHeroImgs("desktop", no);
};

sliderFowardMobile.onclick = () => {
  imgNo++;
  if (imgNo > 3) imgNo = 1;
  sliderImgMobile.style.backgroundImage = `url(images/${mobileImage(imgNo)})`;
  sliderImgDesktop.style.backgroundImage = `url(images/${desktopImage(imgNo)})`;
  sliderHeading.innerHTML = headings[imgNo - 1];
  sliderParagraph.innerHTML = paragraphs[imgNo - 1];
};

sliderBackMobile.onclick = () => {
  imgNo--;
  if (imgNo < 1) imgNo = 3;
  sliderImgMobile.style.backgroundImage = `url(images/${mobileImage(imgNo)})`;
  sliderImgDesktop.style.backgroundImage = `url(images/${desktopImage(imgNo)})`;
  sliderHeading.innerHTML = headings[imgNo - 1];
  sliderParagraph.innerHTML = paragraphs[imgNo - 1];
};

sliderFowardDesktop.onclick = () => {
  imgNo++;
  if (imgNo > 3) imgNo = 1;
  sliderImgMobile.style.backgroundImage = `url(images/${mobileImage(imgNo)})`;
  sliderImgDesktop.style.backgroundImage = `url(images/${desktopImage(imgNo)})`;
  sliderHeading.innerHTML = headings[imgNo - 1];
  sliderParagraph.innerHTML = paragraphs[imgNo - 1];
};

sliderBackDesktop.onclick = () => {
  imgNo--;
  if (imgNo < 1) imgNo = 3;
  sliderImgMobile.style.backgroundImage = `url(images/${mobileImage(imgNo)})`;
  sliderImgDesktop.style.backgroundImage = `url(images/${desktopImage(imgNo)})`;
  sliderHeading.innerHTML = headings[imgNo - 1];
  sliderParagraph.innerHTML = paragraphs[imgNo - 1];
};
