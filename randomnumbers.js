function createNumbers() {
  
  // Return a random number between 1 and 100
  
   var firstNum = Math.floor((Math.random() * 100)+1);
   var secondNum = Math.floor((Math.random() * 100)+1);
  
  // Store the random values in each field
   
   var firstField = document.getElementById("first"); 
   firstField.value = firstNum;  
   var secondField = document.getElementById("second"); 
   secondField.value = secondNum;

  
   if (firstNum > secondNum) {

     var el1 = document.getElementById("theMax");
     el1.textContent = "The maximum is " + firstNum;
     var el2 = document.getElementById("theMin");
     el2.textContent = "The minimum is " + secondNum;
     
     }
     
     else {
  
        var el1 = document.getElementById("theMax");
        el1.textContent = "The maximum is " + secondNum;
        var el2 = document.getElementById("theMin");
        el2.textContent = "The minimum is " + firstNum;
       
        }
    
    }