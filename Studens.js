function Student(sName, sAge, sRating) { // 1.Создать объект Student
  let Student = {
  name: sName,
  age: sAge,
  rating: sRating,
  getbirthYear() { // вычисление года рождения,
  let today = new Date();
  console.log(today.getFullYear () - this.age);

}
};
return Student;
}

let Student1 = Student('Бен Аффлек', 44, 20);
let Student2 = Student('Мерил Стрип', 70, 30);
let Student3 = Student('Леонардо Ди Каприо', 45, 10);

Student1.getbirthYear();
Student2.getbirthYear();
Student3.getbirthYear();

function leapYear(year){ // определение високосности года рождения (1 или 0)

  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

let someYear1 = leapYear (1976);
let someYear2 = leapYear (1950);
let someYear3 = leapYear (1975);
console.log (someYear1,someYear2,someYear3);

let maxPoints = 100; // Далее считывать данные студентов через функцию prompt():
let Students = [];
for (;;){
  let sName = prompt("Твоё имя");
  let sAge = prompt("Твой вораст");
  let sRating = prompt("Рейтинг");
  Students.push(Student(sName, sAge, sRating));
  let con = confirm("+ еще студент?");
  
if (con == false){
  break;
}
}
console.log(Students);

let whiteList = ['Бен Аффлек', 'Мерил Стрип', 'Леонардо Ди Каприо']; //4.Вывести всю информацию о всех студентах в консоль.
let whiteList1 = [44, 70, 45];
let whiteList2 = [20, 30, 10];


console.log(whiteList , whiteList1, whiteList2);

let StudentsArray = []; // - 3.Определить и вызвать функцию для вычисления среднего рейтинга (в баллах).

StudentsArray.push(Student1);
StudentsArray.push(Student2);
StudentsArray.push(Student3);

let summ = 0;
for (let Student of StudentsArray){
summ = summ + Student.rating;
}
console.log(summ / StudentsArray.length);
