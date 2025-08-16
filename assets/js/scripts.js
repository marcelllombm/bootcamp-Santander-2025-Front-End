// trocar o thema para claro ou escuro
const toggleTheme = document.getElementById("toggleTheme");
const rootHTML = document.documentElement;

function changeTheme() {
  const currentTheme = rootHTML.getAttribute("data-theme");
  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");

  currentTheme === "dark"
    ? rootHTML.setAttribute("data-theme", "light")
    : rootHTML.setAttribute("data-theme", "dark");
}

toggleTheme.addEventListener("click", changeTheme);

const accordionHeades = document.querySelectorAll(".accordion__header");

accordionHeades.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive
      ? accordionItem.classList.remove("active")
      : accordionItem.classList.add("active");
  });
});

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
