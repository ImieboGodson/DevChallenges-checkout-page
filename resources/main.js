let discountedPrices = document.querySelectorAll('.d-price');
let productQuantities = document.querySelectorAll('.qtn-value');
const addButtons = document.querySelectorAll('.add-btn');
const minusButtons = document.querySelectorAll('.minus-btn');
let totalPrice = document.querySelector('.total');

discountedPrices[0].innerHTML = 54.99;
discountedPrices[1].innerHTML = 74.99;

productQuantities.forEach(pq => pq.innerHTML = 1);


function addFunction () {
    console.log(this);
    let title = this.getAttribute('title');
    let addBtn = document.querySelector(`.add-btn[title='${title}']`);
    let productQuantity = document.querySelector(`.qtn-value[title='${title}']`).innerHTML;
    let discountedPrice = document.querySelector(`.d-price[title='${title}']`).innerHTML;


    productQuantity ++;

    

    document.querySelector(`.qtn-value[title='${title}']`).innerHTML = productQuantity;

    // discountedPrices.forEach(dp => dp.innerHTML * 2);
    // discountedPrice += discountedPrice;

    console.log(discountedPrice); 
    // 19,613

    document.querySelector(`.d-price[title='${title}']`).innerHTML = discountedPrice
    
}

function minusFunction() {
    console.log(this);
    let title = this.getAttribute('title');
    let minusBtn = document.querySelector(`.minus-btn[title='${title}']`);
    let productQuantity = document.querySelector(`.qtn-value[title='${title}']`).innerHTML;
    let discountedPrice = document.querySelector(`.d-price[title='${title}']`);

    if (productQuantity > 1) {
        productQuantity -= 1;
    } else {
        productQuantity = 1;
    }


    document.querySelector(`.qtn-value[title='${title}']`).innerHTML = productQuantity;
}

addButtons.forEach(addBtn => addBtn.addEventListener('click', addFunction));

minusButtons.forEach(minusBtn => minusBtn.addEventListener('click', minusFunction));