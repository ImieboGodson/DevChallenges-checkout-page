let discountedPrices = document.querySelectorAll('.discount-price');
let productQuantities = document.querySelectorAll('.qtn-value');
const addButtons = document.querySelectorAll('.add-btn');
const minusButtons = document.querySelectorAll('.minus-btn');
let totalPrice = document.getElementsByClassName('total');


productQuantities.forEach(pq => pq.innerHTML = 1);


function addFunction () {
    console.log(this);
    let title = this.getAttribute('title');
    let addBtn = document.querySelector(`.add-btn[title='${title}']`);
    let productQuantity = document.querySelector(`.qtn-value[title='${title}']`).innerHTML;
    
    productQuantity ++;
    
    document.querySelector(`.qtn-value[title='${title}']`).innerHTML = productQuantity;
}

function minusFunction() {
    console.log(this);
    let title = this.getAttribute('title');
    let minusBtn = document.querySelector(`.minus-btn[title='${title}']`);
    let productQuantity = document.querySelector(`.qtn-value[title='${title}']`).innerHTML;
    let discountedPrice = document.querySelector(`.discount-price[title='${title}']`);

    if (productQuantity > 1) {
        productQuantity -= 1;
    } else {
        productQuantity = 1;
    }


    document.querySelector(`.qtn-value[title='${title}']`).innerHTML = productQuantity;
}

addButtons.forEach(addBtn => addBtn.addEventListener('click', addFunction));

minusButtons.forEach(minusBtn => minusBtn.addEventListener('click', minusFunction));



// Arrray
// const numbers = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'seite'];

// console.log(Array.isArray(numbers));

// numbers.shift();
// numbers.unshift('cero');
// numbers.pop();
// numbers.push('seite');

// console.log(numbers.indexOf('seis'));

// console.log(numbers);



// const todos = [
//     {
//         id: 1,
//         text: 'Create folder',
//         isComplete: false
//     },
//     {
//         id: 2,
//         text: 'Create plac',
//         isComplete: true
//     },
//     {
//         id: 3,
//         text: 'Create design',
//         isComplete: false
//     }
// ]

// const toJson = JSON.stringify(todos);

// console.log('JSON:', toJson)

// const back2array = JSON.parse(toJson)

// console.log('Array:', back2array)