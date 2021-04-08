//Time Complexity: Merge Sort runs at O(n log n) at both best and worst case scenarios.

/**Merge Sort is always a logarithmic sorting algorithm; dividing the array in two
halves* and takes linear time to merge the two arrays*/

// merging function
function merge(arr1, arr2){
    let result = []; 
    let i = 0; 
    let j = 0;
  
  
  
    while(i < arr1.length && j < arr2.length){

      if(arr1[i] > arr2[j]) {
        result.push(arr2[j]);
        j++;
      } else {
        result.push(arr1[i]);
        i++;
      }
    }
  
    while(i < arr1.length){
      result.push(arr1[i]);
      i++;
    }
  
    while(j < arr2.length){
      result.push(arr2[j]);
      j++;
    }
  
    return result;
  }
  //sorting function
  function mergeSort(arr){

    if(arr.length <= 1) return arr;
  
    let middle = Math.ceil(arr.length / 2);  // this is our middle
  
    let left = mergeSort(arr.splice(0, middle));  // sorting everything from the begining of the array to the middle
  
  
    let right = mergeSort(arr.splice(-middle)); // sorting everything from the middle of the array to the end
  
  
    return merge( left, right);  // merge the sorted array and return the result
  }
  
  const arr = [50, 80, 100, 25, 18, 10, 1, 2, 3, 5, 6 , 12, 15, 22, 90];
  
  console.log(mergeSort(arr));

  //[1, 2, 3, 5, 6, 10, 12, 15, 18, 22, 25, 50, 80, 90, 100]
