const selectButton = document.querySelector('.select1');
const productContent = document.querySelector('.product1');
// const paymentButton = document.querySelector('.payment1');

const selectButton2 = document.querySelector('.select2');
const productContent2 = document.querySelector('.product2');
// const paymentButton2 = document.querySelector('.payment2');

const selectButton3 = document.querySelector('.select3');
const productContent3 = document.querySelector('.product3');
// const paymentButton3 = document.querySelector('.payment3');

const selectButton4 = document.querySelector('.select4');
const productContent4 = document.querySelector('.product4');
// const paymentButton4 = document.querySelector('.payment4');

const selectButton5 = document.querySelector('.select5');
const productContent5 = document.querySelector('.product5');
// const paymentButton5 = document.querySelector('.payment5');

const selectButton6 = document.querySelector('.select6');
const productContent6 = document.querySelector('.product6');
// const paymentButton6 = document.querySelector('.payment6');

const selectButton7 = document.querySelector('.select7');
const productContent7 = document.querySelector('.product7');
// const paymentButton7 = document.querySelector('.payment7');

const selectButton8 = document.querySelector('.select8');
const productContent8 = document.querySelector('.product8');
// const paymentButton8 = document.querySelector('.payment8');

productContent2.classList.add('none');
productContent3.classList.add('none');
productContent4.classList.add('none');
productContent5.classList.add('none');
productContent6.classList.add('none');
productContent7.classList.add('none');
productContent8.classList.add('none');

// paymentButton2.classList.add('none');
// paymentButton3.classList.add('none');
// paymentButton4.classList.add('none');
// paymentButton5.classList.add('none');
// paymentButton6.classList.add('none');
// paymentButton7.classList.add('none');
// paymentButton8.classList.add('none');

let firstProduct = false;

selectButton.addEventListener('click', () => 
{
        if (!firstProduct) {
                productContent.classList.remove('none');
                productContent2.classList.add('none');
                productContent3.classList.add('none');
                productContent4.classList.add('none');
                productContent5.classList.add('none');
                productContent6.classList.add('none');
                productContent7.classList.add('none');
                productContent8.classList.add('none');

                // paymentButton.classList.remove('none');
                // paymentButton2.classList.add('none');
                // paymentButton3.classList.add('none');
                // paymentButton4.classList.add('none');
                // paymentButton5.classList.add('none');
                // paymentButton6.classList.add('none');
                // paymentButton7.classList.add('none');
                // paymentButton8.classList.add('none');

                firstProduct = true;
        } else {
                productContent2.classList.add('none');
                productContent3.classList.add('none');
                productContent4.classList.add('none');
                productContent5.classList.add('none');
                productContent6.classList.add('none');
                productContent7.classList.add('none');
                productContent8.classList.add('none');

                // paymentButton2.classList.add('none');
                // paymentButton3.classList.add('none');
                // paymentButton4.classList.add('none');
                // paymentButton5.classList.add('none');
                // paymentButton6.classList.add('none');
                // paymentButton7.classList.add('none');
                // paymentButton8.classList.add('none');

                firstProduct = false;
        }
});

selectButton2.addEventListener('click', () => 
{
        productContent.classList.add('none');
        productContent2.classList.remove('none');
        productContent3.classList.add('none');
        productContent4.classList.add('none');
        productContent5.classList.add('none');
        productContent6.classList.add('none');
        productContent7.classList.add('none');
        productContent8.classList.add('none');

        // paymentButton.classList.add('none');
        // paymentButton2.classList.remove('none');
        // paymentButton3.classList.add('none');
        // paymentButton4.classList.add('none');
        // paymentButton5.classList.add('none');
        // paymentButton6.classList.add('none');
        // paymentButton7.classList.add('none');
        // paymentButton8.classList.add('none');

        

        firstProduct = false;
});

