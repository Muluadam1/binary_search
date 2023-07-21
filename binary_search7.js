/* Write a JavaScript function to find the smallest element in a rotated sorted array using binary search. */

function findSmallestNegativeElement(nums) {
    let smallestNegative = null;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && (smallestNegative === null || nums[i] < smallestNegative)) {
            smallestNegative = nums[i];
        }
    }

    return smallestNegative;
}

function main() {
    let rotatedArray = [-13, -1, -7, 1, -19, -6, 2, -2];
    let smallestNegativeElement = findSmallestNegativeElement(rotatedArray);
    console.log(`The smallest negative element in the rotated sorted array is: ${smallestNegativeElement}`);
}
main();