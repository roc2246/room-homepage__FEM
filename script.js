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

const headings = ["1", "2", "3"];

const paragraphs = ["1", "2", "3"];

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
