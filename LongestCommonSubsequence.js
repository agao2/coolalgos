

// Dynamic programming! O(n^2) time complexity
const longestCommonSubsequence = (text1, text2) => {
    let matrix = [];
    for (let i = 0; i < text1.length; i++) {
        matrix.push(new Array(text2.length).fill(0))
    }

    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] === text2[j]) {
                matrix[i][j] = (i === 0 || j === 0) ? 1 : (matrix[i - 1][j - 1] + 1)
            } else {
                let length1 = (i === 0) ? 0 : (matrix[i - 1][j])
                let length2 = (j === 0) ? 0 : (matrix[i][j - 1])
                matrix[i][j] = Math.max(length1, length2);
            }
        }
    }
    return matrix[text1.length - 1][text2.length - 1];
}


// Below is pure recursion approach, O(2^n) time complexity
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


