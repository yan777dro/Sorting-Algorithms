// Selection Sort
/*our arry is divided into two sublists, the first sublist contains the smallest element on the second sublist 
the numbers are compared and the smallest number is selected
and swapped into the first sorted sublist */

//Time complexity O(n^2)

function SelectionSort(arr){
    let len = arr.length;

    for(let i =0; i < len; i++){
        let min = i;

        for(let j = i+1; j < len; j++){     
            if(arr[j] < arr[min]){
                min = j;
            }

        }
        if(min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;

}

const sortedArr=[50, 45, 1, 2, 10, 5, 3, 11, 20, 8];

console.log(SelectionSort(sortedArr));

//[1, 2, 3, 5, 8, 10, 11, 20, 45, 50]
