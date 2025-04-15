const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function pagination(array, page, perPage) {
    let start = (page - 1) * perPage

    return array.slice(start, start + perPage)
}

console.log(pagination(array, 2, 4))
