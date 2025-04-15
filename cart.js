const cart = [
    { name: "Shirt", price: 320, quantity: 5 },
    { name: "Pant", price: 30, quantity: 5 },
]


function calculateTotal(cart) {
    return cart.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)
}

console.log(calculateTotal(cart))
