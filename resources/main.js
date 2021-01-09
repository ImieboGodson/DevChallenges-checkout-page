let discountedPrices = document.querySelectorAll('.d-price');
let productQuantities = document.querySelectorAll('.qtn-value');
const addButtons = document.querySelectorAll('.add-btn');
const minusButtons = document.querySelectorAll('.minus-btn');
let totalPrice = document.querySelector('.total').innerText = 148.98;


document.querySelector('.d-price[title=item1]').innerText = 54.99;
document.querySelector('.d-price[title=item2]').innerText = 74.99;

let initialPrice1 = 54.99;
let initialPrice2 = 74.99;

productQuantities.forEach(pq => pq.innerText = 1);

// function totalFunction () {
//     let itemPrice1 = document.querySelector('.d-price[title=item1]').innerText;
//     let itemPrice2 = document.querySelector('.d-price[title=item2]').innerText;
    
//     document.querySelector('.total').innerText = itemPrice1 + itemPrice2;

//     console.log(itemPrice2);
// }


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
    }

    console.log(discountedPrice);

    document.querySelector(`.d-price[title='${title}']`).innerText = discountedPrice.toFixed(2)

    // totalFunction ();
    
}

function minusFunction() {
    let title = this.getAttribute('title');
    let productQuantity = document.querySelector(`.qtn-value[title='${title}']`).innerText;
    let discountedPrice = document.querySelector(`.d-price[title='${title}']`);

    if (productQuantity > 1) {
        productQuantity -= 1;
    } else if (productQuantity === 1){
        productQuantity = 1;
    }


    document.querySelector(`.qtn-value[title='${title}']`).innerText = productQuantity;

    if (title === 'item1') {
        discountedPrice = initialPrice1 * productQuantity;
    } else if (title === 'item2') {
        discountedPrice = initialPrice2 * productQuantity;
    }

    document.querySelector(`.d-price[title='${title}']`).innerText = discountedPrice.toFixed(2);

    // totalFunction ();
}

addButtons.forEach(addBtn => addBtn.addEventListener('click', addFunction));

minusButtons.forEach(minusBtn => minusBtn.addEventListener('click', minusFunction));