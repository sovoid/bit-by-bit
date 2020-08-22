---
title: Word Subsets
category: ["string"]
date: "2020-08-22T16:09:59.615Z"
description: "Return a list of all universal words"
difficulty: "medium"
emoji: "🧐"
---

## [Word Subsets](https://leetcode.com/problems/word-subsets/)

We are given two arrays `A` and `B` of words. Each word is a string of lowercase letters.

Now, say that word `b` is a subset of word `a` if every letter in `b` occurs in `a`, including **multiplicity**.  For example, `"wrr"` is a subset of `"warrior"`, but is not a subset of `"world"`.

Now say a word `a` from `A` is universal if for every `b` in `B`, `b` is a subset of `a`. 

Return a list of all universal words in `A`.  You can return the words in any order.

Example 1:

**Input**: A = `["amazon","apple","facebook","google","leetcode"]`, B = `["e","o"]`  
**Output**: `["facebook","google","leetcode"]`

Example 2:

**Input**: A = `["amazon","apple","facebook","google","leetcode"]`, B = `["l","e"]`  
**Output**: `["apple","google","leetcode"]`

Example 3:

**Input**: A = `["amazon","apple","facebook","google","leetcode"]`, B = `["e","oo"]`  
**Output**: `["facebook","google"]`

Example 4:

**Input**: A = `["amazon","apple","facebook","google","leetcode"]`, B = `["lo","eo"]`  
**Output**: `["google","leetcode"]`

**Note**:

1. `1 <= A.length, B.length <= 10000`
2. `1 <= A[i].length, B[i].length <= 10`
3. `A[i]` and `B[i]` consist only of lowercase letters.
4. All words in `A[i]` are unique: there isn't `i != j` with `A[i] == A[j]`.

```cpp{numberLines: true}
class Solution {
public:
    vector<string> wordSubsets(vector<string>& A, vector<string>& B) {
        int bCount[26] = {0};
        
        for (auto word : B) {
            int wordCount[26] = {0};
            
            for (auto ch : word)
                ++wordCount[ch - 'a'];

            for (int i = 0; i < 26; ++i)
                bCount[i] = max(bCount[i], wordCount[i]);

        }
        
        vector<string> universal;
        
        for (auto word : A) {
            int count[26] = {0};
            
            for (auto ch : word)
                ++count[ch - 'a'];
            
            bool isUniversal = true;
            
            for (int i=0; i < 26; ++i) {
                if(count[i] < bCount[i]) {
                    isUniversal = false;
                    break;
                }
            }
            
            if (isUniversal)
                universal.push_back(word);

        }
        
        return universal;
    }
};
```