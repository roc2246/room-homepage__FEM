const toggle = document.getElementsByClassName("nav__toggle")[0];
const nav = document.getElementsByClassName("nav__links")[0];
const hamburger = document.getElementsByClassName("nav__toggle--open")[0];
const x = document.getElementsByClassName("nav__toggle--close")[0];

toggle.onclick = () => {
  if (nav.style.display === "" || nav.style.display === "none") {
    nav.style.display = "flex";
    hamburger.style.display = "none";
    x.style.display = "inline";
    nav.classList.add("nav__links--mobile");
    nav.classList.remove("nav__links--desktop");
  } else if (nav.style.display === "flex") {
    nav.style.display = "none";
    hamburger.style.display = "inline";
    x.style.display = "none";
    nav.classList.add("nav__links--desktop");
    nav.classList.remove("nav__links--mobile");
  }
};
