---
title: XOR Queries of a Subarray
category: ["array", "bits"]
date: "2020-08-22T15:42:19.997Z"
description: "Given the array arr of positive integers and the array queries where queries[i] = [Li, Ri], for each query i compute the XOR of elements from Li to Ri (that is, arr[Li] xor arr[Li+1] xor ... xor arr[Ri] ). Return an array containing the result for the given queries."
difficulty: "medium"
emoji: "🧐"
---

## [XOR Queries of a Subarray](https://leetcode.com/problems/xor-queries-of-a-subarray/)

Given the array `arr` of positive integers and the array `queries` where 
`queries[i] = [Li, Ri]`, for each query `i` compute the **XOR** of elements from `Li` to `Ri` (that is, `arr[Li] xor arr[Li+1] xor ... xor arr[Ri]` ). Return an array containing the result for the given `queries`.

Example:

**Input**: arr = `[1,3,4,8]`, queries = `[[0,1],[1,2],[0,3],[3,3]]`  
**Output**: `[2,7,14,8]`  
**Explanation**:

```
The binary representation of the elements in the array are:
1 = 0001 
3 = 0011 
4 = 0100 
8 = 1000 
The XOR values for queries are:
[0,1] = 1 xor 3 = 2 
[1,2] = 3 xor 4 = 7 
[0,3] = 1 xor 3 xor 4 xor 8 = 14 
[3,3] = 8
```

Example 2:

**Input**: arr = `[4,8,2,10]`, queries = `[[2,3],[1,3],[0,0],[0,3]]`  
**Output**: `[8,0,4,4]`

**Constraints**:

1. `1 <= arr.length <= 3 * 10^4`
2. `1 <= arr[i] <= 10^9`
3. `1 <= queries.length <= 3 * 10^4`
4. `queries[i].length == 2`
5. `0 <= queries[i][0] <= queries[i][1] < arr.length`

## C++

```cpp{numberLines: true}
class Solution {
public:
    // Utility function for preprocessing array XORs
    vector<int> preprocess(vector<int> arr) {
        // preprocess[i] = arr[0]^arr[1]^arr[2]...^arr[i]
        for(int i=1; i<arr.size(); i++)
            arr[i] ^= arr[i-1];
        
        return arr;
    }
    
    vector<int> xorQueries(vector<int>& arr, vector<vector<int>>& queries) {
        // Number of elements in the array
        int n = arr.size();
        
        // Preprocess XORs of all array elements
        vector<int> prefix = preprocess(arr);
        vector<int> answers;
        
        int left, right;
        for(auto query: queries) {
            int left = query[0];
            int right = query[1];
            
            // prefix[right] = arr[0]^arr[1]...^arr[right]
            if(left == 0)
                answers.push_back(prefix[right]);
            else
                // we use a property of XOR: A^B^A = B to remove
                // computed XORs that are not in the range
                answers.push_back(prefix[right]^prefix[left-1]);
        }
        
        return answers;
    }
};
```

