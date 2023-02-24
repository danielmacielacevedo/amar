const themeButton = document.querySelector('.theme-selector');
const themeIcon = document.querySelector('.theme-img');


if(localStorage.getItem('theme') == null)
{
    localStorage.setItem('theme', 'light');
}

let localData = localStorage.getItem('theme');

if(localData == 'dark'){
    document.body.classList.add('theme');
    themeButton.classList.add('open');
    themeIcon.classList.add('open');
} else if(localData == 'light'){
    themeButton.classList.remove('open');
    themeIcon.classList.remove('open');
    document.body.classList.remove('theme');
}

themeButton.onclick = function(){
    document.body.classList.toggle('theme');
    if(document.body.classList.contains('theme')){
        themeButton.classList.add('open');
        themeIcon.classList.add('open');
        localStorage.setItem('theme', 'dark');
    } else {
        themeButton.classList.remove('open');
        themeIcon.classList.remove('open');
        localStorage.setItem('theme', 'light');
    }
}
