//Anonomyous funtn with Function expression
var message = function () {
    document.write('Hiee')
  }
  message();
  
  //naming function
  function sample() {           //called part
    console.log("im a named function");
  }
  
  sample();   //calling part
  sample();
  
  var msg=function() {
      document.write('This a web')

  }
  
  //function expression
   var test = function() {
     document.write("Im a function expression!!! ");
   };
   test();
   
  
  //local variables
  function showMessage() {
    var message = 'Hello all Im A Local Variable';
    alert(message);
  }
  showMessage();
  
  
  //global variables
  var text = 'Are you 18+';
  function showMessage() {
    var msg = "Hello " + text;
    // alert(msg);
  }
  alert(text);
  showMessage();
  
  
  //function with parameters
  
  function sample(from, text) {
    document.write(from + ":" + text);
  }
  sample("kk", "Welcome!");
  
  
  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  var age = prompt('How old are you?', 18);
  if (checkAge(age)) {
    alert('Access granted');
  } else {
    alert('Access denied');
  }
  
  
  
 
  
  
  
  
  