const selectButton_2 = document.querySelector('.select1_2');
const productContent_2 = document.querySelector('.product1_2');
const paymentButton_2 = document.querySelector('.payment1_2');

const selectButton2_2 = document.querySelector('.select2_2');
const productContent2_2 = document.querySelector('.product2_2');
const paymentButton2_2 = document.querySelector('.payment2_2');

const selectButton3_2 = document.querySelector('.select3_2');
const productContent3_2 = document.querySelector('.product3_2');
const paymentButton3_2 = document.querySelector('.payment3_2');

const selectButton4_2 = document.querySelector('.select4_2');
const productContent4_2 = document.querySelector('.product4_2');
const paymentButton4_2 = document.querySelector('.payment4_2');

const selectButton5_2 = document.querySelector('.select5_2');
const productContent5_2 = document.querySelector('.product5_2');
const paymentButton5_2 = document.querySelector('.payment5_2');

productContent2_2.classList.add('none');
productContent3_2.classList.add('none');
productContent4_2.classList.add('none');
productContent5_2.classList.add('none');

// paymentButton2_2.classList.add('none');
// paymentButton3_2.classList.add('none');
// paymentButton4_2.classList.add('none');
// paymentButton5_2.classList.add('none');

let firstProduct_2 = false;

selectButton_2.addEventListener('click', () => 
{
        if (!firstProduct_2) {
                productContent_2.classList.remove('none');
                productContent2_2.classList.add('none');
                productContent3_2.classList.add('none');
                productContent4_2.classList.add('none');
                productContent5_2.classList.add('none');

                // paymentButton_2.classList.remove('none');
                // paymentButton2_2.classList.add('none');
                // paymentButton3_2.classList.add('none');
                // paymentButton4_2.classList.add('none');
                // paymentButton5_2.classList.add('none');

                firstProduct_2 = true;
        } else {
                productContent2_2.classList.add('none');
                productContent3_2.classList.add('none');
                productContent4_2.classList.add('none');
                productContent5_2.classList.add('none');

                // paymentButton2_2.classList.add('none');
                // paymentButton3_2.classList.add('none');
                // paymentButton4_2.classList.add('none');
                // paymentButton5_2.classList.add('none');

                firstProduct_2 = false;
        }
});

selectButton2_2.addEventListener('click', () => 
{
        productContent_2.classList.add('none');
        productContent2_2.classList.remove('none');
        productContent3_2.classList.add('none');
        productContent4_2.classList.add('none');
        productContent5_2.classList.add('none');

        // paymentButton_2.classList.add('none');
        // paymentButton2_2.classList.remove('none');
        // paymentButton3_2.classList.add('none');
        // paymentButton4_2.classList.add('none');
        // paymentButton5_2.classList.add('none');

        

        firstProduct_2 = false;
});

selectButton3_2.addEventListener('click', () => 
{
        productContent_2.classList.add('none');
        productContent2_2.classList.add('none');
        productContent3_2.classList.remove('none');
        productContent4_2.classList.add('none');
        productContent5_2.classList.add('none');

        // paymentButton_2.classList.add('none');
        // paymentButton2_2.classList.add('none');
        // paymentButton3_2.classList.remove('none');
        // paymentButton4_2.classList.add('none');
        // paymentButton5_2.classList.add('none');
        
        firstProduct_2 = false;
});

selectButton4_2.addEventListener('click', () => 
{
        productContent_2.classList.add('none');
        productContent2_2.classList.add('none');
        productContent3_2.classList.add('none');
        productContent4_2.classList.remove('none');
        productContent5_2.classList.add('none');

        // paymentButton_2.classList.add('none');
        // paymentButton2_2.classList.add('none');
        // paymentButton3_2.classList.add('none');
        // paymentButton4_2.classList.remove('none');
        // paymentButton5_2.classList.add('none');

        firstProduct_2 = false;
});

selectButton5_2.addEventListener('click', () => 
{
        productContent_2.classList.add('none');
        productContent2_2.classList.add('none');
        productContent3_2.classList.add('none');
        productContent4_2.classList.add('none');
        productContent5_2.classList.remove('none');

        // paymentButton_2.classList.add('none');
        // paymentButton2_2.classList.add('none');
        // paymentButton3_2.classList.add('none');
        // paymentButton4_2.classList.add('none');
        // paymentButton5_2.classList.remove('none');

        firstProduct_2 = false;
});

