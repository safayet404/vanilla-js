

function reverse(num) {
    let result = 0
    let isNegative = num < 0
    num = Math.abs(num)

    while (num > 0) {
        let lastDigit = num % 10
        result = result * 10 + lastDigit

        num = Math.floor(num / 10)
    }

    return isNegative ? -result : result
}

console.log(reverse(1234))
console.log(reverse(-44212))