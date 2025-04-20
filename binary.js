const arr = [1, 3, 5, 7, 10, 12];

let target = 3

let low = 0
let high = arr.length - 1;

while(low <= high)
{
    let mid = Math.floor((low+high)/2)

    if(arr[mid] === target)
    {
        console.log("target found");
        break
        
    }
    else if(arr[mid] < target)
    {
        low = mid + 1
    }
    else
    {
        high = mid -1
    }
}