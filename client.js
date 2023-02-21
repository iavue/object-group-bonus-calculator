// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// function loopThroughArray( array ) {
//   for (let i=0; i < array.length; i++) {
//     console.log(array[i]);
//   } 
// }

function loopThroughArray( array ) {
  for (let item of array) {
    // for each item in the array
    console.log( item ); // console log the item which are the objects in the array
  }
}

loopThroughArray(employees)

// This function will calculate 1 employee's bonus!
// 
function calculateIndividualEmployeeBonus( employee ) {  // this employee parameter is an object that is passed in to
  // your logic here
  let newObj = {};
  let name = employee.name; // the name property of the employee object
  newObj.name = name; // we're adding a name property to the newObj object and assigning it to the value of employee object's name property's value
  
  let bonus = 0;
  if ( employee.reviewRating <= 2 ) {
    let bonus = 0;
  }
  
  // return new object with bonus results
  return newObj;
}

// test to make sure the name is added 
console.log(calculateIndividualEmployeeBonus(employees[0]));

// console.log(employees[0].name)