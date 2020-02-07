console.log("Привет!")
// координаты корабля
let location1 = 5
let location2 = 6
let location3 = 7

// переменная выстрела
let currentShot

// количество выстрелов
let shots = 0

// сколько раз поппала
let hits = 0

// утонул ли корабль
let isSunk = false

// пишем цикл работающий пока корабль не утонул
while (isSunk === false) {
  // спрашиваю кооориданы у игрока
  currentShot = Number(prompt("Введите число от 0 до 9:"))
  if (currentShot >= 9 || currentShot <= -1 ) {
    alert("Ошибка")
  }
  if (currentShot === 5 || currentShot === 6 || currentShot === 7) {
    alert("Попал!")
  }
  else (
    alert("Промазал!")
  )

  // увеличиваю кол-во выстрелов
  shots = shots + 1
  // проверяю попал ли человек по кораблю
  // для этого буду сверять координату выстрела с каждой координатой корабля
  // если игрок попал то увеличиваю количество попаданий
  if (currentShot === location1 || currentShot === location2 || currentShot|| location3) {
    hits += 1
  }

  // если игрок попал три раза то топлю корабль
  if (hits === 3) {
    alert("Победа!")
    isSunk = true
  }
  // проверка чтобы не было оодной и той же падубы

}
