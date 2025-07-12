//EASY

//1-masala

// let res = [];
// res.push("apple");
// res.push("banana");
// console.log(res);

//2-masala

// let arr = ["red", "green", "blue"];
// arr.pop();
// console.log(arr);

//3-masala

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(2, 4));

//4-masala

// let arr = ["apple", "banana", "grape"];
// console.log(arr.includes("apple"));

//5-masala

// let arr = ["HTML", "CSS", "JS"];
// console.log(arr.join(" - "));

//NORMAL

//1-masala

// let arr = [12, 8, 5, 22, 34, 13];
// console.log(arr.slice(-3));

//2-masala

// let arr = [10, 20, 30, 40];
// console.log(arr.reverse());

//3-masala

// let arr = ["active", "inactive", "active", "banned", "active"];
// let newArr = arr.filter((arr) => arr === "active");
// console.log(newArr);

//4-masala

// function qisqartma(name) {
//   let parts = name.split(" "); // ["Ali", "Valiyev"]
//   let firstName = parts[0];
//   let lastName = parts[1];

//   return `${lastName[0]}.${firstName[0]}.`;
// }

// console.log(getInitials("Ali Valiyev"));

//5-masala

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let n = arr1.concat(arr2)
// console.log(n.reverse());

//6-masala

// let str = "this is JS";
// let arr = str.split(" ");
// let n = arr.reverse();
// console.log(n.join(" "));

//7-masala

// let arr = ["Ali", "Vali", "Hasan"];
// arr.shift();
// arr.push("Umar");
// console.log(arr);

//8-masala

// let arr = new Array(10).fill(0);
// arr.splice(3, 3,1,1,1);
// console.log(arr);

//9-masala

// let arr = ["HTML", "JS", "CSS", "JS", "React", "JS"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`${arr[i]} ${arr.indexOf(arr[i])}`);
// }

//10-masala

// let arr = [1, 2, 3, 4, 5];
// let n = arr.splice(-2);
// console.log(arr);

//11-masala

let arr = [1, 2, 3, 2, 1];
function rever() {
  return arr.join() === arr.toReversed().join();
}
console.log(rever([1, 2, 3, 2, 1]));
