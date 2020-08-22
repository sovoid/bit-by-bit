---
title: Fruit into Baskets
date: 2020-08-22T05:44:32.594Z
emoji: "🧐"
difficulty: "medium"
category: ["array", "google"]
description: "What is the total amount of fruit you can collect?"

## [Fruit into Baskets](https://leetcode.com/problems/fruit-into-baskets/)

In a row of trees, the `i`-th fruit produces fruit of type `tree[i]`

You can start at any tree of your choice, then repeatedly perform the following steps:

1. Add one piece of fruit from this tree to your baskets. If you cannot, stop.
2. Move to the next tree to the right of the current tree. If there is no tree to the right, stop.

Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

What is the total amount of fruit you can collect with this procedure?

Example 1:

**Input**: `[1,2,1]`  
**Output**: `3`  
**Explanation**: We can collect `[1,2,1]`.

Example 2:

**Input**: `[0,1,2,2]`  
**Output**: `3`  
**Explanation**: We can collect `[1,2,2]`.  
If we started at the first tree, we would only collect `[0, 1]`.

Example 3:

**Input**: `[1,2,3,2,2]`  
**Output**: `4`  
**Explanation**: We can collect `[2,3,2,2]`.  
If we started at the first tree, we would only collect `[1, 2]`.

Example 4:

**Input**: `[3,3,3,1,2,1,1,2,3,3,4]`  
**Output**: `5`  
**Explanation**: We can collect `[1,2,1,1,2]`.  
If we started at the first tree or the eighth tree, we would only collect 4 fruits.

**Note**:

1. `1 <= tree.length <= 40000`
2. `0 <= tree[i] < tree.length`

```cpp{numberLines: true}
class Solution {
public:
    int totalFruit(vector<int>& tree) {
        // Map to store fruit type and count
        unordered_map<int, int> fruitCounts;
        
        // Add first fruit to a basket
        int start = 0, end = 0;
        fruitCounts[tree[start]]++;
        int total = 1;
        
        for(int i = 1; i<tree.size(); i++) {
            int type = tree[i];
            
            fruitCounts[type]++;
            
            // We need only two fruits of different types so remove
            // the elements from the start
            while(fruitCounts.size() > 2) {
                fruitCounts[tree[start]]--;
                
                // If count becomes 0, remove this fruit type
                if(fruitCounts[tree[start]] == 0)
                    fruitCounts.erase(tree[start]);
                
                start++;
            }
            
            // Update total for this subarray
            total = max(total, i-start+1);
            
        }
        
        return total;
    }
};
```