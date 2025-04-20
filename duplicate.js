const arr = [2, 1, 4, 5, 6, 88, 1, 2, 3, 4, 5];

const uniqueArray = []
let arrayLength = 0

for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false

    for (let j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
            isDuplicate = true
            break
        }
    }

    if (!isDuplicate) {
        uniqueArray[arrayLength] = arr[i]
        arrayLength++
    }
}

console.log(uniqueArray);
