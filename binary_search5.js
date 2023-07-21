/* Implement a JavaScript function to find the count of occurrences of a target element in a sorted array using binary search.*/

function binarySearchCountOccurrences(array, target) {
    let firstOccurrence = findFirstOccurrence(array, target);
    if (firstOccurrence === -1) {
        return 0; // Target not found, so count is 0
    }

    let lastOccurrence = findLastOccurrence(array, target);
    return lastOccurrence - firstOccurrence + 1;
}

function findFirstOccurrence(array, target) {
    let low = 0;
    let high = array.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === target) {
            result = mid; // Update result, but continue searching on the left side
            high = mid - 1;
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}

function findLastOccurrence(array, target) {
    let low = 0;
    let high = array.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === target) {
            result = mid; // Update result, but continue searching on the right side
            low = mid + 1;
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}

function main() {
    let array = [1, 3, 5, 5, 5, 7, 9, 11, 11, 13, 15];
    let target = 5;
    let count = binarySearchCountOccurrences(array, target);
    console.log(count);
}
main();