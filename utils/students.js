// import the { utils } object using the default import and the { capitalize } and { uppercase } methods using named import on the same line in /students.js
import utils from "./index.js";
const {capitalize,appercase}=utils;
// create a factory function { Person } that takes a name, a last name and an age and returns a new person when called in /students.js
function createPerson(firstName, lastName, age) {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};
// create another factory function called { Student } that inherits from { Person } with additional argument { University } and returns a new student when applied in /students.js
function createStudent  ( firstName, lastName, age, university){

    createPerson.call(this, firstName, lastName, age )

    this.university = university;

 }
 const stud =  new createStudent("Gevorg", "Grigoryan", 30, 'kons' )
 console.log(stud.firstName)

 // convert the { Person } and { Student } factory functions to use the class syntax in /students.js
 class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  class Student extends Person{
    constructor(firstName, lastName, age, university) {
      super(firstName, lastName, age);
      this.university = university;
    }

    // add a method to the { Student } class named { celebrate } that returns the string `I've graduated from ${this.university} Yaay!!!` in /students.js
    celebrate(){
        return `I've graduated from ${this.university} Yaay!!!`
    
    }
};
 // Create 3 new Students from 
  //the class { Student } with different { university } fields 
  const stud1 = new Student("Narek", "Vardanyan",21, "EPH")
  console.log(stud1.celebrate())
  const stud2 = new Student("Karen", "Gevorgyan",23, "Fizkult")
  const stud3 = new Student("Vardan", "Mercuri",24, "Petakan")
  // assign to 3 variables the { celebrate } method calls for the 3 Students
  const cel1 = stud1.celebrate()
  const cel2 = stud2.celebrate()
  const cel3= stud3.celebrate()
  // log to console the 3 celebratory variables after applying them to the 
  //{ uppercase } method of the { utils } object
  console.log(utils.uppercase(cel1))
  console.log(utils.uppercase(cel2))
  console.log(utils.uppercase(cel3))

