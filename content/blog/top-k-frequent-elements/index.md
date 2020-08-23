---
title: "Top K Frequent Elements"
category: ["heap"]
date: "2020-08-23T11:23:21.982Z"
description: "Given a non-empty array of integers, return the k most frequent elements."
difficulty: "medium"
emoji: "🧐"
---

## [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

Given a non-empty array of integers, return the **k** most frequent elements.

Example 1:

**Input**: nums = `[1,1,1,2,2,3]`, k = 2  
**Output**: `[1,2]`

Example 2:

**Input**: nums = `[1]`, k = 1  
**Output**: `[1]`

**Note**:

1. You may assume k is always valid, 1 ≤ _k_ ≤ number of unique elements.
2. Your algorithm's time complexity **must be** better than O(_n log n_), where _n_ is the array's size.
3. It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
4. You can return the answer in any order.

```cpp{numberLines: true}
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {

        // Map to store element and their frequencies
        unordered_map<int, int> counts;

        for(auto num: nums)
            counts[num]++;

        // Heap that sorts first based on frequency and 
        // then based on element
        set<pair<int, int>> countHeap;

        // Populate the heap
        for(auto item: counts)
            countHeap.insert({ item.second, item.first });

        vector<int> result;

        // Iterate over the heap from the back
        for(auto it = countHeap.rbegin(); it != countHeap.rend() && k > 0; it++, k--) {
            result.push_back(it->second);
        }

        return result;
    }
};
```
