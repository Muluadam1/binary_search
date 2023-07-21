function binarySearchLastOccurrence(array, target) {
    let low = 0;
    let high = array.length - 1;
    let index = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === target) {
            index = mid;
            low = mid + 1; // We need to search the right half of the array to find the last occurrence.
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
    const index = binarySearchLastOccurrence(array, target);
    console.log(index);
}
main();