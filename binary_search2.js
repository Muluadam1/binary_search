/* Implement a JavaScript program to search for a specific value in a sorted array using the binary search 
algorithm and return true if found, false otherwise.*/

function binarySearch(array, target) {
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === target) {
            return true;
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}

function main() {
    const array = [1, 3, 5, 7, 9, 11, 13, 15];
    const target = 11;
    const found = binarySearch(array, target);
    console.log(found);
}
main();