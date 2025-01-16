//Oops with JavaScript

//***************Factory Functions 
// function personMaker(name,age){
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi i am ${this.name}`);
//         }
//     }
//     return person;
// }



//**************** new Operator(Constructors)
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }


// // Prototype function for Constructor Object
// Person.prototype.talk = function (){
//     console.log(`I am ${this.name}`);
// }






//*************Using Classe for Object Creation.
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`I am ${this.name}`);
//     }
// }



//************ Inheritence ************** */
class Person{
    constructor(name,age){
        console.log("Person construcctor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log("This person can talk");
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        console.log("student constructor");
        this.marks = marks;
    }
}


class Teacher extends Person{
    constructor(name,age,subjects){
          super(name,age);
          console.log("Teachers constructor");
          this.subjects = subjects;
        }
    }

