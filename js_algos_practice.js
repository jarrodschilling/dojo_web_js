// 1) Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function sum(a, b) {
    var x = 0
    if (a <= b) {
        for (var i = a; i <= b; i++) {
            x += i
        }
    }
    else {
        for (var i = b; i <= a; i++) {
            x += i
        }
    }
    console.log(x)
}
// sum(5, 5)



// 2)
// You will be given an array and a value. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function arrayCheck(array, x) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) {
            count += 1
        }
    }
    if (count > 0) {
        return "True"
    }
    else {
        return "False"
    }
}

arr = ["hey", "you", "guyyys", 85, 91, 13, 23, "76"]
check = 76

console.log(arrayCheck(arr, check))



// 3)
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// arr = [1, 2, 3, 4]
// => 1 * 2 * 3 * 4 = 24




// 4)
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]




// 5) Build a function that returns an array of any given array in reverse. return another array in reverse order




// 5.5) build a function that reverses an array without creating a new array