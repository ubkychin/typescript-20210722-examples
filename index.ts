// Import stylesheets
import './style.css';

// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let counter: number = 0;

const button: HTMLElement = document.getElementById('custom-btn');

const counterDisp: HTMLElement = document.getElementById('counterDisp');
counterDisp.innerHTML = counter.toString();

button.addEventListener('click', incrementCounter);


function incrementCounter() {
  counter++;
  counterDisp.innerHTML = counter.toString();

  if (counter >= 10) {
    button.removeEventListener('click', incrementCounter);
    button.addEventListener('click', helloWorld);
  }
}

function helloWorld() {
  button.innerHTML = "Hello World";
}

//----------------------------------------------------------
const runButton: HTMLElement = document.getElementById('run-btn');
runButton.addEventListener('click', fizzbuzz);

function fizzbuzz() {
  let fizzBuzzCounter: number = 1;

  while (fizzBuzzCounter <= 100) {
    if (fizzBuzzCounter % 5 == 0 && fizzBuzzCounter % 3 == 0) {
      console.log("FizzBuzz, " + fizzBuzzCounter);
    } else if(fizzBuzzCounter % 3 == 0) {
      console.log("Fizz, " + fizzBuzzCounter);
    } else if (fizzBuzzCounter % 5 == 0) {
      console.log("Buzz, " + fizzBuzzCounter);
    }  else {
      console.log(fizzBuzzCounter);
    }

    fizzBuzzCounter++;
  }


}

// var is function scoped and let is block scoped

function letvar() {
  var age: number = 10;

  if (age > 10) {
    var foo: number = 20;
    let bar: number = 30;

    

  }

  console.log(foo);

}
  

