"use strict";

// const pen = {
//   label: "Pen",
//   price: 20,
//   describe: function () {
//     return `${this.label} costs ${this.price}`;  //pen  and 20
//   },
// };

// console.log(pen.describe())


//2:Run const fn = pen.describe; fn();. Predict the result. Then say what was to the left of the dot
//  at the call, and why that changes the answer. (With strict mode on, this one crashes. Read the error message.)

// const fn = pen.describe;
// console.log(fn()); /// this.label undefined as left of the dot is not objext as its a arrow function


//3:, describeArrow: () => \${this.label} costs ${this.price}`

// const pen = {
//   label: "Pen",
//   price: 20,
//   describe: function () {
//     return `${this.label} costs ${this.price}`;  //pen  and 20
//   },
//   describeArrow: () => `${this.label} costs ${this.price}`
// };

// console.log(pen.describeArrow()) //error label is );

//4:Run setTimeout(pen.describe, 0);. Predict whether it works.
//  Passing a method as a callback is the same thing as exercise 2 in
//  disguise. Then fix it in two different ways: wrap it in a function
//  that calls pen.describe(), and use pen.describe.bind(pen).
//  Write one line on how bind differs from the wrapper.

// const pen = {
//   label: "Pen",
//   price: 20,
//   describe: function () {
//     console.log(`${this.label} costs ${this.price}`);  //pen  and 20
//   },
//   describeArrow: () => `${this.label} costs ${this.price}`
// };


// setTimeout(pen.describe, 0); // issue as conncection with the pen object is lost
// setTimeout(() => console.log(pen.describe()),0);   // connection maintained as calling it with Object name

// setTimeout(pen.describe.bind(pen), 0);      //bind return a new function which is attached to pen in oir example 

// Predict the output:
// javascript
   const cart = {
     items: [10, 20, 30],
     total: 0,
     addUpArrow() {
       this.items.forEach((n) => { this.total += n; });
       return this.total;
     },
     addUpRegular() {
       this.total = 0;
       this.items.forEach(function (n) { this.total += n; });
       return this.total;
     },
   };
   console.log(cart.addUpArrow());
   console.log(cart.addUpRegular());

// Explain the difference in one sentence.
// answer:"addUpArrow callback inherits the cart object so runs coorectly which is oppopsite of addUpRegular "


// Which kind of callback is the safe one inside a method?

// Rule for choosing: use a regular function (or the shorthand addUpArrow()
//  { ... } as above) for methods of an object. Use an arrow function for callbacks inside a method.

//verdict (my-->) : "addUpArrow is safe"