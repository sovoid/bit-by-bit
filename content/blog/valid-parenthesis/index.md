---
title: Valid Parenthesis
date: "2020-08-20T18:04:52.786Z"
emoji: "😄"
category: ["google"]
description: "Given a string containing just the characters `'('`,` ')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid."
difficulty: "easy"
---

## [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

Given a string containing just the characters `'('`,`')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

**Input**: `"()"`  
**Output**: `true`

Example 2:

**Input**: `"()[]{}"`  
**Output**: `true`

Example 3:

**Input**: `"(]"`  
**Output**: `false`

Example 4:

**Input**: `"([)]"`  
**Output**: `false`

Example 5:

**Input**: `"{[]}"`  
**Output**: `true`

## C++

```cpp{numberLines: true}
class Solution {
public:
    bool isValid(string s) {

        // Map storing valid parenthesis matches
        unordered_map<char, char> match = {
            {')', '('},
            {'}', '{'},
            {']', '['}
        };

        stack<char> st;

        for(auto ch: s) {
            // Push all parenthesis start to the stack
            if(ch == '(' || ch == '{' || ch == '[')
                st.push(ch);

            if(match.find(ch) != match.end()) {
                // If closing parenthesis are imbalanced
                if(st.empty() || match[ch] != st.top())
                    return false;
                else
                    st.pop();
            }
        }

        // If starting parenthesis are imbalanced
        return st.empty();
    }
};
```
