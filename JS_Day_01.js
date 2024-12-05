/**
 * 1. Area of a Circle:  
   Write a function to calculate the area of a circle given its radius.
 */

function calculateArea(radius){
    return Math.PI * Math.pow(radius,2)
}
console.log(calculateArea(5))

/**
 * 2. String Interpolation:  
   Create a function that takes two strings (first name and last name) and returns the full name.
 */

function printName(firstName, lastName){
    return firstName + " " + lastName
}
console.log(printName("Arnaw","Baitha"))

/**
 * 3. Convert Minutes to Hours and Minutes:  
   Write a function to convert total minutes into hours and minutes (e.g., 125 minutes → 2 hours 5 minutes).
 */

function timeConversion(minutes){
    console.log((Math.floor(minutes/60)) + " Hours " + (minutes%60) + " Minutes")
}
timeConversion(200)

/**
 * 4. Check Data Type:  
   Create a function that accepts a value and returns its data type.
 */

function checkType(value){
    return typeof value
}
console.log(checkType(""))

/**
 * 5. Temperature Converter:  
   Convert temperatures between Celsius and Fahrenheit using a function.
 */

function convertToFah(celsius){
    return celsius * 1.8 + 32
}
console.log(convertToFah(30))

/**
 * 6. Check Even or Odd:  
   Write a function to check if a number is even or odd.
 */

function evenOdd(num){
    if(num < 0) return "Invalid Choice"
    if(num % 2 == 0) return "Even"
    else return "Odd"
}
console.log(evenOdd(25))

/**
 * 7. Calculate Total Bill:  
   Write a function to calculate the total bill, including a 10% tip.
 */

function getAmount(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum + 0.1 * sum
}
console.log(getAmount([1500,2400,3600]))

/**
 * 8. Compare Two Numbers:  
   Create a function that returns the larger of two numbers.
 */

function largestNumber(num1, num2){
    return Math.max(num1,num2)
}
console.log(largestNumber(3,5))

/**
 * 9. Reverse a String:  
   Write a function to reverse a given string.
 */

function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString("PARUL"))

/**
 * 10. Calculate Age:  
   Given a birth year, calculate the person's current age.
 */

function getAge(birthYear){
    return new Date().getFullYear() - birthYear
}
console.log(getAge(2004))