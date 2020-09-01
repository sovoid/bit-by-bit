---
title: Encode and Decode TinyURL
date: 2020-09-01T01:11:52.967Z
description: Design the encode and decode methods for the TinyURL service.
difficulty: medium
emoji: 🧐
category:
  - google
---
## [Encode and Decode TinyURL](https://leetcode.com/problems/encode-and-decode-tinyurl/)

TinyURL is a URL shortening service where you enter a URL such as `https://leetcode.com/problems/design-tinyurl` and it returns a short URL such as `http://tinyurl.com/4e9iAk`.

Design the `encode` and `decode` methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.



## C++



```cpp
class Solution {
private:
    int id = 0;
    unordered_map<string, string> urls;
    const string base62c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

public:
    // Converts decimal to base 62
    string toBase62(int base10) {
        string base62;
        
        if(base10 < 62)
            return string(1, base62c[base10]);
        
        // Convert decimal to base62 by a method similar 
        // to decimal to binary
        while(base10) {
            base62 += base62c[base10 % 62];
            base10 /= 62;
        }
        
        reverse(base62.begin(), base62.end());
        return base62;
    }
    
    string encode(string longUrl) {
        // Generate sid in base62 format
        string sid = toBase62(id++);
        // Store in map for decoding
        urls[sid] = longUrl;
        return "http://tinyurl.com/" + sid;
    }
    
    string decode(string tinyUrl) {
        int index = tinyUrl.size()-1;
      
        // Get the long url from the map using
        while(tinyUrl[index] != '/')
            index -= 1;
      
        string sid = tinyUrl.substr(index+1);
        return urls[sid];
    }
};
// Your Solution object will be instantiated and called as such:
// Solution solution;
// solution.decode(solution.encode(url));
```