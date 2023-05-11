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
