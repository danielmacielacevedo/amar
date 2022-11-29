const selectButton = document.querySelector('.select1');
const productContent = document.querySelector('.product1');
let firstProduct = false;

const selectButton2 = document.querySelector('.select2');
const productContent2 = document.querySelector('.product2');

const selectButton3 = document.querySelector('.select3');
const productContent3 = document.querySelector('.product3');

selectButton.addEventListener('click', () => 
{
        productContent.classList.remove('none');
        productContent2.classList.add('none');
        productContent3.classList.add('none');
        firstProduct = true;
});

selectButton2.addEventListener('click', () => 
{
        productContent.classList.add('none');
        productContent2.classList.remove('none');
        productContent3.classList.add('none');
        firstProduct = false;
});

selectButton3.addEventListener('click', () => 
{
        productContent.classList.add('none');
        productContent2.classList.add('none');
        productContent3.classList.remove('none');
        firstProduct = false;
});

