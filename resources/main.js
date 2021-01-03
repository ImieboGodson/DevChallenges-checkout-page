let discountedPrice1 = document.getElementsByClassName('discount-price')[0].innerHTML = '$' + 54.99;
let discountedPrice2 = document.getElementsByClassName('discount-price')[1].innerHTML = '$' + 74.99;
let productQuantity = 1;
const addButton1 = document.getElementsByClassName('add-btn')[0];
const addButton2 = document.getElementsByClassName('add-btn')[1];
const minusButton1 = document.getElementsByClassName('minus-btn')[0];
const minusButton2 = document.getElementsByClassName('minus-btn')[1];
let totalPrice = document.getElementsByClassName('total');



// const increaseFunction = () => {
//     discountedPrice = discountedPrice + 74.99;
//     return document.getElementsByClassName('discount-price')[1].innerHTML = '$'+ discountedPrice;
// }

// const decreaseFunction = () => {
//     if (productQuantity > 1) {
//         discountedPrice = discountedPrice - 74.99;
//     } else {
//         discountedPrice = 74.99
//     }

//     return document.getElementsByClassName('discount-price')[1].innerHTML = '$'+ discountedPrice;
// }



const addFunction = () => {
    productQuantity = productQuantity + 1;
    // increaseFunction();
    document.getElementById('qtn-value').innerHTML = productQuantity 
}

const minusFunction = () => {
    if (productQuantity > 1) {
        productQuantity -= 1;
        // decreaseFunction();
    } else {
        productQuantity = 1;
        // decreaseFunction();
    }


    document.getElementById('qtn-value').innerHTML = productQuantity

    // decreaseFunction();

}

addButton1.addEventListener('click', addFunction);
addButton2.addEventListener('click', addFunction);

minusButton1.addEventListener('click', minusFunction);
minusButton2.addEventListener('click', minusFunction);