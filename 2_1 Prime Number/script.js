function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const userInput = prompt("Enter a number:");
const number = parseInt(userInput, 10);

if (isNaN(number)) {
  alert("Please enter a valid number.");
} else {
  if (isPrime(number)) {
    alert(number + " is a prime number.");
  } else {
    alert(number + " is not a prime number.");
  }
}
