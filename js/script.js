const themeBtn = document.getElementById("theme-toggle");
const darkModeSVG = document.getElementById("theme-toggle-dark-icon");
const lightModeSVG = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  lightModeSVG.classList.remove("hidden");
} else {
  darkModeSVG.classList.remove("hidden");
}

const themeToggle = (e) => {
  darkModeSVG.classList.toggle("hidden");
  lightModeSVG.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
};

themeBtn.addEventListener("click", themeToggle);
