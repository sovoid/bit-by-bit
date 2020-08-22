---
title: 3sum
category: ["adobe", "array"]
date: "2020-08-20T16:50:51.354Z"
description: "Find all unique triplets in the array which gives the sum of zero."
emoji: "🧐"
difficulty: "medium"
---

## [3Sum](https://leetcode.com/problems/3sum/)

Given an array `nums` of n integers, are there elements _a, b, c_ in `nums` such that _a + b + c_ = 0? Find all unique triplets in the array which gives the sum of zero.

**Note**:

The solution set must not contain duplicate triplets.

Example:

Given array nums = `[-1, 0, 1, 2, -1, -4]`,  
A solution set is:

```
[
 [-1, 0, 1],
 [-1, -1, 2]
]
```

## C++

```cpp{numberLines: true}
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {

        vector<vector<int>> triplets;
        int n = nums.size();

        // Sorting makes it easy to handle repitition
        sort(nums.begin(), nums.end());

        for(int i=0; i<n-2; i++) {
            // Never let i refer to the same value twice to avoid duplicates.
            if(i != 0 && nums[i] == nums[i-1])
                continue;

            int j = i+1, k = n-1;
            while(j < k) {
                if(nums[j] + nums[k] == -nums[i]) {
                    triplets.push_back({
                        nums[i],
                        nums[j],
                        nums[k]
                    });

                    j++;
                    k--;

                    // // Never let j refer to the same value twice to avoid duplicates.
                    while(j < k && nums[j] == nums[j-1])
                        j++;
                } else if(nums[j] + nums[k] < -nums[i])
                    j++;
                else
                    k--;
            }
        }

        return triplets;
    }
};
```
