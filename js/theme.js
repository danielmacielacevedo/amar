const themeButton = document.querySelector('.theme-selector');
const themeIcon = document.querySelector('.theme-img');
let themeOpen = false;

themeButton.addEventListener('click', () => 
{
    if(!themeOpen) 
    {
        themeButton.classList.add('open');
        themeIcon.classList.add('open');
        themeOpen = true;
    } else {
        themeButton.classList.remove('open');
        themeIcon.classList.remove('open');
        themeOpen = false;
    }
});

themeButton.onclick = function() {
    document.body.classList.toggle('theme');
}