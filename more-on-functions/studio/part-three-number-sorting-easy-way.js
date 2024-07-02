//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
// console.log(nums1.sort(function(a, b){return a-b}));   // Javascript's inbuilt function for sorting.

function findMinValue(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }

function sortedAscArray(arr){              // Sorts array in ascending order
    let newArr = [];
    let j=0, k = arr.length;
  
    while(j < k){
      newArr.push(findMinValue(arr));
      arr.splice(arr.indexOf(findMinValue(arr)), 1)
      j++;
    }
    return newArr;
  }



//Sort each array in descending order.

function findMaxValue(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > max){
        max = arr[i];
      }
    }
    return max;
  }

function sortedDescArray(arr){              // Sorts array in descending order
    let newArr = [];
    let j=0, k = arr.length;
  
    while(j < k){

        newArr.push(findMaxValue(arr));
        arr.splice(arr.indexOf(findMaxValue(arr)), 1)
        
        j++;
    }
    return newArr
  }

  console.log("Original Array ", nums1)
  console.log("Sorted in Ascending order ", sortedAscArray(nums1), "\n")

  console.log("Original Array ", nums2)
  console.log("Sorted in Descending order ", sortedDescArray(nums2))








