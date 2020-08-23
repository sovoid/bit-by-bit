---
title: Add One Row to Tree
category: ["tree"]
date: "2020-08-23T20:42:45.438Z"
emoji: "🧐"
description: "Given the root of a binary tree, then value v and depth d, you need to add a row of nodes with value v at the given depth d. The root node is at depth 1."
difficulty: "medium"
---

## [Add One Row to Tree](https://leetcode.com/problems/add-one-row-to-tree/)

Given the root of a binary tree, then value `v` and depth `d`, you need to add a row of nodes with value `v` at the given depth `d`. The root node is at depth 1.

The adding rule is: given a positive integer depth `d`, for each NOT null tree nodes `N` in depth `d-1`, create two tree nodes with value `v` as `N's` left subtree root and right subtree root. And `N's` **original left subtree** should be the left subtree of the new left subtree root, its **original right subtree** should be the right subtree of the new right subtree root. If depth `d` is 1 that means there is no depth `d-1` at all, then create a tree node with value `v` as the new root of the whole original tree, and the original tree is the new root's left subtree.

Example 1:

**Input**: v = 1, d = 2

```
A binary tree as following:
       4
     /   \
    2     6
   / \   / 
  3   1 5   
```

**Output**:

```
       4
      / \
     1   1
    /     \
   2       6
  / \     / 
 3   1   5   
```

**Note**:

1. The given d is in range [1, maximum depth of the given tree + 1].
2. The given binary tree has at least one tree node.

## C++

```cpp{numberLines: true}
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* addOneRow(TreeNode* root, int v, int d) {

        // Base case
        if(d == 1) {
            TreeNode* newNode = new TreeNode(v, root, nullptr);
            return newNode;
        }
        
        // Create a queue for BFS
        queue<pair<TreeNode*, int>> bfs;

        // Push root to BFS queue
        bfs.push({ root, 1 });
        
        // We only need to perform BFS till depth d-1
        while(!bfs.empty()) {
            auto [curr, depth] = bfs.front();
            bfs.pop();
            
            // If current depth = d-1, insert new row
            if(depth == d-1) {

                // Create two child nodes for new row
                TreeNode* newLeft = new TreeNode(v, curr->left, nullptr);
                TreeNode* newRight = new TreeNode(v, nullptr, curr->right);
                
                // Insert new child nodes for new row
                curr->left = newLeft;
                curr->right = newRight;
            } else {
                if(curr->left)
                    bfs.push({ curr->left, depth+1 });
                
                if(curr->right)
                    bfs.push({ curr->right, depth+1 });
            }
        }
        
        return root;
    }
};
```