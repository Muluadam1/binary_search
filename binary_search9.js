/*Create a JavaScript
function to find the peak element in a mountain - like array using binary search.*/

function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[mid + 1]) {
            // We are on the ascending side of the mountain, move right
            left = mid + 1;
        } else {
            // We are on the descending side of the mountain, move left
            right = mid;
        }
    }

    // At the end of the loop, left === right, representing the peak element
    return left;
}

function main() {
    let mountainArray = [1, 3, 5, 4, 2]; // Peak element is 5 at index 2
    console.log(findPeakElement(mountainArray)); // Output: 2
}
main();