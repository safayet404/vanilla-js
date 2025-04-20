const arr = [2,5,20,3,1,3,5,10]

let max = arr[0]

for(let i=0; i<arr.length; i++)
{
    if(arr[i] > max)
    {
        max = arr[i]
    }
}

console.log(max)