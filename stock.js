const stock = {
    laptop: 50,
    mouse: 20
}

const order = [
    { product: "laptop", quantity: 3 },
    { product: "mouse", quantity: 3 },
    { product: "keyboard", quantity: 3 },
]

function validate(stock, order) {
    for (let item of order) {
        if (!stock[item.product] || stock[item.product] < item.quantity) {
            return `${item.product} is out of stock`
        }
    }

    return "All Items in stock"
}

console.log(validate(stock, order))