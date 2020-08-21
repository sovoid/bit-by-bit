---
title: Count and Say
category: ["adobe"]
date: "2020-08-20T16:51:51.354Z"
emoji: "😄"
description: "Given an integer _n_ where _1 ≤ n ≤ 30_, generate the *n*th term of the count-and-say sequence."
difficulty: "easy"
---

## [Count and Say](https://leetcode.com/problems/count-and-say/)

The count-and-say sequence is the sequence of integers with the first five terms as following:

```
1.       1
2.       11
3.       21
4.       1211
5.       111221
```

`1` is read off as `"one 1"` or `11`.  
`11` is read off as `"two 1s"` or `21`.  
`21` is read off as `"one 2`, then `one 1"` or `1211`.

Given an integer _n_ where _1 ≤ n ≤ 30_, generate the *n*th term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

**Input**: `1`  
**Output**: `"1"`  
**Explanation**: This is the base case.

Example 2:

**Input**: `4`  
**Output**: `"1211"`  
**Explanation**: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".

## C++

```cpp{numberLines: true}
class Solution {
public:
    string countAndSay(int n) {

        // Base case
        if(n == 0)
            return "";

        // First row
        string res = "1";

        while(n > 1) {
            string row = "";

            int m = res.size();

            // Iterate over previous row
            for(int i = 0; i < m; i++) {
                int count = 1;

                // Count the number of repeated characters
                while(i + 1 < m && res[i] == res[i+1]) {
                    count++;
                    i++;
                }

                // Print count first and then the character
                row += to_string(count) + res[i];
            }

            // Make `res` as the current row
            res = row;
            n--;
        }

        return res;
    }
};
```
