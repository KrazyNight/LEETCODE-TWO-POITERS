//Leetcode: 283. Move Zeroes
//Leetcode: 283. Move Zeroes
//Leetcode: 283. Move Zeroes
//Leetcode: 283. Move Zeroes
//Leetcode: 283. Move Zeroes
//Leetcode: 283. Move Zeroes
//Leetcode: 283. Move Zeroes
//Leetcode: 283. Move Zeroes
//Leetcode: 283. Move Zeroes

/**
 * Leetcode: 283. Move Zeroes
Given an integer array nums, 
move all 0's to the end of it while maintaining
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
 */

/**
 * Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
 */
/**
 * Correct!
 * Correct!
 * Correct!
 * Correct!
 * Correct!
 * Correct!
 * Correct!
 */
/**
var moveZeroes = function(nums) {
    let l = 0;
    for (let r = 0; r < nums.length; r++){
        if (nums[r] != 0) {
            //switch r[] with l[] if r[] is != 0;
            let change = nums[r];
            nums[r] = nums[l];
            nums[l] = change;
            l++;
        }
    }
    
};
*/




//Leetcode: 11. Container With Most Water
//Leetcode: 11. Container With Most Water
//Leetcode: 11. Container With Most Water
//Leetcode: 11. Container With Most Water
//Leetcode: 11. Container With Most Water
//Leetcode: 11. Container With Most Water
//Leetcode: 11. Container With Most Water
//Leetcode: 11. Container With Most Water
//Leetcode: 11. Container With Most Water
//Leetcode: 11. Container With Most Water

/**
 * Leetcode: 11. Container With Most Water
 * 
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints 
of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, \
such that the container contains the most water.

Return the maximum amount of water a container can store.
 */

//look at leetcode graph to help solve
/**Example 1
    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
Explanation: The above vertical lines are represented by 
array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) 
the container can contain is 49.
 */
/**
 * WHY FAIL?
 * WHY FAIL?
 * WHY FAIL?
 * WHY FAIL?
 * WHY FAIL?
 */

 /**
//var maxArea = function(height) {
    //integer array height of length n.
    // n vertical lines drawn such that the two endpoints 
    //ith line are (i, 0) and (i, height[i]).
    //Find two lines that together with the x-axis form a container,
    // such that the container contains the most water.

    // step 1; maxArea = length * width
    // the container contains the most water
    // so while comaring the to hights, use the lowest height of the two poiters

    height = [1,8,6,2,5,4,8,3,7]; // comment out later
    let l = 0;
    let r = height.length - 1;
    let maxArea = 0;

    while ( l < r) {
        let length = r - l;
        let width =  Math.min(height[l], height[r]);
        maxArea = Math.max(maxArea, length * width);

        //maybe add currentArea

        //figure out how to move the l and right pointers 

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
        return maxArea;
    }





//};
  */



//TRY AGAIN
//TRY AGAIN
//TRY AGAIN
//TRY AGAIN
//TRY AGAIN
//TRY AGAIN
//TRY AGAIN
//Correct!!!!
//Correct!!!!
//Correct!!!!
//Correct!!!!
//Correct!!!!
//Correct!!!!
//Correct!!!!
//Correct!!!!
//Correct!!!!
/**
 * Leetcode: 11. Container With Most Water
 * 
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints 
of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, \
such that the container contains the most water.

Return the maximum amount of water a container can store.
 */
/**

var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let maxArea = 0;

    while (l < r) {
        //
        let length = r - l;
        let width = Math.min(height[l], height[r]);
        const currentArea = length * width; 
        maxArea = Math.max(maxArea, currentArea);

        // when will you move your l or r pointers
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maxArea;

};


*/


//Leetcode: 167. Two Sum II - Input Array Is Sorted
//Leetcode: 167. Two Sum II - Input Array Is Sorted
//Leetcode: 167. Two Sum II - Input Array Is Sorted
//Leetcode: 167. Two Sum II - Input Array Is Sorted
//Leetcode: 167. Two Sum II - Input Array Is Sorted
//Leetcode: 167. Two Sum II - Input Array Is Sorted
//Leetcode: 167. Two Sum II - Input Array Is Sorted
//Leetcode: 167. Two Sum II - Input Array Is Sorted


 

/**
 * Leetcode: 167. Two Sum II - Input Array Is Sorted

Given a 1-indexed array of integers numbers that is already sorted
in non-decreasing order, 
find two numbers such that they add up to a specific target number. 
Let these two numbers be 
numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, 
added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution.
You may not use the same element twice.

Your solution must use only constant extra space.
 */


/**
 * Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. 
Therefore, index1 = 1, index2 = 2. We return [1, 2].
 */

/**
var twoSum = function(numbers, target) {
    
};
  */




//Correct!
//Correct!
//Correct!
//Correct!
//Correct!
//Correct!



//LEETCODE: 125. Valid Palindrome
//LEETCODE: 125. Valid Palindrome
//LEETCODE: 125. Valid Palindrome
//LEETCODE: 125. Valid Palindrome
//LEETCODE: 125. Valid Palindrome
//LEETCODE: 125. Valid Palindrome
//LEETCODE: 125. Valid Palindrome
//LEETCODE: 125. Valid Palindrome

/**
 * LEETCODE: 125. Valid Palindrome

A phrase is a palindrome if, 
after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters,
it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */



/**
 * Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

 */

 /**
 var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (s[l] != s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};
*/


//*LEETCODE: 15. 3Sum
//*LEETCODE: 15. 3Sum
//*LEETCODE: 15. 3Sum
//*LEETCODE: 15. 3Sum
//*LEETCODE: 15. 3Sum
//*LEETCODE: 15. 3Sum
//*LEETCODE: 15. 3Sum
//*LEETCODE: 15. 3Sum
//*LEETCODE: 15. 3Sum
//*LEETCODE: 15. 3Sum

/**
 *LEETCODE: 15. 3Sum

Given an integer array nums, 
return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and
 nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
 */


// /**


var threeSum = function(nums) {
    
};

// */





//try again
//try again
//try again
//try again
//try again
//try again
//try again
/**


var threeSum = function(nums) {
    
};

*/


