var iAmUseless = null;
console.log(iAmUseless);

var standBy;
console.log(standBy);

console.log(5+20);

// output : 8 * 1 = 8
//            8 * 2 = 16
//          8 * 3 = 24
//          8 * 10 = 80
for(var i=1; i<=10; i++){
  var tableOf = 8;
  console.log(tableOf + "*" + i + "=" + tableOf * i);

}
// function declaration and definition
function sum(a,b){
    var total = a+b;
    console.log(total);
}
sum(5,10);

// anonymous function
var funExp = function(a,b){
    return total=a+b;
}
var sum = funExp(15,15);
console.log('the sum of two no is ' +sum);

// Arrow function
const sum1 = () => `the sum1 of the two number is ${(a=5)+(b=6)}`;

console.log(sum1());

// Array 
var myFriends = ['A','B','C','D'];
console.log(myFriends[1]);// array traversal

// we  use for loop to navigate
var myFriends = ['A','B','C','D'];
for(var i=0;i<myFriends.length-1;i++)
{
    console.log(myFriends[i]);
}

// After ES6 we have for..in and for..of looop too
var myFriends = ['A','B','C','D'];
for(let elements in myFriends){
    console.log(elements);
}

//for of loop
var myFriends = ['A','B','C','D'];
for(let elements of myFriends){
    console.log(elements);
}

// for Each loop
var myFriends = ['A','B','C','D'];
myFriends.forEach(function(element, index, array) {
      console.log(element + " index :" + " " + array);
});
 // By Using Arrow function 
  myFriends.forEach((element,index,array) => {
    console.log(element + " index :" + " " + array);
});

// map array
const array1 = [1,4,9,16,25];
//num > 9
 let newArr = array1.map((curElem,index,arr)  => {
     return curElem > 9;
 })
 console.log(array1);
 console.log(newArr);

 let newArr1 = array1.map((curElem,index,arr) =>{
     return `Index no = ${index} and the value is ${curElem} belong to ${arr}`
 })
 console.log(newArr1); 