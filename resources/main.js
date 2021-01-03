let discountedPrice1 = document.getElementsByClassName('discount-price')[0].innerHTML = '$' + 54.99;
let discountedPrice2 = document.getElementsByClassName('discount-price')[1].innerHTML = '$' + 74.99;
let productQuantity = 1;
const addButton = document.getElementById('add-btn');
const minusButton = document.getElementById('minus-btn');
let totalPrice = document.getElementsByClassName('total');



const increaseFunction = () => {
    discountedPrice = discountedPrice + 74.99;
    return document.getElementsByClassName('discount-price')[1].innerHTML = '$'+ discountedPrice;
}

const decreaseFunction = () => {
    if (productQuantity > 1) {
        discountedPrice = discountedPrice - 74.99;
    } else {
        discountedPrice = 74.99
    }

    return document.getElementsByClassName('discount-price')[1].innerHTML = '$'+ discountedPrice;
}



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

addButton.addEventListener('click', addFunction);

minusButton.addEventListener('click', minusFunction);