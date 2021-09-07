document.write("Check console for");

// longhand
function sayHello(name){
    console.log("Hello", name);
}
sayHello('Nik')

setTimeout(function(){
    console.log("loading")
},2000);

var list=['social','science','math'];
list.forEach(function(i){
    console.log(i)
})

var list=['case1','case2','case3']; list.forEach((listItem) => console.log(listItem))

//Arrow functions
sayHello = (name)=> console.log("Hello", name);
sayHello('Nikhil');

setTimeout(()=>console.log("loading"),2000);

var list=['social','science','math'];
list.forEach((item) => console.log(item));

function sayBye(no){
    console.log("Integer",no);
}
sayBye(50)