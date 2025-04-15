const cart = [
    { name: "Shirt", price: 320, quantity: 5 },
    { name: "Pant", price: 30, quantity: 5 },
]

function updateQuantity(cart, itemName, quantity) {
    let item = cart.find(item => item.name === itemName)

    if (item) {
        item.quantity = quantity
    } else {
        cart.push({ name: itemName, price: 0, quantity })
    }
}

updateQuantity(cart, "Shirt", 8)
updateQuantity(cart, "Jacket", 8)
console.log(cart)