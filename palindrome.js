const str = "hello"

let reversed = ''

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
}

console.log(reversed)

if (str === reversed) {
    console.log("palindrome")
} else {
    console.log("not palindrome")
}