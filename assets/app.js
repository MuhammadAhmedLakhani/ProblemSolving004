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

// console.log(pen.describeArrow()) //error label is undefined

console.log(this);
console.log(this.label);