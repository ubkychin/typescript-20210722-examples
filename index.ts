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

const output: HTMLElement = document.getElementById('output');

function fizzbuzz() {
  let fizzBuzzCounter: number = 1;

  while (fizzBuzzCounter <= 100) {
    if (fizzBuzzCounter % 5 == 0 && fizzBuzzCounter % 3 == 0) {
      output.innerHTML += `<p>Fizzbuzz ${fizzBuzzCounter}</p>`;
    } else if(fizzBuzzCounter % 3 == 0) {
      output.innerHTML += `<p>Fizz ${fizzBuzzCounter}</p>`;
    } else if (fizzBuzzCounter % 5 == 0) {
      output.innerHTML += `<p>Buzz ${fizzBuzzCounter}</p>`;
    }  else {
      output.innerHTML += `<p>${fizzBuzzCounter}</p>`;
    }

    fizzBuzzCounter++;
  }

}

//--------------------- CLASSES -----------------------------------------
class Car {
  rego: string;
  speed: number;

  constructor (rego:string) {
    this.rego = rego;
    this.speed = 0;
  }

  //TODO: don't allow speed to go over 120
  accelerate(): void {
    if(this.speed <= 120) {
      this.speed += 10;
    }

    if(this.speed > 120) {
      this.speed = 120;
    }
    
  }
}
//------------------------ OBJECTS ------------------------------
const accelerateButton:HTMLElement = document.getElementById('accelerate-btn');


let c1: Car = new Car("ABC123");
console.log(c1.speed);

accelerateButton.addEventListener('click', accelerateCar);

function accelerateCar() {
  c1.accelerate();
  displayCarInfo(c1);
}

function displayCarInfo(car: Car) {
  const display: HTMLElement = document.getElementById('carDisp');
  display.innerHTML = `Rego: ${car.rego} | Speed: ${car.speed}`;
}

//---------------- ARRAYS --------------------------

let cars: Array<Car> = [];
cars.push(new Car("ABC123"));
cars.push(new Car("ZXC321"));
cars.push(new Car("QWF789"));

cars[1].speed = 10;
cars[2].speed = 20;

console.log(cars[1].speed);
//-----------------------------------------------

// var is function scoped and let is block scoped

function letvar() {
  var age: number = 10;

  if (age > 10) {
    var foo: number = 20;
    let bar: number = 30;

    

  }

  console.log(foo);

}
  

