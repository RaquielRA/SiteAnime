// Alternar menu
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

// Alternar tema claro/escuro
const themeButton = document.getElementById('theme-btn');

function toggleTheme() {
    if (document.body.style.backgroundColor === 'rgb(9, 9, 9)') {
        document.body.style.backgroundColor = '#f1f1f1';
        document.body.style.color = '#090909';
        themeButton.textContent = '☀';
    } else {
        document.body.style.backgroundColor = '#090909';
        document.body.style.color = '#f1f1f1';
        themeButton.textContent = '☾';
    }
}

themeButton.addEventListener('click', toggleTheme);