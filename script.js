function test() {
   console.log("Hei fra test funksjonen")
}
test()

let arrow = () => {
   console.log("Hei fra arrow funksjonen")
}
arrow()

function greetUser(name) {
   console.log(`Hello, ${name}!`)
}
greetUser("Gudrunn")

function add(a, b) {
   return a + b
}

let result = add(5, 3)
let resultTwo = add(45, 55)

console.log(result)
console.log(resultTwo)

let returnTest = () => {
   console.log("Return test kjørt")
   return "Hei"
   console.log("Return test kjørt 2")
   // Etter return så slutter funksjonen
}

returnTest()

const calculator = (num1, num2, operator) => {
   let total = 0
   if (operator === "+") {
      return num1 + num2
   } else if (operator === "-") {
      return num1 - num2
   } else if (operator === "*") {
      return num1 * num2
   } else if (operator === "/") {
      return num1 / num2
   } else {
      return "Invalid operator"
   }
}

console.log(calculator(5, 9, "9"))

const calculatorTwo = (num1, num2, operator) => {
   switch (operator) {
      case "+":
         return num1 + num2
      case "-":
         return num1 - num2
      case "*":
         return num1 * num2
      case "/":
         return num1 / num2
      default:
         return "Invalid operator"
   }
}
console.log(calculatorTwo(8, 25, "/"))

const userInput = document.getElementById("user-input")
const displayBtn = document.getElementById("display-button")
const output = document.getElementById("output")

displayBtn.addEventListener("click", () => {
   
   output.textContent = userInput.value
   console.log("button clicked")
})

let message = "Hello WOrld!"

console.log(message.toLowerCase())
console.log(message.toUpperCase())
console.log(message.includes("WOrld!"))
console.log(message.includes("Rain"))

let numbers = [1, 2, 3, 4, 5]

console.log(numbers.push(6))
console.log(numbers)

console.log(numbers.pop())
console.log(numbers)

let doubled = numbers.map((num) => num * 2)
console.log(doubled)

let evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers)

let now = new Date()

console.log(now.toDateString())
console.log(now.getFullYear())
console.log(now.getHours())

let resultMethod = "     Hello, Javascript    "
   .trim()
   .toUpperCase()
   .replace("JAVASCRIPT", "KARTLEGGING")

console.log(resultMethod)

//Array methods

const carBrands = ["BMW", "Mazda", "Nissan", "Chrysler"]

console.log(carBrands.join(" "))

// Ikke bruk delete
delete carBrands[2]
console.log(carBrands)
