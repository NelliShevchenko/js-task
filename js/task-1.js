const message = "Please buy our stuff!";
const hasSpam = message.includes("buy");

if (hasSpam) {
  console.log("Warning: This message contains forbidden words.");
} else {
  console.log("You can safely open this message.");
}


str.startsWith(substr)


const str = "Hello, world!";

console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false (метод чутливий до регістру)



while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}
let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}
function calculateTotal(number) {
  let total = 0;
  
  // Проходимо через всі числа від 1 до number
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  
  return total;
}

// Приклади виклику функції
console.log(calculateTotal(1)); // повертає 1
console.log(calculateTotal(3)); // повертає 6 (1 + 2 + 3)
console.log(calculateTotal(0)); // повертає 0
console.log(calculateTotal(18)); // повертає 171 (сума чисел від 1 до 18)
console.log(calculateTotal(24)); // повертає 300 (сума чисел від 1 до 24)

do {
   statement // код, який буде виконуватися
} while (condition);

let count = 0;

do {
	console.log(`Count: ${count}`);
	count += 1;
} while (count < 5);

for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
function findNumberFromFive(max, target) {
	console.log("Log in the body of the function before the cycle");

  for (let i = 5; i <= max; i += 1) {
    console.log("Current counter value i:", i);

    if (i === target) {
      console.log(`Found the number $ {target}, interrupt the cycle`);
			break;
    }
  }

  console.log("Log in body function after cycle");
}

findNumber(10, 6);
console.log("Log after exiting function");

