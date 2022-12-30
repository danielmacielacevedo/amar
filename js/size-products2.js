const sizeButton = document.querySelector('.size1');
const currentProduct = document.querySelector('.current-product1');
const currentPayment = document.querySelector('.current-payment1');

const sizeButton2 = document.querySelector('.size2');
const currentProduct2 = document.querySelector('.current-product2');
const currentPayment2 = document.querySelector('.current-payment2');

currentProduct2.classList.add('none');

currentPayment2.classList.add('none');

let firstCurrentProduct = false;

sizeButton.addEventListener('click', () => 
{
        if (!firstCurrentProduct) {
                currentProduct.classList.remove('none');
                currentProduct2.classList.add('none');

                currentPayment.classList.remove('none');
                currentPayment2.classList.add('none');

                firstCurrentProduct = true;
        } else {
                currentProduct2.classList.add('none');

                currentPayment2.classList.add('none');

                firstCurrentProduct = false;
        }
});

sizeButton2.addEventListener('click', () => 
{
        currentProduct.classList.add('none');
        currentProduct2.classList.remove('none');

        currentPayment.classList.add('none');
        currentPayment2.classList.remove('none');

        

        firstCurrentProduct = false;
});

