import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import isEqual from "lodash";
import _ from "lodash";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const numberobject = {
  qwe: 123,
  qwer: 1234,
  qwert: 12345,
  qwerty: {
    1: 2,
  },
};
const numberobject1 = {
  qwe: 123,
  qwer: 1234,
  qwert: 12345,
  qwerty: {
    1: 2,
    2: 2,
  },
};
// Як перевірити 2 об'єкти на ідентичність?
console.log("qweqweqeqweqwe", Array.isArray(numberobject1)); //Як дізнатися чи є об'єкт масивом?
//

const string = JSON.stringify(numberobject);
const string1 = JSON.stringify(numberobject1);

// console.log("numberobject === numberobject1", numberobject === numberobject1);
console.log("string === string1", string === string1); //сравнение поверхносное через приведению обоих обьектов в stringify

//console.log(deepEqual(numberobject, numberobject1)); //глубокое сравнение обьектов через самопимную функцию deepEqual
console.log("isEqual", isEqual.isEqual(numberobject, numberobject1)); //глубокое сравнение двух обьектов через беблиатеку  lodash метод isEqual

//Як зробити копію об'єкта?

//способи поверхневого копіювання; 1-spread оператор; 2-Object.assign()
const object0 = { ...numberobject1 };
console.log("spread", object0);
const object = Object.assign({}, numberobject); //копривонаие поверхносное

console.log("Object.assign", object);
//
//способи глибокого копіявання; 1-JSON.stringify - JSON.parse; 2-deepClone;
const object3 = JSON.parse(string);
console.log("JSON.parse", object3); //Має обмеження щодо копіювання методів та symbols

const object4 = _.cloneDeep(numberobject1);
console.log("clonwDep", object4);

// перебираючі методи масивів
//  forEach – для перебору масиву.
// - filter – для фільтрації масиву.
// - every/some – для перевірки масиву.
// - map – для трансформації масиву в масив.
// - reduce/reduceRight – для проходу по масиву з обчисленням значення.
// - sort - сортує масив.
const array = [{ qwe: 123 }, { qwe: 123 }, { qwer: 123 }, 3, 7, { qwety: 123 }, 23, 9, 7, { qweyu: 123 }, 34, 3];
const array1 = [8, 6, 2, 1, 3];
console.log("array1", array1);
console.log("array", array);

array.forEach((element) => {
  console.log("forEach", element);
});

const filter = array.filter((element) => typeof element !== "object"); //фильтрует масив как нам нужно
console.log("filter", filter);

const map = array.map((e) => e - 2); //map метод возвращпет масив новых значений
console.log("map", map);
console.log("index", array[4]); //index елемента
const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // reduse складывает значени е масиве
console.log("sum", sum);
const sort = array1.sort((a, b) => a - b);
console.log("sort", sort);

//Як об'єднати масиви?
const spread = { ...array, ...array1 };
console.log("spread", spread);
const concat = array.concat(array1);
console.log("concat", concat);
