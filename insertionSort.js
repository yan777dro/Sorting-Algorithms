//Time Complexity O(n^2)

/**Although Insertion sort runs on quadratic time, it usually outperforms 
Quick Sort, Merge Sort and other advanced sorting algorithms when sorting nearly sorted
arrays **/

function InsertionSort(arr){
    let len = arr.length;

    for(let i =0; i < len; i++){
        let key = arr[i];
        let j = i - 1;

        while(j >=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j - 1;


        }
        arr[j+1] = key;
    }

    return arr;

}



const arr = [20, 15, 18, 19, 7, 1, 2, 4, 8, 30, 22, -5, -7, 14];

console.log(InsertionSort(arr));

//[-7, -5, 1, 2, 4, 7, 8, 14, 15, 18, 19, 20, 22, 30]