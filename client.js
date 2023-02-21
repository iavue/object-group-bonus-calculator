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
  let newObj = {}; // declared newObject variable and set it to empty
  let name = employee.name; // declared name variable and set it to the name property of the employee object
  newObj.name = name; // we're adding a name property to the newObj object and assigning it to the value of employee object's name property's value
  
  let bonus = 0;
  let bonusPercent = 0;
  
  if ( employee.reviewRating === 5 ) {
    bonusPercent += 0.10;
    console.log('Rating is 5, so bonus percent is:', bonusPercent);
  }
  else if ( employee.reviewRating === 4 ) {
    bonusPercent += 0.06;
    console.log('Rating is 4, so bonus percent is:', bonusPercent);
  }
  else if ( employee.reviewRating === 3 ) {
    bonusPercent += 0.04;
    console.log('Rating is 3, so bonus percent is:', bonusPercent);
  }
  else {
    console.log('Rating is 2 or below, so bonus percent is:', bonusPercent);
  }
  //Checking if employee number is 4 digits
    //If it is, add 5% to bonus percent
  if( employee.employeeNumber.length === 4 ) {
    bonusPercent += 0.05;
    console.log('Employee number is 4 digits, so bonus percent is:', bonusPercent);
  } else {
    console.log( 'Employee number is not 4 digits, so bonus percent is unchanged' );
  }

  //Checking if Annual Income is above $65000
    //If it is, subtract 1%
    //Since this is the only condition that can bring 'bonusPercent' below 0, added an && statement
  if( Number(employee.annualSalary) > 65000 && bonusPercent > 0) {
    bonusPercent -= 0.01;
    console.log('Annual salary is above $65000, so bonus percent is:', bonusPercent);
  } else {
    console.log( 'Annual salary is less than $65000 or bonusPercent is 0, so bonus percent is unchanged' );
  }

  //No bonus can be above 13%
  if( bonusPercent > 0.13) {
    bonusPercent = 0.13;
    console.log('Bonus is above 13%, so bonus percent is:', bonusPercent);
  }

  //Testing bonusPercent amount
  console.log( 'Total Bonus percent is:', bonusPercent );
  
  //Adding bonusPercentage property to object
  employee.bonusPercentage = bonusPercent;
  console.log( employee.bonusPercentage );

  //Assigning dollar value from calculation to 'bonus'
  bonus = bonusPercent * Number(employee.annualSalary);
  console.log( bonus );

  // Added totalCompensation property to object
  employee.totalCompensation = Number(employee.annualSalary) + bonus; // Used Number() to convert string to number
  console.log( 'Total compensation is:', employee.totalCompensation);

  
  employee.totalBonus = Math.round(bonus); // Used Math.round() to round to nearest dollar
  console.log('Total bonus:', bonus);

  // return new object with bonus results
  return newObj;
}

// test to make sure the name is added 
console.log( 'Atticus' );
console.log(calculateIndividualEmployeeBonus(employees[0]));
console.log( 'Jem' );
console.log(calculateIndividualEmployeeBonus(employees[1]));
console.log( 'Scout' );
console.log(calculateIndividualEmployeeBonus(employees[2]));
console.log( 'Robert' );
console.log(calculateIndividualEmployeeBonus(employees[3]));
console.log( 'Mayella' );
console.log(calculateIndividualEmployeeBonus(employees[4]));


// console.log(employees[0].name)