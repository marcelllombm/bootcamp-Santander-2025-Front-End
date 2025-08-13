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
