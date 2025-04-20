const  arr = [2,5,20,3,1,3,5,-6,0,10]

let min = arr[0]

for(let i=0; i<arr.length; i++)
{
    if(min > arr[i])
    {
        min = arr[i]
    }
}


console.log(min)