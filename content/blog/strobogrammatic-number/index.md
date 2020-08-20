---
title: "Strobogrammatic Number"
date: "2020-08-20T16:43:51.354Z"
category: "google"
description: "Write a function to determine if a number is strobogrammatic."
emoji: "😄"
---

## Strobogrammatic Number

A strobogrammatic number is a number that looks the same when **rotated 180 degrees** (looked at upside down).

Write a function to determine if a number is strobogrammatic. The number is represented as a string.

For example, the numbers `"69"`, `"88"`, and `"818"` are all strobogrammatic.

```cpp
class Solution {
public:
    bool isStrobogrammatic(string s) {
        int n = s.size();

        unordered_map <char, char> match = {
            {'0', '0'},
            {'1', '1'},
            {'8', '8'},
            {'6', '9'},
            {'9', '6'}
        }

        int start = 0, end = n-1;

        while(start <= end) {
            if(match(s[start]) != s[end])
                return false;

            start++;
            end--;
        }

        return true;
    }
}
```