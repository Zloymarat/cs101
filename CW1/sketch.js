// Задача #1
// Переменные. Считать имя пользователя и возраст пользователя, используя функцию prompt(). Вывести полученные данные в консоль. 

// let name = prompt ('скажи своё имя');
// let age = prompt ('нужнен возраст');

// console.log (name + age);


// Задача #2
// Условный оператор. Если пользователь совершеннолетний и его имя Ярополк, то вывести приветствие.

// let whiteList = ['Ярополк'];
// let name = prompt ('нужно твоё имя');
// let age = prompt ('нужнен возраст');

// if (whiteList.includes(name) && age == 18) {
//   console.log('это ты');
// }
         
// else {
//   console.log (name + " это не ты Ярополк" );
// }

// console.log(whiteList);


// Задача #3
// Создайте массив whiteList и заполните его именами известных вам греческих богов. Массив whiteList содержит имена пользователей, которым разрешен доступ к некой секретной информации. Считать имя пользователя. Если имя присутствует в массиве whiteList, то необходимо передать пользователю секретную информацию через вывод в консоль, иначе вывести в консоль любую ложную информацию. 

// let whiteList = ['Афрадита', 'Аид', 'Посейдон'];
// let name = prompt ('enter your name');

// if (whiteList.includes(name)) {
//   console.log('у Зевса родился сын');
// }

// else if (!whiteList.includes(name)) {
//   console.log('секрет остается секретом');
// }         

// console.log(whiteList);


// Задача #4 
// Дополнение к задаче #3. Создать пустой массив blacklist. Считать возраст пользователя. Добавлять в blacklist имя пользователя, если ему меньше 18 лет. 

// let whiteList = ['Афрадита', 'Аид', 'Посейдон'];
// let blacklist = [''];
// let name = prompt ('нужно имя');
// let age = prompt ('нужнен возраст');

// if (whiteList.includes(name)) {
//   console.log('у Зевса родился сын');
// }

// else if(!whiteList.includes(name) && age <= 18){
//   blacklist.push('идешь в blacklist');
// }

// // else if (!whiteList.includes(name)) {
// //   console.log('секрет остается секретом');
// // }         

// console.log(whiteList);


// Задача #5 - я не знаю =\
// Считать данные (имя и возраст) трех пользователей, используя цикл. Вывести имена всех пользователей, у которых возраст нечетный.  

// let name = prompt ('enter your name');
// let age = prompt ('enter your age');

// for(let i = 0; i <= 3; i = i + 1){
 
// }

// console.log(name, age);


// Задача #6
// Выведите следующую последовательность символов в консоль, используя цикл(ы):
// #
// ##
// ###
// ####
// #####
// ####
// ###
// ##
// #

// let s = "#";
// for(let i = 0; i <= 5; i = i + 1){

//   let str = s.repeat(i)
//   console.log (str)
// }

// for(let i = 5; i >= 1; i = i - 1){

//   let str = s.repeat(i)
//   console.log (str)
// }


// Задача #7
// Дан массив [12, 43, 11, 27, 18]. Использую цикл, вывести в консоль символы # в количестве, равном значению элемента массива. 

// Пример.  Для массива [3, 2, 1] в консоль должно быть выведено:
// ####
// ##
// #

// let names = [12, 43, 11, 27, 18];
// let s = "#";

// for(let i = 0; i <= 12; i = i + 12){
//   let str = s.repeat(i)
//   console.log (str)
// }
//   for(let i = 0; i <= 43; i = i + 43){
//   let str = s.repeat(i)
//   console.log (str)
// }
//   for(let i = 0; i <= 11; i = i + 11){
//   let str = s.repeat(i)
//   console.log (str)
// }
//   for(let i = 0; i <= 27; i = i + 27){
//   let str = s.repeat(i)
//   console.log (str)
// }
//   for(let i = 0; i <= 18; i = i + 18){
//   let str = s.repeat(i)
//   console.log (str)
// }


// Задача #8
// Считайте возраст трех пользователей. Определите и вызовите функцию для вычисления среднего возраста пользователей и вывода в консоль. 

// let ages = [];

// for (let i = 0; i <= 2; i = i + 1){
//   let age = prompt ('На сколько ты стар?')
//   ages.push(age);
//   console.log (age)
// }

// function W (ages){
//   let s = 0;
//   for (let i = 0; i < ages.length; i = i + 1){
//     s = s + parseInt(ages[i]);
//   } 
//   return s / ages.length;
// }

// console.log (W(ages))


// Задача #9
// Вычислить сумму квадратов нечетных чисел массива [34, 1, 41, 22, 98] в функции и вернуть результат в точку вызова, где сохранить в переменную и вывести в консоль.

let names = [34, 1, 41, 22, 98];

function name (X){
for (let i = 0; i <= 3; i = i + 1){
  let summ = (1 + 41);
  let square = (summ / 2);
}
  return square;
}













