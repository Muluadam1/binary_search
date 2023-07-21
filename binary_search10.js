/* Write a JavaScript program to find the closest element to a target value in a sorted array using binary search.*/

function findClosestElement(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let closest = null;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            // If the target value is found in the array, it is the closest element.
            return arr[mid];
        } else if (arr[mid] < target) {
            // Update the closest element to the current element if it is closer to the target.
            closest = arr[mid];
            left = mid + 1; // Move the left pointer to the right half.
        } else {
            // Update the closest element to the current element if it is closer to the target.
            closest = arr[mid];
            right = mid - 1; // Move the right pointer to the left half.
        }
    }

    // At the end of the loop, the left and right pointers have crossed.
    // Check which element is closer to the target among arr[left] and arr[right].
    if (Math.abs(arr[left] - target) < Math.abs(arr[right] - target)) {
        return arr[left];
    } else {
        return arr[right];
    }
}

function main() {
    let sortedArray = [2, 4, 6, 8, 10];
    let targetValue = 7;
    console.log(findClosestElement(sortedArray, targetValue));

    let targetValue2 = 5;
    console.log(findClosestElement(sortedArray, targetValue2));
}
main();