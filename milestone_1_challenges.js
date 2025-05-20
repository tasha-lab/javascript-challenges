//  1. Return the Sum of Two Numbers
let addition = (num1, num2) => {
  return num1 + num2;
};
const sum = addition(4, 5);
console.log(sum);

//Convert Minutes into Seconds

let convert = (minute) => {
  return minute * 60;
};

let convertedMinutes = convert(4);
console.log(convertedMinutes);

//Perimeter of a Rectangle

let values = (length, width) => {
  return (length + width) * 2;
};

let perimeter = values(10, 20);
console.log(perimeter);

//Check Negative

let isNegative = (value) => {
  if (value <= 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};
isNegative(5);
isNegative(-5);

//Can I Drive

function canDrive(name, age) {
  if (age <= 18) {
    console.log(`${name} is not old enough to drive`);
  } else {
    console.log(`${name} is old enough to drive`);
  }
}
canDrive("Antony", 10);
canDrive("Tasha", 30);

//Largest Number

function findLargest(a, b, c) {
  if (a > b && a > c) {
    console.log(`a is greater than b and c`);
  } else if (b > a && b > c) {
    console.log(`b is greater than a and c`);
  } else {
    console.log(`c is greater than a and b`);
  }
}

findLargest(5, 6, 8);
findLargest(5, 6, -8);
findLargest(5, -6, -8);

//BMI Calculator
function calculateBMI(weight, height) {
  let BMI = weight / (height * height);

  if (BMI < 18.5) {
    console.log(`Your BMI is ${BMI} - Under weight`);
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log(`Your BMI is ${BMI} - Normal weight`);
  } else if (BMI >= 25 && BMI <= 29.9) {
    console.log(`Your BMI is ${BMI} - Over weight`);
  } else {
    console.log(`Your BMI is ${BMI} - Obese`);
  }
}
calculateBMI(30, 1.6);
calculateBMI(60, 1.6);
calculateBMI(70, 1.6);
calculateBMI(80, 1.6);

//Greeting Based On Time

function greetUser(name, hour) {
  if (hour >= 5 && hour <= 11) {
    console.log(`Good morning, ${name}`);
  } else if (hour >= 12 && hour <= 17) {
    console.log(`Good afternoon, ${name}`);
  } else if (hour >= 18 && hour <= 21) {
    console.log(`Good evening, ${name}`);
  } else {
    console.log(`Good night, ${name}`);
  }
}

greetUser("Tasha", 6);
greetUser("Tasha", 15);
greetUser("Tasha", 20);
greetUser("Tasha", 23);

function fizzBuzzCheck(number) {
  if (number % 3 == 0) {
    if (number % 5 == 0) {
      console.log(`FizzBuzz`);
    } else if (number % 3 == 0) {
      console.log(`Fizz`);
    }
  }
  // else if(number % 3 == 0){
  //     console.log(`Fizz`)
  // }
  else if (number % 5 == 0) {
    console.log(`Buzz`);
  } else {
    console.log(`${number}`);
  }
}

fizzBuzzCheck(15);
fizzBuzzCheck(9);
fizzBuzzCheck(10);
fizzBuzzCheck(22);

//Perimeter 2
function perimeterAndCircle(l, num) {
  if (l == "s") {
    console.log(num * 4);
  } else if (l == "c") {
    console.log(6.28 * num);
  } else {
    console.log(`invalid`);
  }
}

perimeterAndCircle("s", 4);
perimeterAndCircle("c", 4);
perimeterAndCircle("p", 4);