selectButton3.addEventListener('click', () => 
{
        productContent.classList.add('none');
        productContent2.classList.add('none');
        productContent3.classList.remove('none');
        productContent4.classList.add('none');
        productContent5.classList.add('none');
        productContent6.classList.add('none');
        productContent7.classList.add('none');
        productContent8.classList.add('none');

        // paymentButton.classList.add('none');
        // paymentButton2.classList.add('none');
        // paymentButton3.classList.remove('none');
        // paymentButton4.classList.add('none');
        // paymentButton5.classList.add('none');
        // paymentButton6.classList.add('none');
        // paymentButton7.classList.add('none');
        // paymentButton8.classList.add('none');
        
        firstProduct = false;
});

selectButton4.addEventListener('click', () => 
{
        productContent.classList.add('none');
        productContent2.classList.add('none');
        productContent3.classList.add('none');
        productContent4.classList.remove('none');
        productContent5.classList.add('none');
        productContent6.classList.add('none');
        productContent7.classList.add('none');
        productContent8.classList.add('none');

        // paymentButton.classList.add('none');
        // paymentButton2.classList.add('none');
        // paymentButton3.classList.add('none');
        // paymentButton4.classList.remove('none');
        // paymentButton5.classList.add('none');
        // paymentButton6.classList.add('none');
        // paymentButton7.classList.add('none');
        // paymentButton8.classList.add('none');

        firstProduct = false;
});

selectButton5.addEventListener('click', () => 
{
        productContent.classList.add('none');
        productContent2.classList.add('none');
        productContent3.classList.add('none');
        productContent4.classList.add('none');
        productContent5.classList.remove('none');
        productContent6.classList.add('none');
        productContent7.classList.add('none');
        productContent8.classList.add('none');

        // paymentButton.classList.add('none');
        // paymentButton2.classList.add('none');
        // paymentButton3.classList.add('none');
        // paymentButton4.classList.add('none');
        // paymentButton5.classList.remove('none');
        // paymentButton6.classList.add('none');
        // paymentButton7.classList.add('none');
        // paymentButton8.classList.add('none');

        firstProduct = false;
});

selectButton6.addEventListener('click', () => 
{
        productContent.classList.add('none');
        productContent2.classList.add('none');
        productContent3.classList.add('none');
        productContent4.classList.add('none');
        productContent5.classList.add('none');
        productContent6.classList.remove('none');
        productContent7.classList.add('none');
        productContent8.classList.add('none');

        // paymentButton.classList.add('none');
        // paymentButton2.classList.add('none');
        // paymentButton3.classList.add('none');
        // paymentButton4.classList.add('none');
        // paymentButton5.classList.add('none');
        // paymentButton6.classList.remove('none');
        // paymentButton7.classList.add('none');
        // paymentButton8.classList.add('none');

        firstProduct = false;
});

selectButton7.addEventListener('click', () => 
{
        productContent.classList.add('none');
        productContent2.classList.add('none');
        productContent3.classList.add('none');
        productContent4.classList.add('none');
        productContent5.classList.add('none');
        productContent6.classList.add('none');
        productContent7.classList.remove('none');
        productContent8.classList.add('none');

        // paymentButton.classList.add('none');
        // paymentButton2.classList.add('none');
        // paymentButton3.classList.add('none');
        // paymentButton4.classList.add('none');
        // paymentButton5.classList.add('none');
        // paymentButton6.classList.add('none');
        // paymentButton7.classList.remove('none');
        // paymentButton8.classList.add('none');

        firstProduct = false;
});

selectButton8.addEventListener('click', () => 
{
        productContent.classList.add('none');
        productContent2.classList.add('none');
        productContent3.classList.add('none');
        productContent4.classList.add('none');
        productContent5.classList.add('none');
        productContent6.classList.add('none');
        productContent7.classList.add('none');
        productContent8.classList.remove('none');

        // paymentButton.classList.add('none');
        // paymentButton2.classList.add('none');
        // paymentButton3.classList.add('none');
        // paymentButton4.classList.add('none');
        // paymentButton5.classList.add('none');
        // paymentButton6.classList.add('none');
        // paymentButton7.classList.add('none');
        // paymentButton8.classList.remove('none');

        firstProduct = false;
});

