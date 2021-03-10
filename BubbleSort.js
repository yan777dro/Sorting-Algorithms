//bubble sort
//time complexity O(n^2) 



 function BubbleSort(arr){

    let len = arr.length;
    
    for(let i = 0 ; i < len; i++){
        for(let j = 0; j < len; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;    // if the first element is greater than the second, a swap will occur to place the smaller element first
            }
    
        }
    
    }
    
    return arr;
    
    }
