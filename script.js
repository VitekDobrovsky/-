const navbarColor = document.getElementById("navbar");
const heading = document.getElementById("name");
const links = document.getElementById("navlinks");
const lnks = document.querySelectorAll(".lnk");

function setColorsToWelcome() {
  // scrollbar, navbar
  navbarColor.style.backgroundColor = "#264E1B";
  heading.style.fontFamily =
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  heading.style.color = "#D3E923";
  heading.innerHTML = "Vítek Dobrovský"
  links.style.fontFamily =
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  lnks.forEach((lnk) => {
    lnk.style.color = "rgb(250,250,250)";
  });
}

function setColorsToBusiness() {
  navbarColor.style.backgroundColor = "#780116";
  heading.style.color = "#E8C0E8";
  heading.style.fontFamily = "Coolvetica";
  heading.innerHTML = "Vítek Dobrovský"
  links.style.fontFamily = "Coolvetica";
  lnks.forEach((lnk) => {
    lnk.style.color = "#ffff";
  });
}

function setColorsToCreative() {
  navbarColor.style.backgroundColor = "#E9C0E9";
  heading.style.color = "#502374";
  heading.style.fontFamily = "Episode";
  heading.innerHTML = "Vitek Dobrovsky"
  links.style.fontFamily = "Episode";
  lnks.forEach((lnk) => {
    lnk.style.color = "#ffff";
  });
}

setColorsToWelcome();

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;

  console.log(scrollPos);

  if (scrollPos < 2300) {
    document.getElementById("businesses").innerHTML =
      "<h3>Cut Bros Graphics</h3><h4>Short form content agency</h4><p class='notactive'>• Not Active</p>";
  } else if (scrollPos < 3220) {
    document.getElementById("businesses").innerHTML =
      "<h3>Pslib Resells</h3><h4>School resell shop, hobby</h4><p class='active'>• Active</p>";
  } else {
    document.getElementById("businesses").innerHTML =
      "<h3>AstraKold</h3><h4>Lead generation agency</h4><p class='active'>• Active</p>";
  }

  if (scrollPos < 1020) {
    setColorsToWelcome();
  } else if (scrollPos < 4619) {
    setColorsToBusiness();
  } else if (scrollPos > 4619) {
    setColorsToCreative();
  }
  if (scrollPos > 270) {
    document.getElementById("name").style.fontSize = "3em";
    document.getElementById("name").style.top = "0";
    document.getElementById("name").style.position = "fixed";
  } else if (scrollPos < 250) {
    document.getElementById("name").style.fontSize = "7em";
    document.getElementById("name").style.position = "static";
  }

  if (scrollPos > 190) {
    document.querySelector(".arr").classList.add("invisible");
    document.querySelector(".icons").classList.add("invisible");
  } else {
    document.querySelector(".arr").classList.remove("invisible");
    document.querySelector(".icons").classList.remove("invisible");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElementsL = document.querySelectorAll(".hiddenL");
hiddenElementsL.forEach((el) => observer.observe(el));

const hiddenElementsR = document.querySelectorAll(".hiddenR");
hiddenElementsR.forEach((el) => observer.observe(el));

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
