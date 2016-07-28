//Drill 1
function sum(num1, num2) {
  return num1 + num2;
}

document.getElementById('dr1').innerHTML = "The sum of 1 and 5 is " + sum(1,5);

//Drill 2
var awesomeArray = [1,4,5,7,3,58,6,2,3,5];

function sumArray(arr) {
  var sum = 0;
  for(var i = 0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

document.getElementById('dr2').innerHTML = `The sum of the numbers in "awesomeArray" is ${sumArray(awesomeArray)}. Here is the array: ${awesomeArray}`;

//Drill 3
var fTemp = 212;
var cTemp = fToC(fTemp);

function fToC(f) {
  return (f - 32) * (5/9);
}

document.getElementById('dr3').innerHTML = `The F temp ${fTemp}&deg; is equal to ${cTemp}&deg; in C`;


//Drill 4
var string = "Hi, my name is Johnny Appleseed!";
var vowels = ['a','e','i','o','u'];

function vowelCount(str) {
  var vCount = 0;
  for(let i = 0; i < str.length; i++) {
    if (vowelCheck(str[i])) {
      vCount += 1;
    }
  }
  return vCount;
}

function vowelCheck(char) {
  for(let i = 0; i < vowels.length; i++) {
    if(char.toLowerCase() === vowels[i].toLowerCase()) {
      return true;
    }
  }
  return false;
}

document.getElementById('dr4').innerHTML = `The number of vowels in "${string}" is ${vowelCount(string)}`;



// Drill 5
var rollArray = [];

function randomDie(){
  return Math.floor((Math.random()*6) + 1)
};

(function rollTheDice() {
  rollArray.unshift(randomDie());
  rollArray.unshift(randomDie());
})();

document.getElementById('dr5').innerHTML = `You just rolled a ${rollArray}`;


// Drill 6

// awesomeArray (see above)

function avgOfArray(arr) {
  var sum = 0;
  for(var i = 0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

document.getElementById('dr6').innerHTML = `The average of the numbers in "awesomeArray" (see drill 2) is ${avgOfArray(awesomeArray)}`;


//Drill 7

(function fizzBuzz() {
  for(var i = 1; i<=100; i++) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
      console.log('FizzBuzz');
    } else if ( i % 3 === 0 ) {
      console.log('Fizz');
    } else if ( i % 5 === 0 ) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
})();

document.getElementById('dr7').innerHTML = `See console!`;


// Drill 8
var number = 7;

function factorial(num) {
  for(var i = num-1; i > 0; i--) {
    num *= i;
  }
  return num;
}

document.getElementById('dr8').innerHTML = `The factorial of ${number} is ${factorial(number)}`;


//drill 9

function fib(num) {
  var a = 0;
  var b = 1;
  var c;

  for(var i = 0; i < num; i++) {
    //console.log(a);
    c = a + b
    a = b
    b = c
  }
  return a;
}

document.getElementById('dr9').innerHTML = `The number that is at the Fibonacci sequence index of 45 is ${fib(45)}`;
