// 1. Reverse a String//

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("JavaScript")); 


// 2. Check if a String is a Palindrome //

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// 3. Find Factorial of a Number//

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); 

// 4. Generate Fibonacci Sequence//

function fibonacci(n) {
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}
console.log(fibonacci(7)); 

//5. Check if a Number is Prime//

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(4)); // false

//6. Find the Largest Element in an Array//

function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([3, 5, 7, 2, 8])); 


//7. Sort an Array//

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray([3, 8, 1, 4, 6])); 

//8. Remove Duplicates from an Array //

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 

//9. Check if Two Strings are Anagrams//

function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false


// 10. Sum of Elements in an Array //

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); 


// 11. Find intersection of  Two Array //

function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log(intersection([1, 2, 3], [2, 3, 4])); 


// 12. Find Second Largest Number //
function secondLargest(arr) {
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
}
console.log(secondLargest([3, 5, 1, 4, 5])); 

// 13. Implement a Debounce Function //
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}
const log = debounce(console.log, 300);
log("Hello");

14.//check if a number is aRMSTRONG//
function isArmstrong(num) {
    const digits = num.toString().split('');
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), digits.length), 0);
    return sum === num;
}
console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false

15.//Flatten a Nested Array//
function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, 4], 5]])); 

16.//Validate a Balanced Bracket String//
function isBalanced(str) {
    const stack = [];
    const map = { ')': '(', ']': '[', '}': '{' };
    for (let char of str) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if (map[char] && stack.pop() !== map[char]) {
            return false;
        }
    }
    return stack.length === 0;
}
console.log(isBalanced("({[]})")); // true
console.log(isBalanced("({[})")); // false

17.//implement a binary search//
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
console.log(binarySearch([1, 3, 5, 7, 9], 5)); 

18. //shuffle an Array//
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(shuffleArray([1, 2, 3, 4, 5])); 

19. //find missing number in a arry//
function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 4, 5], 5)); 

20. //check for a duplicate charector in a string//
function hasDuplicateCharacters(str) {
    const charSet = new Set();
    for (let char of str) {
        if (charSet.has(char)) return true;
        charSet.add(char);
    }
    return false;
}
console.log(hasDuplicateCharacters("hello")); // true
console.log(hasDuplicateCharacters("abc")); // false


21.//count the number of vowels in a string//
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels("JavaScript")); 

22.//find the gcd//
function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}
console.log(gcd(56, 98)); 

23.//implement a simple promise//
const promiseExample = new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
        success ? resolve("Promise resolved!") : reject("Promise rejected!");
    }, 1000);
});

promiseExample
    .then(message => console.log(message))
    .catch(error => console.error(error));

24.//find the logest word in a string//
function longestWord(sentence) {
    return sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
console.log(longestWord("JavaScript is amazing")); 

25.//Implement a simple closure////find the logest word in a string//
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

26.//check if a number is a perfecet number//
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}
console.log(isPerfectNumber(6)); // true (6 = 1 + 2 + 3)
console.log(isPerfectNumber(28)); // true
console.log(isPerfectNumber(12)); // false

27.//convert celsius to farenheit//
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); 

28.//check if an array is sorted//
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4])); // false

29.//Find all subsets of a set//
function findSubsets(arr) {
    return arr.reduce((subsets, value) => subsets.concat(subsets.map(set => [...set, value])), [[]]);
}
console.log(findSubsets([1, 2, 3])); 

30.//check if a number is even or odd//
function findSubsets(arr) {
    return arr.reduce((subsets, value) => subsets.concat(subsets.map(set => [...set, value])), [[]]);
}
console.log(findSubsets([1, 2, 3])); 
