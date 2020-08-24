---
title: Generate Parentheses
category: ["backtracking", "string"]
date: "2020-08-23T20:42:45.438Z"
emoji: "🧐"
description: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses."
difficulty: "medium"
---

## [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)

Given *n* pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given *n* = 3, a solution set is:

```
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

## C++

```cpp{numberLines: true}
class Solution {
public:
    void DP(vector<string>& combinations, string curr, int numOpen, int numClose, int total) {

        // Base case
        if(curr.size() == total*2) {
            combinations.push_back(curr);
            return;
        }
        
        // If we have more pairs, continue generating combinations
        if(numOpen < total)
            DP(combinations, curr+"(", numOpen+1, numClose, total);
        
        // If we have more open pairs, continue adding closed pairs
        if(numClose < numOpen)
            DP(combinations, curr+")", numOpen, numClose+1, total);
    }
    
    vector<string> generateParenthesis(int n) {
        // Vector to store all combinations
        vector<string> combinations;

        // Generate all combinations using 
        // Backtracking
        DP(combinations, "", 0, 0, n);
        return combinations;
    }
};
```
