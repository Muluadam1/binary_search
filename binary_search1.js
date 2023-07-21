/* Write a JavaScript function to perform a binary search on a sorted array and return the index of a target element.*/

function binarySearch(array, target) {
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

function main() {
    const array = [11, 17, 23, 29, 33, 37, 41, 45];
    const target = 23;
    const index = binarySearch(array, target);
    console.log(index);
}
main();