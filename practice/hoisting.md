## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";
// Output or Error Message
```
code is valid but the output will be different from expected because animal will be initialised to undefined and used before being assigned a valid value.

```js
console.log(animal);
let animal = "monkey";
// Output or Error Message
```
animal cannot be used before initialisation
```js
console.log(animal);
const animal = "monkey";
// Output or Error Message
```
animal cannot be accessed before initialisation

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// Output or Error Message
```
alert Hey Everyone


```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// Output or Error Message
```
alert Hey Everyone

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Output or Error Message
```
sayHello is not declared before execution
```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
```
sayHello is not initialised before execution
