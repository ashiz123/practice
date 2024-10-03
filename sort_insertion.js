let arr = [21, 32, 45, 23, 12, 10, 15]
let n = arr.length

function sortInsertion(arr, n){
 for(let i = 0; i<= n-1; i++)
 {
    let j= i;
    while(j>0 && arr[j-1] > arr[j]){
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp
        
        j--;
    }
 }

 console.log(arr);


}

sortInsertion(arr, n);
