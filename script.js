let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let counter = document.querySelector('h1');
let price = document.querySelector('h2 span');
let count = 0;
let pricePerItem = 80; // Assuming each item costs $10


decrement.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counter.textContent = count;
        price.textContent = pricePerItem * count;
    }
});

increment.addEventListener('click', () => {
    count++;
    counter.textContent = count;
    price.textContent = pricePerItem * count;
});
