'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    const words = str.split(" ");
    const middleIndex = Math.floor(words.length / 2);
    return words[middleIndex].length;}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    const firstArray = str1.split('');
    const secondArray = str2.split('');
  
    if (firstArray.length !== secondArray.length) {
      return false;
    }
  
    const firstArraySorted = firstArray.sort();
    const secondArraySorted = secondArray.sort();
  
    for (let i = 0; i < firstArraySorted.length; i++) {
      if (firstArraySorted[i] !== secondArraySorted[i]) {
        return false;
      }
    }
    return true;
  }
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    let start = 0;
        let end = arr.length - 1;
        let mid = Math.floor((start + end) / 2);
        
        while(start <= end) {
            if(arr[mid] === int) {
                return mid;
            } else if(arr[mid] < int) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
            mid = Math.floor((start + end) / 2);
        }
        return start;
    }
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };