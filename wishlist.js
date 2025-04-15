const wishlist = ["Jacket", "Trouser"]

function addToWishlist(wishlist, item) {
    if (!wishlist.includes(item)) {
        wishlist.push(item)
    }
}

function removeFromWishlist(item) {
    const index = wishlist.indexOf(item)
    if (index !== -1) {
        wishlist.splice(index, 1)
    }
}

addToWishlist(wishlist, "Pant")
removeFromWishlist("Trouser")
console.log(wishlist)
