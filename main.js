/*
create a function with the name insertionSort.
create a for loop, loop through all elements of the array starting from index 1 (i=1)
let j represent the index of the last element in the sorted sequence.
while j >= 0 and arr[j] > arr[j+1]
initialise a variable that holds the index of the arr length.
while j >= 0 and arr[j] > currentVar loop through all elements of the array starting from the back
shift elements to the right to make space for the currentVar element
sorted sequence = currentVar





*/
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1; // second counter
    const currentVar = arr[i];
    while (j >= 0 && arr[j] > currentVar) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVar;
  }
  return arr;
}

const myArray = [3, 6, 2, 1, 8, 4];
console.log(insertionSort(myArray)); // [1, 2, 3, 4, 6, 8]
