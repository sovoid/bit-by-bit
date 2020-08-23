---
title: 01 Matrix
date: "2020-08-22T14:53:58.079Z"
emoji: "🧐"
description: "Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell"
difficulty: "medium"
category: ["graph"]
---

## [01 Matrix](https://leetcode.com/problems/01-matrix/)

Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

Example 1:

**Input**: 

```
[[0,0,0],
 [0,1,0],
 [0,0,0]]
```

**Output**:

```
[[0,0,0],
 [0,1,0],
 [0,0,0]]
```

Example 2:

**Input**:

```
[[0,0,0],
 [0,1,0],
 [1,1,1]]
```

**Output**:

```
[[0,0,0],
 [0,1,0],
 [1,2,1]]
```

**Note**:

1. The number of elements of the given matrix will not exceed 10,000.
2. There are at least one 0 in the given matrix.
3. The cells are adjacent in only four directions: up, down, left and right.

## C++

```cpp{numberLines: true}
class Solution {
public:
    // Utility function to check if cell is within grid
    bool isSafe(int newRow, int newCol, int rows, int cols) {
        return (newRow >= 0 && newCol >= 0 && newRow <= rows && newCol <= cols);
    }

    vector<vector<int>> updateMatrix(vector<vector<int>>& matrix) {
        int rows = matrix.size();

        if(rows == 0)
            return {};

        int cols = matrix[0].size();

        // Matrix to store distances from 0's
        vector<vector<int>> distances(rows, vector<int>(cols, INT32_MAX));

        // Queue for BFS
        queue<pair<int, int>> bfs;

        for(int i=0; i<rows; i++) {
            for(int j=0; j<cols; j++) {
                // All `0 cells` are at a distance of 0
                if(matrix[i][j] == 0) {
                    distances[i][j] = 0;
                    bfs.push_back({ i, j });
                }
            }
        }

        vector<int> dx = { 1, 0, -1, 0};
        vector<int> dy = { 0, 1, 0, -1};

        int row, col, newRow, newCol;

        while(!bfs.empty()) {
            tie(row, col) = bfs.front();
            bfs.pop();

            for(int i=0; i<4; i++) {
                // Get the next neighbouring row and col
                newRow = dx[i];
                newCol = dy[i];

                // Process only those neighbours that are
                // within the grid and have value 1
                if(isSafe(newRow, newCol, rows, cols) && matrix[newRow][newCol] == 1) {
                    // Update the minimum distance if required
                    if(distance[newRow][newCol] > distance[row][col] + 1) {
                        distance[newRow][newCol] = distance[row][col] + 1;
                        bfs.push({ newRow, newCol });
                    }
                }
            }
        }

        // Return the distance matrix
         return distance;
    }
}
```