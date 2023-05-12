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

let imgNo = 1;

const slider = {
  img: (display) => document.getElementsByClassName(`slider--${display}`)[0],
  txt: (type) => document.getElementsByClassName(`top-blurb__${type}`)[0],
  toggle: (no) => document.getElementsByClassName(`slider__container`)[no],
  setHeroImgs: (screen, no) => `${screen}-image-hero-${no}.jpg`,
  setMobileImg: (no) => slider.setHeroImgs("mobile", no),
  setDesktopImg: (no) => slider.setHeroImgs("desktop", no),
  setImgs: function () {
    this.img("mobile").style.backgroundImage = `url(images/${this.setMobileImg(
      imgNo
    )})`;
    this.img(
      "desktop"
    ).style.backgroundImage = `url(images/${this.setDesktopImg(imgNo)})`;
    this.txt("heading").innerHTML = headings[imgNo - 1];
    this.txt("paragraph").innerHTML = paragraphs[imgNo - 1];
  },
  setToggleFoward: function (no) {
    this.toggle(no).onclick = () => {
      imgNo++;
      if (imgNo > 3) imgNo = 1;
      this.setImgs();
    };
  },
  setTogglePrev: function (no) {
    this.toggle(no).onclick = () => {
      imgNo--;
      if (imgNo < 1) imgNo = 3;
      this.setImgs();
    };
  },
};

const toggles = {
  mobile: {
    fowards: () => slider.setToggleFoward(1), 
    prev: () => slider.setTogglePrev(0)
  }, 
  desktop: {
    fowards: () => slider.setToggleFoward(2),
    prev: () => slider.setTogglePrev(3)
  }
}

toggles.mobile.fowards()
toggles.mobile.prev()
toggles.desktop.fowards()
toggles.desktop.prev()





