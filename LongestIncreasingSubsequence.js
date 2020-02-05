
// const lengthOfLIS = (nums) => {
//     if (nums.length <= 1)
//         return nums.length;

//     let array = new Array(nums.length).fill(1);

//     for (let i = 1; i < nums.length; i++)
//     {
//         for (let j = 0; j < i; j++)
//         {
//             if (nums[j] < nums[i]) {
//                 if (array[j] + 1 > array[i]) {
//                     array[i] = array[j] + 1;
//                 }
//             }
//         }
//     }
//     return Math.max(...array);
// }


let sequenceMax;
const lengthOfLIS = (nums) => {
    sequenceMax = 1;
    LISHelper(nums, nums.length - 1)
    return sequenceMax
}


const LISHelper = (nums, index) => {

    if (index == 0)
        return 1;

    let max = 1;
    for (let i = 0; i < index; i++) {

        let possibleMax = LISHelper(nums, i);
        if (nums[index] <= nums[i]) {
            continue;
        }
        if (++possibleMax > max) {
            max = possibleMax;
        }
    }
    if (max > sequenceMax)
        sequenceMax = max
    return max;
}

console.log(lengthOfLIS(
    [1, 3, 6, 7, 9, 4, 10, 5, 6]
))