const cart = [
    { name: "Shirt", price: 320, quantity: 5 },
    { name: "Pant", price: 30, quantity: 5 },
]

function discountApply(cart) {
    return cart.map(item => {
        if (item.quantity > 2) {
            return { ...item, price: item.price * 0.9 }
        }

        return item
    })
}

console.log(discountApply(cart))