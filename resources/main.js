let discountedPrices = document.querySelectorAll('.d-price');
let productQuantities = document.querySelectorAll('.qtn-value');
const addButtons = document.querySelectorAll('.add-btn');
const minusButtons = document.querySelectorAll('.minus-btn');
let shippingFee = document.querySelector('.shipping').innerText = 19;
let totalPrice = document.querySelector('.total').innerText = 148.98;

//initiates the values of both discount prices when the page is loaded
document.querySelector('.d-price[title=item1]').innerText = 54.99;
document.querySelector('.d-price[title=item2]').innerText = 74.99;

//storing the initial values each items discount price
let initialPrice1 = 54.99;
let initialPrice2 = 74.99;

//initiates the value of the quantity of item in the cart when pthe page first loads
productQuantities.forEach(pq => pq.innerText = 1);


//adds the each item's discount price and the shipping fee
function totalFunction () {
    let itemPrice1 = document.querySelector('.d-price[title=item1]').innerText;
    let itemPrice2 = document.querySelector('.d-price[title=item2]').innerText;
    
    let total = document.querySelector('.total').innerText;
    
    total = parseFloat(itemPrice1) + parseFloat(itemPrice2) + parseFloat(shippingFee);

    document.querySelector('.total').innerText = total.toFixed(2);
}

//Runs everytime the add button is clicked
function addFunction () {
    let title = this.getAttribute('title');
    let productQuantity = document.querySelector(`.qtn-value[title='${title}']`).innerText;
    let discountedPrice = document.querySelector(`.d-price[title='${title}']`).innerText;

    productQuantity ++;

    document.querySelector(`.qtn-value[title='${title}']`).innerText = productQuantity;


    if (title === 'item1') {
        discountedPrice = initialPrice1 * productQuantity
    } else if(title === 'item2') {
        discountedPrice = initialPrice2 * productQuantity
    };

    document.querySelector(`.d-price[title='${title}']`).innerText = discountedPrice.toFixed(2);

    totalFunction ();
    
}


//Runs everytime the minus button is clicked
function minusFunction() {
    let title = this.getAttribute('title');
    let productQuantity = document.querySelector(`.qtn-value[title='${title}']`).innerText;
    let discountedPrice = document.querySelector(`.d-price[title='${title}']`);

    if (productQuantity > 1) {
        productQuantity -= 1;
    } else if (productQuantity === 1){
        productQuantity = 1;
    };


    document.querySelector(`.qtn-value[title='${title}']`).innerText = productQuantity;

    if (title === 'item1') {
        discountedPrice = initialPrice1 * productQuantity;
    } else if (title === 'item2') {
        discountedPrice = initialPrice2 * productQuantity;
    };

    document.querySelector(`.d-price[title='${title}']`).innerText = discountedPrice.toFixed(2);

    totalFunction ();
}
//Calls the addFunction everytime the add button is clicked
addButtons.forEach(addBtn => addBtn.addEventListener('click', addFunction));

//Calls the minusFunction everytime the minus button is clicked
minusButtons.forEach(minusBtn => minusBtn.addEventListener('click', minusFunction));