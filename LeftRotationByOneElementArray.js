// Left Rotate an array by one element 

function leftRotateByOne (arr){
    let copy = arr[0]
    for(let i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = copy;
    return arr;
}

let arr = [1,2,3,4,5]
console.log(leftRotateByOne(arr));



