/* Create a JavaScript program to determine if a given element is present in a rotated sorted array using binary search. */

function searchInRotatedSortedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return true;
        }

        // Check if left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        // Check if right half is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
}

function main() {
    let rotatedArray = [4, 5, 6, 7, 0, 1, 2];
    let targetElement = 9;
    let isElementPresent = searchInRotatedSortedArray(rotatedArray, targetElement);
    console.log(`Is the element present in the rotated sorted array? ${isElementPresent}`);
}
main();