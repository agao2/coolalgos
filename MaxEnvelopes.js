
const maxEnvelopes = (envelopes) => {

    if (envelopes.length === 0)
        return 0

    cache = new Array(envelopes.length).fill(false)
    envelopes.sort((a, b) => {
        let w = b[0] - a[0]
        let h = b[1] - a[1]
        return (w === 0 ? h : w)
    })

    let decreasingSequences = [];
    for (let i = 0; i < envelopes.length; i++) {
        decreasingSequences.push(LDS(envelopes, i))
    }
    return Math.max(...decreasingSequences)
}

let cache;

const LDS = (envelopes, index) => {
    let max = 1;
    for (let i = 0; i < index; i++) {
        if (envelopes[index][1] < envelopes[i][1] && envelopes[index][0] < envelopes[i][0]) {
            let possibleMax = cache[i] ? cache[i] : LDS(envelopes, i)
            max = Math.max(max, possibleMax + 1)
        }
    }
    cache[index] = max
    return max
}
/**
 * sort envelopes by width and then height
 * iterate through, get the longest decreasing subsequence for element ending at envelopes[i]
 * get the max of those lengths
 * 
 * 
 * LDS(I) =  1 max{ L(j) } for all j = 0 : I, given envelopes[I][2] < envelopes[j][2]
 */
console.log(maxEnvelopes(
    [[4, 5], [4, 6], [6, 7], [2, 3], [1, 1]]))