


    var myAFuncitons = require("./arrayEx");
    var myOFuncitons = require("./objectManipulation");


    let question4 = [50,"apple",{a:1}];
    let testArray = [10, 21, 32, 45, 36, 89,10]
    let people = [{name:'Ram',age:20},{name: 'Lakshman',age:15}];
    let input5 = ([50,"apple",{a:1}])
    let input6 = [13, 21, 32, 45, 36, 89,10];
    let input7 = 'hello'
    let input8 = ["h","e","l"]


    //From Array 
    console.log(myAFuncitons.solution1(testArray));
    console.log(myAFuncitons.solution2(testArray));
    console.log(myAFuncitons.solution3(testArray))
    console.log(myAFuncitons.solution4(question4))
    console.log(myAFuncitons.solution5(input5))
    console.log(myAFuncitons.solution6(input6))
    console.log(myAFuncitons.solution7A(input7))
    console.log(myAFuncitons.solution7B(input8))


    //From Objects 
    console.log(myOFuncitons.findYounger(people))
    console.log(myOFuncitons.oldestPerson(people))
   

