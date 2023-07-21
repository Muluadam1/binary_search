/* Create a JavaScript function to find the first occurrence of 
a target element in a sorted array using binary search and return its index.*/

function binarySearchFirstOccurrence(array, target) {
    let low = 0;
    let high = array.length - 1;
    let index = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === target) {
            index = mid;
            high = mid - 1; // We need to search the left half of the array to find the first occurrence.
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return index;
}

function main() {
    const array = [1, 3, 5, 5, 5, 7, 9, 11, 11, 13, 15];
    const target = 5;
    const index = binarySearchFirstOccurrence(array, target);
    console.log(index);
}
main();