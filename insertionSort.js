//Time Complexity O(n^2)

/**Although Insertion sort runs on quadratic time, it usually outperforms 
Quick Sort, Merge Sort and other advanced sorting algorithms when sorting nearly sorted
arrays **/

function InsertionSort(arr){
   let len = arr.length;

   for(let i =0; i < len; i++){

       for(let j = i; j > 0; j--){
           if(arr[j] < arr[j-1]){
               let temp = arr[j];
               arr[j] = arr[j-1];
               arr[j-1] = temp;
           } else {
               break;
           }

            //We have to sublists, one sorted and one unsorted. The sorted sublist starts with the first element; then we iterate through the unsorted sublist
           // and swap the elements backwards, the smallest of the two elements compared will be swapped to the front; think of sorting a  hand of cards.
       }
   }
   return arr;

}



const arr = [20, 15, 18, 19, 7, 1, 2, 4, 8, 30, 22, -7, -20, -44];

console.log(InsertionSort(arr));

//[-44, -20, -7, 1, 2, 4, 7, 8, 15, 18, 19, 20, 22, 30]
