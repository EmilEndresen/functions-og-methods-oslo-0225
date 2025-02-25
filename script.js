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
