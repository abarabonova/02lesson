let secondName = "Иванов"
function logUser() {
  let name = "Иван"
  console.log(name + " " + secondName);
}

logUser()
console.log("secondName: " + secondName)
console.log("name: " + name)

//2
function getFullName() {
  return `Полное имя и фамилия: ${name} ${secondName}`
}
console.log(getFullName("Марк", "Марков"))
let leoFullName = getFullName("Леонард", "Леонтьев")
console.log(leoFullName)

//3
function sayHello(name = "stranger") {
  //if (name === undefined) {
  //  name = "stranger"
  //}
  //name = name || "stranger"
  alert(`Hello ${name}!`)
}
sayHello()



//4
function makeCofee(cups, withMilk) {
  if (withMilk) {
    return console.log(`Варю ${cups} кофе с молоком...`)
  }
  return console.log(`Варю ${cups} кофе без молока...`)
}

makeCofee(22, true)
makeCofee(10, false)


// findMax
// function findMax(a,b) {
//   return `значение ${"a"} значение ${"b"}`
// }
// if ("a" === "b") {
//   console.log("a равно b");
// }
// findMax()

//findMax 2
// let a = 3
// let b = 7
// function findMax() {
//   return b
//   if (a === b) {
//     console.log("числа равны");
//   }
// }
// findMax()

//addOne
// let addOnevar = 10
// function addOne() {
//   addOnevar += 1
//   return addOnevar
// }
// addOne()
// console.log(addOnevar);

function addOne() {
  addOnevar += 1
  return `${addOnevar}`
}
console.log(addOnevar(5))
addOne()


//showQuote
let text = "цитата"
let author = "автор"
function showQuote() {
  console.log("цитата" + " " + "автор");
  if (author === undefined) {
    console.log("Неизвестный автор");
  }
  if (author && text === undefined) {
    return showQuote
  }
}
showQuote()

//nextEven
function nextEven() {
  let oneVar = 22
  let twoVar = 51
}

//findMax

let a = 3
let b = 8
function findMax() {
  return console.log(b);
  if (a === b) {
    console.log("равны");
  }
}
findMax()
