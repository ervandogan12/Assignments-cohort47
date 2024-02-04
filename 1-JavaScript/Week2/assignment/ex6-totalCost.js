'use strict';

const { forIn, forEach } = require('lodash');

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  beers: 1.75,
  chips: 0.99,
  meat: 6.5,
  cola: 3.3,
  juice: 4.2,
};

function calculateTotalPrice(cartForParty) {
  if (cartForParty !== null) {
    let totalPrice = 0;

    Object.keys(cartForParty).forEach((key) => {
      totalPrice = totalPrice + cartForParty[key];
    });

    return `Total:${totalPrice} € amount`;
  } else {
    //Nothing to do
  }
}

function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');

  calculateTotalPrice(null);
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');

  const calculatedTotalPrice = calculateTotalPrice(cartForParty);

  console.log(calculatedTotalPrice);

  const result1 = calculateTotalPrice(cartForParty);

  const result2 = calculateTotalPrice(cartForParty);

  console.assert(JSON.stringify(result1) === JSON.stringify(result2));
}

function test() {
  test1();
  test2();
}

test();
