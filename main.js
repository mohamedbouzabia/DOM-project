const item1Quantity = 1;
const item1Price = 10;
const item2Quantity = 1;
const item2Price = 20;

const item1Details = document.querySelectorAll(".cart-item-details")[0];
const item1Total = document.querySelectorAll(".cart-item-total p")[0];
const item2Details = document.querySelectorAll(".cart-item-details")[1];
const item2Total = document.querySelectorAll(".cart-item-total p")[1];
const cartTotal = document.querySelector(".cart-total p");

let item1CurrentQuantity = item1Quantity;
let item2CurrentQuantity = item2Quantity;
let cartCurrentTotal = item1Price + item2Price;

// Adjust quantity and update displayed price
function updateQuantityAndTotal(quantity, price, currentQuantity, details, total) {
    details.querySelector(".quantity").textContent = currentQuantity;
    total.textContent = `Total: $${quantity * currentQuantity}`;
    cartCurrentTotal = item1CurrentQuantity * item1Price + item2CurrentQuantity * item2Price;
    cartTotal.textContent = `Total: $${cartCurrentTotal}`;
}

item1Details.querySelector(".increment-btn").addEventListener("click", function () {
    item1CurrentQuantity++;
    updateQuantityAndTotal(item1Price, item1Price, item1CurrentQuantity, item1Details, item1Total);
});

item1Details.querySelector(".decrement-btn").addEventListener("click", function () {
    if (item1CurrentQuantity > 1) {
        item1CurrentQuantity--;
        updateQuantityAndTotal(item1Price, item1Price, item1CurrentQuantity, item1Details, item1Total);
    }
});

item2Details.querySelector(".increment-btn").addEventListener("click", function () {
    item2CurrentQuantity++;
    updateQuantityAndTotal(item2Price, item2Price, item2CurrentQuantity, item2Details, item2Total);
});

item2Details.querySelector(".decrement-btn").addEventListener("click", function () {
    if (item2CurrentQuantity > 1) {
        item2CurrentQuantity--;
        updateQuantityAndTotal(item2Price, item2Price, item2CurrentQuantity, item2Details, item2Total);
    }
});
