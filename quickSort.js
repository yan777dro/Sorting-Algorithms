//Time Complexity O(n log n), worst case scenario O(n^2)

//swap helper function

function Swap(arr, i, j){
    let swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;

    return swap;

}




//pivot helper function
// the first element will be our pivot
function Pivot(arr, start = 0, end = 0){
    let pivot = arr[start];
    let swapIndex = start;


    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++;

            Swap(arr, swapIndex, i);

        }

    }

    Swap(arr, start, swapIndex);
    return swapIndex;

}




// sorting and returning the result

function quickSort(arr, left = 0, right = arr.length - 1){

    if(left < right){

        let pivotIndex = Pivot(arr, left, right);

        quickSort(arr,left, pivotIndex - 1); //sorting everything left of the pivot
        
        quickSort(arr, pivotIndex + 1, right);// sorting everything right of the pivot

    }

    return arr;

}



const arr = [30, 20, 19, 15, 14, 1, 2, 3, -5, -10];

console.log(quickSort(arr));

//[-10, -5, 1, 2, 3, 14, 15, 19, 20, 30]
