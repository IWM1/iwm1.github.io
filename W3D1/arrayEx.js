

//Question 1 - – Find array of Odd/Even/Numbers divisible by 4
// let myArray = [10, 21, 32, 45, 36, 89,10];
function solution1(myArray) {
    let tobereturned = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] % 4 == 0) {
            tobereturned.push(myArray[i]);
        }
    }
    return tobereturned;
}
// console.log(solution1(myArray));

// Question2 - Caluculate Sum of all Odd/Even/Numbers divisible by 4
function solution2(input) {
    let sumOfEvens = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) {
            sumOfEvens = sumOfEvens + input[i];
        }
    }
    return sumOfEvens;
}

// console.log(solution2(myArray));

//Question3 - Find Unique Numbers in the Array ################ Adjust ################
let myArray = [10, 21, 32, 45, 36, 89,10];

function solution3(input) {
    let uniqueElements = [];
    for (let i = 0; i < input.length; i++) {
        let isUnique = true;
        for (let j = 0; j < input.length; j++) {
            if (input[i] == input[j]) {
                isUnique = false;
            }
        }
        if(isUnique == true){
            uniqueElements.push(input[i]);
        }
    }
    return uniqueElements;
}

//Question4 - Transform Array to print the type of elements in the Array
 let question5 = [50,"apple",{a:1}];
 function solution4(input) {
     let toreturn = [];
     for(let i =0; i<input.length; i++){
        toreturn.push(typeof input[i])
     }
     return toreturn;
 }
//  console.log(solution4(question5));

// Question5 - DestructureArray
function solution5(input){
    let toreturn = {}
    for(let i = 0; i<input.length; i++){
        let key = typeof input[i] +" "+ i;
        toreturn[key]= input[i];
    }
    return toreturn;
}

// Question6 - . Find Index of first even number 
let test = [13, 21, 32, 45, 36, 89,10];
function solution6(input){
    for(let i =0; i<input.length; i++){
        if(input[i] % 2 == 0){
            return i;
        } 
    }
}

// Question7A - String to Array --
let input7 = 'hello'
function solution7A(input){
    let myArray = []
    for(let i = 0; i<input.length; i++){
        myArray.push(input.charAt[i]);
    }
    return myArray;
}
console.log(solution7A(input7));

// Question7B - Array to string

let input8 = ["h","e","l"]
function solution7B(input){
    let myStr = ""
    for(let i = 0; i<input.length; i++){
        myStr += input[i];
    }
    return myStr;
}
// console.log(solution7B(input8));


module.exports = {solution1, solution2, solution3, solution4, solution5, solution6, solution7A, solution7B}