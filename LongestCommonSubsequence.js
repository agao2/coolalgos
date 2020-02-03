


const longestCommonSubsequence = (text1, text2) => {
    let matrix = [];
    for (let i = 0; i < text1.length; i++) {
        matrix.push(new Array(text2.length).fill(0))
    }
    
}






// Below is pure recursion approach, O(2^n)
const longestCommonSubsequenceRecur = (text1, text2) => {
    return LCSHelper(text1, text2, 0, 0, 0);
}
const LCSHelper = (str1, str2, index1, index2, length) => {
    if (index1 >= str1.length || index2 >= str2.length) {
        return length;
    }
    if (str1[index1] === str2[index2]) {
        return LCSHelper(str1, str2, ++index1, ++index2, ++length)
    }

    let length1 = LCSHelper(str1, str2, index1 + 1, index2, length)
    let length2 = LCSHelper(str1, str2, index1, index2 + 1, length)
    return Math.max(length1, length2)
}


