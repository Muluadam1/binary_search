/* Implement a JavaScript program to find the median of two sorted arrays using binary search. */

// Helper function to find the median of a single sorted array
function findMedian(arr) {
    let n = arr.length;
    let mid = Math.floor(n / 2);

    if (n % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
}

// Main function to find the median of two sorted arrays using binary search
function findMedianSortedArrays(nums1, nums2) {
    // Ensure that nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;
    let totalLength = m + n;
    let low = 0;
    let high = m;

    while (low <= high) {
        let partitionNums1 = Math.floor((low + high) / 2);
        let partitionNums2 = Math.floor((totalLength + 1) / 2) - partitionNums1;

        let maxLeftNums1 = partitionNums1 === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionNums1 - 1];
        let minRightNums1 = partitionNums1 === m ? Number.POSITIVE_INFINITY : nums1[partitionNums1];

        let maxLeftNums2 = partitionNums2 === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionNums2 - 1];
        let minRightNums2 = partitionNums2 === n ? Number.POSITIVE_INFINITY : nums2[partitionNums2];

        if (maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1) {
            // Found the correct partition, calculate median based on even/odd total length
            let maxLeft = Math.max(maxLeftNums1, maxLeftNums2);
            let minRight = Math.min(minRightNums1, minRightNums2);

            if (totalLength % 2 === 0) {
                return (maxLeft + minRight) / 2;
            } else {
                return maxLeft;
            }
        } else if (maxLeftNums1 > minRightNums2) {
            // Move partitionNums1 to the left to decrease median
            high = partitionNums1 - 1;
        } else {
            // Move partitionNums1 to the right to increase median
            low = partitionNums1 + 1;
        }
    }
}

function main() {
    let nums1 = [3, 5];
    let nums2 = [4];
    console.log(findMedianSortedArrays(nums1, nums2));

    let nums3 = [3, 4];
    let nums4 = [5, 6];
    console.log(findMedianSortedArrays(nums3, nums4));
}
main();