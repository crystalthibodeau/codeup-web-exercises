// // const data = require('./data.js');
// // console.log(data.puppy);
// // console.log(data.multiply(2, 22));
//
// ES6
//
// What is ES6?
// – ecmascript2015 is the newest version of JS
// – "syntactical sugar"
//
// let vs const
//     – both block scoped
//
// let: can be reassigned
// const: cannot be reassigned
//
// How to: string interpolation?
// – use back-ticks instead of single or double quotes
// – call variables by using ${} instead of concatenating with (+)
//     – JS can run inside of ${}
//
// How to write functions with arrow syntax?
// – replace 'function' with 'const'
//     – add '=' after function name
// – parameters w/in ()
// – =>
// – {}
//
// When do we need parentheses and curly braces in es6 functions?
// – parentheses are NOT needed when we have only one parameter.
// – curly braces are NOT needed when we are returning a one line expression
//
// Default parameter values can now be assigned with parameter declaration
// – inside of the parentheses (:
//
// Object Destructuring
// – you will get 'undefined' if trying to access an object property or array element that does not exist.
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//     NPM
//
// NPM Basics
// – allows us to use pre-existing source code/libraries
// "Surely, someone else has done this before?"
//
// Why do we use it?
// – makes it easier to use and install dependencies for our projects
// – does the heavy lifting
//
// What is Node?
// – allows us to use JS in our command line
// – packaged with npm at install
//
// What is NPM?
// – a JS package manager, online platform and command line tool
//
// What are packages? Modules?
// – packages are bundles of software/ a way to distribute them
// – modules are packages for Node.js projects
//
// What do they contain?
// – mostly contain JS, but can also contain other files (HTML,CSS...)
//
// How to find and choose packages?
// – popularity is usually a good indicator, but not always.
//
//     What is webpack?
// – module bundler
// – takes in JS files from our projects/ spits out as one main JS files
//
// Transpiling vs Compiling?
// – compiling transforms language syntax into different syntax, usually to a lower level of complexity
// – transpiling is a specific form of compiling: transforming one thing into another thing at the same level of complexity
//
//
import {multiply, puppy} from './data.js';
console.log(puppy);
console.log(multiply(2, 22));