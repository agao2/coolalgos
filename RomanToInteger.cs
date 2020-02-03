// public class Solution
// {

//     public int RomanToInt(string s)
//     {
//         var values = new Dictionary<char, int> {
//             {'I',1},
//             {'V',5},
//             {'X',10},
//             {'L',50},
//             {'C',100},
//             {'D',500},
//             {'M',1000},
//         };

//         int num = 0;
//         for (int i = 0; i < s.Length; i++)
//         {
//             if (i == s.Length - 1)
//             {
//                 num += values[s[i]];
//                 continue;
//             }

//             int value = values[s[i]];
//             int nextValue = values[s[i + 1]];

//             if (value < nextValue)
//             {
//                 value = value * -1;
//             }
//             num += value;
//         }
//         return num;
//     }
// }