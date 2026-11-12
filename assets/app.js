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
//    const cart = {
//      items: [10, 20, 30],
//      total: 0,
//      addUpArrow() {
//        this.items.forEach((n) => { this.total += n; });
//        return this.total;
//      },
//      addUpRegular() {
//        this.total = 0;
//        this.items.forEach(function (n) { this.total += n; });
//        return this.total;
//      },
//    };
//    console.log(cart.addUpArrow());
//    console.log(cart.addUpRegular());

// Explain the difference in one sentence.
// answer:"addUpArrow callback inherits the cart object so runs coorectly which is oppopsite of addUpRegular "


// Which kind of callback is the safe one inside a method?

// Rule for choosing: use a regular function (or the shorthand addUpArrow()
//  { ... } as above) for methods of an object. Use an arrow function for callbacks inside a method.

//verdict (my-->) : "addUpArrow is safe"


// Part B: Errors and throw (about 50 minutes)

// Predict first, then run.

// Run null.name inside a try/catch, and print error.name and error.message separately.
//  Write down which part of the message names the kind of problem and which names
//  the thing that went wrong. You’ve seen these messages for days.
//  This is the first time you read them on purpose.

// try {
//     null.name
// } catch(error){

//     console.log(error.name)           //Kind of Problem
//     console.log(error.message)           //what is went wrong
// }


// 7:A function that signals a problem by returning text, 
// like your old withdraw, can be ignored by accident.
//  Write divide(a, b) that throws new Error("Cannot divide by zero") when b is 0.
//  Call it three ways and predict each: a normal call,
//  a bad call with no try/catch, and a bad call inside try/catch.
//  Notice what the script does after an uncaught throw.

// const divide = (a, b) => {
//     if(b === 0){
//         throw  new Error("Cannot divide by zero")
//     }
//     return a / b; 
// }

// console.log(divide(10,5));
// // console.log(divide(10,0));

// try {
//     divide(10,0)
// }catch (error){
//     console.log(error.name)
//     console.log(error.message)
// }

// console.log("I am running nonstop")

//8: Add a finally block to one of your try/catch calls
//  that prints "done". Predict when it prints (success, failure, or both).

// const divide = (a, b) => {
//     if(b === 0){
//         throw  new Error("Cannot divide by zero")
//     }
//     return a / b; 
// }

// console.log(divide(10,5));
// // console.log(divide(10,0));
// try {
//     divide(10,0)
// }catch (error){
//     console.log(error.name)
//     console.log(error.message)
// }finally {
//     console.log("done")
// }

//finally runs on both success (try runs) and failure (catch runs) scnarios

//9:Write parseAge(text): it returns a number, and it throws with a 
// clear message for blank text, non-numbers, negatives, 
// and anything over 120. Write the caller so it catches the error
//  and prints a friendly line. Test with "25", " ", "abc", "-3", "200", and "0" (is 0 valid? decide).

// const parseAge = (text) => {
//     if(text === "") {
//         throw new Error ("Provided age is empty")
//     } 
//     if(parseInt(text) < 0) {
//         throw new Error ("Provided age is negative")
//     }
//     if(parseInt(text) > 120) {
//         throw new Error ("Age is not valid range")
//     }
//     if(typeof(parseInt(text)) !== Number){
//         throw new Error ("non number is provided")
//     }
// }

// parseAge("age")


// The bridge to async.Predict what happens:
// javascript
try {
    setTimeout(() => { throw new Error("late"); }, 0);
    console.log("after setTimeout");
} catch (error) {
    console.log("caught:", error.message);
}

// Does `"caught"` ever print? Run it, then write one sentence explaining why,

//answer --> : yes because when the setTimeout callback runs the error is thrown which 
// make the catch block runs and prints the  error 


//  using what you know about `setTimeout` running later.
//  This is the central problem async code solves, so keep your sentence.

// When to throw and when to return (answer in one line of your own after exercises 7 to 9):

// searchContacts finding nothing is a normal outcome, so return [].
// parseAge("abc") means the caller broke the contract, so throw