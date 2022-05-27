//Question1
//Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function question1(number1, number2){
    if(number1>number2){
        return number1;
    }
    else{
        return number2;
    }
}
console.log(question1(10,30));
//Question2
//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function question2(number1, number2, number3){
    if(number1>number2 && number1>number3){
        return number1;
    }
    if(number2>number1 && number2>number3){
        return number2;
    }
    if(number3>number2 && number2>number1){
        return number3;
    }
    else{
        console.log("No greatest number");
    }
}

//Question3
//Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(c){
    if(c === 'a' || c === 'e' ||  c === 'i' || c === 'o' || c === 'u'){
        return true;
    }
    if(c === 'A' || c === 'E' ||  c === 'I' || c === 'O' || c === 'U'){
        return true;
    }
    else{
        return false;
    }
}
//Question4
//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(myArray){
    let sum = 0;
    for(let i = 0; i<myArray.length; i++ ){
        sum = sum + myArray[i];
    }
    return sum;
}

function multiply(myArray){
    let sum = 1;
    for(let i = 0; i<myArray.length; i++ ){
        sum = sum * myArray[i];
    }
    return sum;
}
//Question5
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverseString(input) {
    let solution = "";
        for (let i = input.length - 1; i >= 0; i--) { 
    solution += input[i];
}
return solution; 
}
//Question6
//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(myStrArray){
    let longestWord = myStrArray[0].length;
    for(let i = 1; i<myStrArray.length; i++){
        if(longestWord < myStrArray[i].length){
            longestWord = myStrArray[i].length;
        }
    }
    return longestWord;
}
//Question7
//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(mylength, myStrArray){
    let Solution = [];
    let j = 0;
    for(let i = 0; i<myStrArray.length; i++){
        if( mylength < myStrArray[i].length){
            Solution[j] = myStrArray[i];
            j++;
        }
    }
    return Solution;
}
//Question8 
const question8 = [1,3,5,3,3]; 
// a) multiply each element by 10; 
let solution8A = question8.map(function(element,index,array){
    return element*10;
})
// b) return array with all elements equal to 3; 
let solution8B = question8.filter(function(element,index,array){
    return element === 3;
});
// c) return the product of all elements;
let solution8C = question8.reduce(function(prev,element,index,array){
    return prev*element;
},1);
