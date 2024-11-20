const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));



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


const expandButtons = document.querySelectorAll('.expandButton');


expandButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        
        const card = this.closest('.cardum, .carddois, .cardtres');
        
        
        card.classList.toggle('expanded');
        
        
        const img = this.querySelector('img');
        
        if (card.classList.contains('expanded')) {
            img.src = 'img/Diminuiricon.png';
            this.style.backgroundColor = '#ff161f';
        } else {
            img.src = 'img/Expandiricon.png';
            this.style.backgroundColor = '';
        }
    });
});