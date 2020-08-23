---
title: 3Sum Closest
category: ["array", "google"]
date: "2020-08-23T07:08:01.851Z"
description: "Find three integers in nums such that the sum is closest to target."
difficulty: "medium"
emoji: "🧐"
---

## [3Sum Closest](https://leetcode.com/problems/3sum-closest/)

Given an array `nums` of *n* integers and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 

Example 1:

**Input**: nums = `[-1,2,1,-4]`, target = 1  
**Output**: 2  
**Explanation**: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

**Constraints**:

1. `3 <= nums.length <= 10^3`
2. `-10^3 <= nums[i] <= 10^3`
3. `-10^4 <= target <= 10^4`

## CPP

```cpp{numberLines: true}
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        int n = nums.size();

        // This makes finding the closest sum easier
        sort(nums.begin(), nums.end());
        
        // Minimum difference will decide as to when 
        // closest sum should be updated
        int closest, minDiff;
        closest = minDiff = INT32_MAX;
        
        for(int i=0; i<n-2; i++) {

            // Use two pointer trick
            int j = i+1;
            int k = n-1;
            
            while(j < k) {
                int currSum = nums[i]+nums[j]+nums[k];
                
                // If current difference is the least 
                // seen so far, update `closest` and `minDiff`
                if(abs(target-currSum) < minDiff) {
                    minDiff = abs(target-currSum);
                    closest = currSum;
                }
                
                // If current difference is 0, no need
                // to look any further so immediately 
                // return
                if(minDiff == 0)
                    return currSum;
                
                // If current sum is less than target,
                // to bring it to target, we need to 
                // move the front pointer else move the
                // rear pointer
                if(currSum < target)
                    j++;
                else
                    k--;
            }
        } 
        
        return closest;
    }
};
```