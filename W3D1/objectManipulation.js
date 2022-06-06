
// convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}} 


let allPeople = [{name:'Ram',age:20},{name: 'Lakshman',age:15}];

// Question 3 - Get the Oldest person 
function oldestPerson(input){
    let oldestPerson = input[0].name;
    for(let i in input){
        if(input[i].age < oldestPerson){
            oldestPerson = input[i].name;
        }
    }
    return oldestPerson
}

 console.log(oldestPerson(allPeople));

//Question 4 Get the Youngest person name
 let muinpit = [{name:"Ram",age:20},{name:"Lakshman",age:15}]

    function findYounger(input){
        let youngestPerson = input[0].name;
        for(let i in input){
            if(input[i].age > youngestPerson){
                youngestPerson = input[i].name;
            }
        }
        return youngestPerson;
    }

    //oldestPerson("Question3 ", oldestPerson(allPeople));

    oldestPerson(allPeople);
    findYounger(muinpit);


     findYounger("Question4 ", muinpit);
    
 module.exports = {oldestPerson, findYounger}