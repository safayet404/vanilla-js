const arr = [1, 3, 5, 7, 10, 12];

let target = 20
let found = false

for(let i=0; i<arr.length; i++)
{
    if(arr[i] === target)
    {
        console.log("Target founded");
        found = true
        break
        
    }
}

if(!found)
{
    console.log("item is not availabe in array");
    
}